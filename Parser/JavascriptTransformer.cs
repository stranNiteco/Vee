using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using Vee.Parser.Grammar;
using Antlr4.Runtime.Tree;
using Antlr4.Runtime;
using Antlr4.Runtime.Misc;
using Parser;

namespace Vee.Parser
{
    public class JavascriptTransformer : VeeBaseVisitor<string>
    {
        public const string ContextName = "this";
        public static string Transform(string inputExpresion)
        {
            var inputStream = new AntlrInputStream(inputExpresion);
            var lexer = new VeeLexer(inputStream);
            var commonTokenStream = new CommonTokenStream(lexer);
            var parser = new VeeParser(commonTokenStream);
            var rootCtx = parser.root();
            var visitor = new JavascriptTransformer();
            return visitor.Visit(rootCtx);
        }

        public override string VisitRoot(VeeParser.RootContext context)
        {
            var declarations = context.declarations();
            string declarationStrs;
            if (declarations != null)
            {
                declarationStrs = Visit(declarations) + " ";
            }
            else
            {
                declarationStrs = "";
            }
            return $"function() {{ {declarationStrs}return {Visit(context.expression())}; }}";
        }

        public override string VisitConstant(VeeParser.ConstantContext context)
        {
            ITerminalNode number, @string, @true, @false;
            string result;
            if ((number = context.Number()) != null)
            {
                result = number.Symbol.Text;
            }
            else if ((@string = context.String()) != null)
            {
                var strContent = GetStringContent(@string);
                result = strContent;
            }
            else if ((@true = context.True()) != null)
            {
                result = @true.Symbol.Text;
            }
            else if ((@false = context.False()) != null)
            {
                result = @false.Symbol.Text;
            }
            else
            {
                result = "";
            }
            return result;
        }

        public override string VisitVariable(VeeParser.VariableContext context)
        {
            var variableName = context.Name().Symbol.Text;
            // TODO: the variable is local and does not need to be get from the context if it references any of the following
            // - lambda parameter
            // - declaration statements in lambda
            // - declaration statements in root
            // - capture variable in a pattern matching context
            if (context.Parents().Any(x => (x is VeeParser.LambdaContext lambda && (IsDefinedLambdaParam(lambda, variableName) || IsDefinedDeclaration(lambda.body.declarations(), variableName))) ||
                (x is VeeParser.RootContext root && IsDefinedDeclaration(root.declarations(), variableName))
            )) 
            {
                return variableName;
            }
            else
            {
                return $"{ContextName}.{variableName}";
            }
        }

        private bool IsDefinedDeclaration(VeeParser.DeclarationsContext declarations, string variableName)
        {
            if (declarations == null)
            {
                return false;
            }
            else
            {
                var declaredNames = declarations.declaration().Where(d => d.Name() != null).Select(d => d.Name().Symbol.Text);
                return declaredNames.Contains(variableName);
            }
        }

        private bool IsDefinedLambdaParam(VeeParser.LambdaContext lambda, string variableName)
        {
            var lambdaParams = lambda.@params;
            if (lambdaParams is VeeParser.SingleLambdaParamContext singleParam)
            {
                return singleParam.Name().Symbol.Text == variableName;
            }
            else if (lambdaParams is VeeParser.MultipleLambdaParamsContext multipleParams)
            {
                return multipleParams.Name().Any(n => n.Symbol.Text == variableName);
            }
            else
            {
                return false;
            }
        }

        public override string VisitLambda(VeeParser.LambdaContext context)
        {
            var parameters = Visit(context.@params);
            var declarations = context.body.declarations();
            string declarationStrs;
            if (declarations != null)
            {
                declarationStrs = Visit(declarations) + " ";
            }
            else
            {
                declarationStrs = "";
            }
            var body = Visit(context.body.expression());
            
            return $"({parameters} => {{ {declarationStrs}return {body} }})";
        }

        public override string VisitDeclarations([NotNull] VeeParser.DeclarationsContext context)
        {
            var declarations = context.declaration();
            var assignments = declarations.Where(d => d.Name() != null)
                                .Select(d => (name: d.Name().Symbol.Text, value: Visit(d.expression())))
                                .Select(a => $"const {a.name} = {a.value};");
            return assignments.Join(" ");

        }

        public override string VisitSingleLambdaParam([NotNull] VeeParser.SingleLambdaParamContext context)
        {
            return context.Name().Symbol.Text;
        }

        public override string VisitMultipleLambdaParams([NotNull] VeeParser.MultipleLambdaParamsContext context)
        {
            var names = context.Name().Select(n => n.Symbol.Text);
            return $"({names.Join()})";
        }

