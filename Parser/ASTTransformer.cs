using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using Vee.Parser.Grammar;
using Antlr4.Runtime.Tree;
using Antlr4.Runtime;
using Antlr4.Runtime.Misc;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Parser;


namespace Vee.Parser
{
    public enum NodeType
    {
        Root,
        String, 
        Boolean,
        Number,
        Tuple,
        Record,
        RecordField,
        List,
        Map,
        MapPair,
        MapKey,
        MapValue,
        Variable,
        BoundedVariable,
        FieldAccess,
        IndexAccess,
        Invocation,
        Wildcard,
        Unary,
        Binary,
        Operator,
        Lambda,
        LambdaParams,
        LambdaParam,
        LambdaBody,
        Declaration,
        IfCondition,
        Condition,
        Then,
        Else,
        IfMatch,// ifMatch-x,matches
        Match,
        Pattern,
        When,
    }

    public class Node
    {
        public Node(string text, NodeType nodeType, params Node[] children)
        {
            Text = text;
            Type = nodeType;
            Children = children.Where(n => n != null).ToArray();
        }

        public string Text { get; private set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public NodeType Type { get; private set; }
        public IEnumerable<Node> Children { get; private set; }
    }

    public class ASTTransformer : VeeBaseVisitor<Node> 
    {
        public static Node Transform(string inputExpresion) 
        {
            var inputStream = new AntlrInputStream(inputExpresion);
	        var lexer = new VeeLexer(inputStream);
	        var commonTokenStream = new CommonTokenStream(lexer);
	        var parser = new VeeParser(commonTokenStream);
	        var rootCtx = parser.root();
	        var visitor = new ASTTransformer();
	        return visitor.Visit(rootCtx);
        }

        public override Node VisitRoot([NotNull] VeeParser.RootContext context)
        {
            var declarations = context.declarations();
            IEnumerable<Node> children;
            if (declarations != null)
            {
                children = declarations.declaration().Select(Visit);
            }
            else
            {
                children = Enumerable.Empty<Node>();
            }

            return new Node("root", NodeType.Root, children.Concat(new[] { Visit(context.expression()) }).ToArray());
        }

        public override Node VisitDeclaration([NotNull] VeeParser.DeclarationContext context)
        {
            var name = context.Name().Symbol.Text;
            return new Node(name, NodeType.Declaration, Visit(context.expression()));
        }

        public override Node VisitInvocation([NotNull] VeeParser.InvocationContext context)
        {
            var argNodes = context.argument().Select(arg => arg.Wildcard() != null ? new Node(arg.Wildcard().Symbol.Text, NodeType.Wildcard) : Visit(arg.expression()));

            return new Node("call", NodeType.Invocation, new[] { Visit(context.expression()) }.Concat(argNodes).ToArray());
        }

        public override Node VisitPipe([NotNull] VeeParser.PipeContext context)
        {
            return new Node(context.op.Text, NodeType.Invocation, Visit(context.left), Visit(context.right));
        }

        public override Node VisitFieldMember([NotNull] VeeParser.FieldMemberContext context)
        {
            return new Node("." + context.Name().Symbol.Text, NodeType.FieldAccess);
        }

        public override Node VisitIndexMember([NotNull] VeeParser.IndexMemberContext context)
        {
            return new Node($".[]" , NodeType.FieldAccess, Visit(context.expression()));
        }

        public override Node VisitVariable([NotNull] VeeParser.VariableContext context)
        {
            var variableName = context.Name().Symbol.Text;
            if (context.Parents().Any(x => (x is VeeParser.LambdaContext lambda && (ParserUtils.IsDefinedLambdaParam(lambda, variableName) || ParserUtils.IsDefinedDeclaration(lambda.body.declarations(), variableName))) ||
                (x is VeeParser.RootContext root && ParserUtils.IsDefinedDeclaration(root.declarations(), variableName))
            ))
            {
                return new Node(variableName, NodeType.BoundedVariable);
            }
            else
            {
                return new Node(variableName, NodeType.Variable);
            }
            
        }

        public override Node VisitTuple([NotNull] VeeParser.TupleContext context)
        {
            return new Node("tuple", NodeType.Tuple, context.expression().Select(Visit).ToArray());
        }

        public override Node VisitRecord([NotNull] VeeParser.RecordContext context)
        {
            var pairs = context.recordPair();
            var pairNodes = pairs.Select(pair => (field: pair.field.Text, value: Visit(pair.value)))
                            .Select(pair => new Node(pair.field, NodeType.RecordField, pair.value));
            return new Node("record", NodeType.Record, pairNodes.ToArray());
        }

        public override Node VisitList(VeeParser.ListContext context)
        {
            VeeParser.RangeContext range;
            VeeParser.ListItemsContext listItems;
            Node result;
            if ((range = context.range()) != null)
            {
                result = new Node(range.GetText(), NodeType.List);
            }
            else if ((listItems = context.listItems()) != null)
            {
                var listItemNodes = listItems.expression().Select(Visit).ToArray();
                result = new Node("[]", NodeType.List, listItemNodes);
            }
            else
            {
                result = new Node("[]", NodeType.List);
            }
            return result;
        }

        public override Node VisitMap(VeeParser.MapContext context)
        {
            var mapItems = context.mapItems();
            if (mapItems != null)
            {
                var pairNodes = mapItems.mapPair()
                                .Select(pair => new Node(":", NodeType.MapPair, Visit(pair.key), Visit(pair.value)));
                return new Node("{}", NodeType.Map, pairNodes.ToArray());
            }
            else
            {
                return new Node("{}", NodeType.Map);
            }
        }