        public override string VisitConditional([NotNull] VeeParser.ConditionalContext context)
        {
            var conditions = context.condition()
                .Select(c => (ifClause: Visit(c.@if), thenClause: Visit(c.then)))
                .Select(c => $"{c.ifClause} ? {c.thenClause} ")
                .Join(": ");
            var elseClause = Visit(context.@else);
            return $"{conditions}: {elseClause}";
        }

        public override string VisitTuple(VeeParser.TupleContext context)
        {
            var expressionStrs = context.expression().Select(Visit);
            return $"{ContextName}.tuple({string.Join(", ", expressionStrs)})";
        }

        public override string VisitRecord(VeeParser.RecordContext context)
        {
            var pairs = context.recordPair();
            var pairStrs = pairs.Select(pair => (field: pair.field.Text, value: Visit(pair.value)))
                            .Select(pair => $"'{pair.field}': {pair.value}");
            return $"{{ {pairStrs.Join()} }}";
        }

        public override string VisitList(VeeParser.ListContext context)
        {
            VeeParser.RangeContext range;
            VeeParser.ListItemsContext listItems;
            string result;
            if ((range = context.range()) != null)
            {
                result = VisitRange(range);
            }
            else if ((listItems = context.listItems()) != null)
            {
                var listItemStrs = listItems.expression().Select(Visit).ToArray();
                result = $"[{String.Join(", ", listItemStrs)}]";
            }
            else
            {
                result = "[]";
            }
            return result;
        }

        public override string VisitMap(VeeParser.MapContext context)
        {
            var mapItems = context.mapItems();
            if (mapItems != null)
            {
                return $"{ContextName}.map({Visit(mapItems)})";
            }
            else
            {
                return $"{ContextName}.map()";
            }
        }

        public override string VisitMapItems(VeeParser.MapItemsContext context)
        {
            var pairStrs = context.mapPair()
                .Select(pair => (key: Visit(pair.key), value: Visit(pair.value)))
                .Select(kvp => $"[{kvp.key}, {kvp.value}]");
            return $"[{pairStrs.Join()}]";
        }

        public override string VisitRange(VeeParser.RangeContext context)
        {
            var from = context.from.Text;
            var to = context.to.Text;
            var incr = context.incr?.Text ?? string.Empty;

            string incrFn;
            if (!string.IsNullOrEmpty(incr))
            {
                incrFn = $", x => x + {incr}";
            }
            else
            {
                incrFn = string.Empty;
            }
            return $"{ContextName}.list({from}, {to}{incrFn})";
        }

        public override string VisitGrouping(VeeParser.GroupingContext context)
        {
            var expression = Visit(context.expression());
            return $"({expression})";
        }

        public override string VisitAccess(VeeParser.AccessContext context)
        {
            var expressionStr = Visit(context.expression());
            var memberStr = Visit(context.member());
            return $"{expressionStr}{memberStr}";
        }

        public override string VisitIndexMember(VeeParser.IndexMemberContext context)
        {
            var expressionStr = Visit(context.expression());
            return $"[{expressionStr}]";
        }

        public override string VisitFieldMember(VeeParser.FieldMemberContext context)
        {
            return $".{context.Name().Symbol.Text}";
        }

        public override string VisitInvocation(VeeParser.InvocationContext context)
        {
            var fn = Visit(context.expression());
            var args = context.argument().Select(VisitArgumentExpresionOrWildcard).ToArray();
            var argStrs = args.Select(x => x.isWildcard ? x.wildcardName : x.expression);
            var wildcards = args.Where(x => x.isWildcard);
            string result;
            if (wildcards.Any())
            {
                var wildCardsArgs = wildcards.Select(x => x.wildcardName).Distinct();
                result = $"(({wildCardsArgs.Join()}) => {fn}({argStrs.Join()}))";
            }
            else
            {
                result = $"{fn}({argStrs.Join()})";
            }
            return result;
        }

        public (string expression, bool isWildcard, string wildcardName) VisitArgumentExpresionOrWildcard(VeeParser.ArgumentContext context)
        {
            ITerminalNode wildcard;
            (string, bool, string) result;
            if ((wildcard = context.Wildcard()) != null)
            {
                result = (null, true, wildcard.Symbol.Text.TrimStart('?'));
            }
            else
            {
                var expressionStr = Visit(context.expression());
                result = (expressionStr, false, null);
            }
            return result;
        }
        public override string VisitLogicalNot(VeeParser.LogicalNotContext context)
            => VisitUnaryOperator(context.op, context.expression());

        public override string VisitNegation(VeeParser.NegationContext context)
            => VisitUnaryOperator(context.op, context.expression());

        public override string VisitPredicateInversion(VeeParser.PredicateInversionContext context)
            => VisitUnaryOperatorFunction(context.op, context.expression());

        public override string VisitExponentiation(VeeParser.ExponentiationContext context)
            => VisitBinaryOperatorFunction(context.left, context.op, context.right);
        public override string VisitConcatenation(VeeParser.ConcatenationContext context)
         => VisitBinaryOperatorFunction(context.left, context.op, context.right);
        //TODO: create javascript function PredicateComposition
        public override string VisitPredicateComposition(VeeParser.PredicateCompositionContext context)
            => VisitBinaryOperatorFunction(context.left, context.op, context.right);
        //TODO: create FunctionComposition
        public override string VisitFunctionComposition(VeeParser.FunctionCompositionContext context)
            => VisitBinaryOperatorFunction(context.left, context.op, context.right);

        public override string VisitMultiplicative(VeeParser.MultiplicativeContext context)
            => VisitBinaryOperator(context.left, context.op, context.right);
        public override string VisitAdditive(VeeParser.AdditiveContext context)
            => VisitBinaryOperator(context.left, context.op, context.right);
        public override string VisitEquality(VeeParser.EqualityContext context)
            => VisitBinaryOperator(context.left, context.op, context.right);
        public override string VisitComparision(VeeParser.ComparisionContext context)
            => VisitBinaryOperator(context.left, context.op, context.right);
        public override string VisitLogical(VeeParser.LogicalContext context)
            => VisitBinaryOperator(context.left, context.op, context.right);

        public override string VisitPipe(VeeParser.PipeContext context)
        {
            var leftStr = Visit(context.left);
            var rightStr = Visit(context.right);
            return $"{leftStr}({rightStr})";
        }

        private string VisitUnaryOperator(IToken @operator, VeeParser.ExpressionContext expressionContext)
        {
            var expression = Visit(expressionContext);
            var op = LookupJsOperator(@operator.Type);
            return $"{op}{expression}";
        }

        private string VisitUnaryOperatorFunction(IToken @operator, VeeParser.ExpressionContext expressionContext)
        {
            var expression = Visit(expressionContext);
            var fn = LookupJsOperatorFunction(@operator.Type);
            return $"{fn}({expression})";
        }

        private string VisitBinaryOperatorFunction(VeeParser.ExpressionContext left, IToken @operator, VeeParser.ExpressionContext right)
        {
            var leftStr = Visit(left);
            var rightStr = Visit(right);

            var fn = LookupJsOperatorFunction(@operator.Type);
            return $"{fn}({leftStr}, {rightStr})";
        }

        private string VisitBinaryOperator(VeeParser.ExpressionContext left, IToken @operator, VeeParser.ExpressionContext right)
        {
            var leftStr = Visit(left);
            var rightStr = Visit(right);
            var op = LookupJsOperator(@operator.Type);
            return $"{leftStr} {op} {rightStr}";
        }

        private static string LookupJsOperatorFunction(int operatorType)
        {
            switch (operatorType)
            {
                case VeeLexer.Pow:
                    return "this.function.pow";
                case VeeLexer.Concat:
                    return "this.function.concat";
                //TODO: Define function ComposeAnd in javascript    
                case VeeLexer.Inverse:
                    return "this.function.inverse";
                case VeeLexer.ComposeAnd:
                    return "this.function.composeAnd";
                case VeeLexer.ComposeOr:
                    return "this.function.composeOr";
            }
            return "";
        }

        private static string LookupJsOperator(int operatorType)
        {
            switch (operatorType)
            {
                case VeeLexer.Plus:
                    return "+";
                case VeeLexer.Minus:
                    return "-";
                case VeeLexer.Multiply:
                    return "*";
                case VeeLexer.Divide:
                    return "/";
                case VeeLexer.Modulo:
                    return "%";
                case VeeLexer.Lt:
                    return "<";
                case VeeLexer.Lte:
                    return "<=";
                case VeeLexer.Gt:
                    return ">";
                case VeeLexer.Gte:
                    return ">=";
                case VeeLexer.Eq:
                    return "==";
                case VeeLexer.Neq:
                    return "!=";
                case VeeLexer.AndAlso:
                    return "&&";
                case VeeLexer.OrElse:
                    return "||";
                case VeeLexer.Not:
                    return "!";
            }
            return "";
        }

        private static string GetStringContent(ITerminalNode stringNode)
        {
            // TODO: replace escape, 
            return stringNode.Symbol.Text;
        }
    }
}