        public override Node VisitConditional([NotNull] VeeParser.ConditionalContext context)
        {
            var conditions = context.condition()
                .Select(c =>( new Node("if", NodeType.Condition, Visit(c.@if)), new Node("then", NodeType.Then, Visit(c.then)) ));

            var elseClause = new Node("else", NodeType.Else, Visit(context.@else));
            return new Node("condition", NodeType.IfCondition, conditions.SelectMany(c=>new[] { c.Item1, c.Item2 }).Concat(new[] { elseClause }).ToArray());
        }

        public override Node VisitLambda([NotNull] VeeParser.LambdaContext context)
        {
            var declarations = context.body.declarations();
            Node bodyNode;
            if (declarations != null)
            {
                bodyNode = new Node("", NodeType.LambdaBody, declarations.declaration().Select(Visit).Concat(new[] { Visit(context.body.expression()) }).ToArray());
            }
            else
            {
                bodyNode = Visit(context.body.expression());
            }
            return new Node("->", NodeType.Lambda, Visit(context.lambdaParams()), bodyNode);
        }

        public override Node VisitSingleLambdaParam([NotNull] VeeParser.SingleLambdaParamContext context)
        {
            return new Node(context.Name().Symbol.Text, NodeType.LambdaParam);
        }

        public override Node VisitMultipleLambdaParams([NotNull] VeeParser.MultipleLambdaParamsContext context)
        {
            var names = context.Name().Select(n => n.Symbol.Text);
            return new Node("()", NodeType.LambdaParams, names.Select(n => new Node(n, NodeType.LambdaParam)).ToArray());
        }

        public override Node VisitLeftBinaryLambda([NotNull] VeeParser.LeftBinaryLambdaContext context)
        {
            return new Node(context.op.GetText(), NodeType.Operator, CreateWildcard(context.left), Visit(context.right));
        }

        public override Node VisitRightBinaryLambda([NotNull] VeeParser.RightBinaryLambdaContext context)
        {
            return new Node(context.op.GetText(), NodeType.Operator, Visit(context.left), CreateWildcard(context.right));
        }

        public override Node VisitBinaryLambda([NotNull] VeeParser.BinaryLambdaContext context)
        {
            return new Node(context.op.GetText(), NodeType.Operator, CreateWildcard(context.left), CreateWildcard(context.right));
        }

        public override Node VisitUnaryLambda([NotNull] VeeParser.UnaryLambdaContext context)
        {
            return new Node(context.op.Text, NodeType.Operator, CreateWildcard(context.Wildcard().Symbol));
        }

        private static Node CreateWildcard(IToken wildcard) => new Node(wildcard.Text, NodeType.Wildcard);

        public override Node VisitMemberLambda([NotNull] VeeParser.MemberLambdaContext context)
        {
            return new Node("|.|", NodeType.Operator, CreateWildcard(context.Wildcard().Symbol), Visit(context.member()));
        }

        public override Node VisitConstant([NotNull] VeeParser.ConstantContext context)
        {
            ITerminalNode number, @string, @true, @false;
            Node result;
            if ((number = context.Number()) != null)
            {
                result = new Node(number.Symbol.Text, NodeType.Number);
            }
            else if ((@string = context.String()) != null)
            {
                result = new Node(@string.Symbol.Text, NodeType.String);
            }
            else if ((@true = context.True()) != null)
            {
                result = new Node(@true.Symbol.Text, NodeType.Boolean);
            }
            else if ((@false = context.False()) != null)
            {
                result = new Node(@false.Symbol.Text, NodeType.Boolean);
            }
            else
            {
                throw new InvalidOperationException();
            }
            return result;
        }

        public override Node VisitExponentiation([NotNull] VeeParser.ExponentiationContext context)
            => CreateBinaryNode(context.left, context.op, context.right);

        public override Node VisitMultiplicative([NotNull] VeeParser.MultiplicativeContext context)
            => CreateBinaryNode(context.left, context.op, context.right);

        public override Node VisitAdditive([NotNull] VeeParser.AdditiveContext context)
            => CreateBinaryNode(context.left, context.op, context.right);

        public override Node VisitEquality([NotNull] VeeParser.EqualityContext context)
            => CreateBinaryNode(context.left, context.op, context.right);

        public override Node VisitComparision([NotNull] VeeParser.ComparisionContext context)
            => CreateBinaryNode(context.left, context.op, context.right);

        public override Node VisitLogical([NotNull] VeeParser.LogicalContext context)
            => CreateBinaryNode(context.left, context.op, context.right);

        public override Node VisitConcatenation([NotNull] VeeParser.ConcatenationContext context)
            => CreateBinaryNode(context.left, context.op, context.right);

        public override Node VisitPredicateComposition([NotNull] VeeParser.PredicateCompositionContext context)
            => CreateBinaryNode(context.left, context.op, context.right);

        public override Node VisitFunctionComposition([NotNull] VeeParser.FunctionCompositionContext context)
            => CreateBinaryNode(context.left, context.op, context.right);

        public override Node VisitLogicalNot([NotNull] VeeParser.LogicalNotContext context)
            => CreateUnaryNode(context.op, context.expression());

        public override Node VisitPredicateInversion([NotNull] VeeParser.PredicateInversionContext context)
            => CreateUnaryNode(context.op, context.expression());

        public override Node VisitNegation([NotNull] VeeParser.NegationContext context)
            => CreateUnaryNode(context.op, context.expression());

        private Node CreateBinaryNode(VeeParser.ExpressionContext left, IToken op, VeeParser.ExpressionContext right)
            => new Node(op.Text, NodeType.Binary, Visit(left), Visit(right));

        private Node CreateUnaryNode(IToken op, VeeParser.ExpressionContext right)
            => new Node(op.Text, NodeType.Unary, Visit(right));
    }
}
