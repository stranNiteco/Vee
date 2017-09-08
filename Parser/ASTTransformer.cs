using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using Vee.Parser.Grammar;
using Antlr4.Runtime.Tree;
using Antlr4.Runtime;

namespace Vee.Parser
{
    public abstract class Node
    {
        public IEnumerable<Node> Children { get; private set; }

    }

    public class ASTTransformer : VeeBaseVisitor<string> 
    {
        public static string Transform(string inputExpresion) 
        {
            var inputStream = new AntlrInputStream(inputExpresion);
	        var lexer = new VeeLexer(inputStream);
	        var commonTokenStream = new CommonTokenStream(lexer);
	        var parser = new VeeParser(commonTokenStream);
	        var rootCtx = parser.root();
	        var visitor = new ASTTransformer();
	        return visitor.Visit(rootCtx);
        }
        
        public override string VisitRoot(VeeParser.RootContext context) 
        {
            return $"function(context) {{ return {Visit(context.expression())}; }}";
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
                result = $"{strContent}";
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
                result = $"[{String.Join(",", listItemStrs)}]";
            }
            else {
                result = "[]";
            }
            return result;
        }

        public override string VisitMap(VeeParser.MapContext context)
        {
            var mapItems = Visit(context.mapItems());
            return $"{ContextName}.map({mapItems})";
        }

        public override string VisitMapItems(VeeParser.MapItemsContext context)
        {
            var pairStrs = context.mapPair()
                .Select(pair => (key: Visit(pair.key), value: Visit(pair.value)))
                .Select(kvp => $"[{kvp.key}, {kvp.value}]");
            return $"[{string.Join(", ", pairStrs)}]";
        }

        public override string VisitRange(VeeParser.RangeContext context)
        {
            var from = context.from.Text;
            var to = context.to.Text;
            var incr = context.incr.Text;
            var sign = LookupJsOperator(context.sign.Type);
            
            string incrFn;
            if (!string.IsNullOrEmpty(incr) && !string.IsNullOrEmpty(sign))
            {
                incrFn = $", x => x {sign} {incr}";
            }
            else {
                incrFn = string.Empty;
            }
            return "{ContextName}.range({from}, {to}{incrFn})";
        }

        public override string VisitGrouping(VeeParser.GroupingContext context)
        {
            var expression = Visit(context.expression());
            return $"({expression})";
        }

        public override string VisitAccess(VeeParser.AccessContext context) {
            var expressionStr = Visit(context.expression());
            var memberStr = Visit(context.member());
            return $"{expressionStr}{memberStr}";
        }

        public override string VisitMember(VeeParser.MemberContext context)
        {
            ITerminalNode name;
            string result;
            if ((name = context.Name()) != null)
            {
                result = $".{name.Symbol.Text}";
            }
            else 
            {
                var expressionStr = Visit(context.expression());
                result = $"[{expressionStr}]";
            }
            return result;
        }

        public override string VisitInvocation(VeeParser.InvocationContext context)
        {
            var fn = Visit(context.expression());
            var arguments = context.argument().Select(VisitArgumentExpresionOrWildcard).ToArray();
            string result;
            if (arguments.Any(x => x.isWildcard)) 
            {
                // TODO: emit a function if there is any wildcard in the argument (consolidate the wildcards by their names first)
                throw new NotImplementedException();
            }
            else
            {
                var argStrs = string.Join(", ", arguments.Where(x => !string.IsNullOrWhiteSpace(x.expression)).Select(x => x.expression));
                result = $"{fn}({argStrs})";
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

        public override string VisitUnary(VeeParser.UnaryContext context)
            => VisitUnaryOperator(context.op, context.expression());

        public override string VisitPredicateInversion(VeeParser.PredicateInversionContext context)
            => VisitUnaryOperatorFunction(context.op, context.expression());

        public override string VisitExponentiation(VeeParser.ExponentiationContext context)
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

        public override string VisitConcatenation(VeeParser.ConcatenationContext context)
            => VisitBinaryOperatorFunction(context.left, context.op, context.right);

        public override string VisitPredicateComposition(VeeParser.PredicateCompositionContext context)
            => VisitBinaryOperatorFunction(context.left, context.op, context.right);

        public override string VisitFunctionComposition(VeeParser.FunctionCompositionContext context)
            => VisitBinaryOperatorFunction(context.left, context.op, context.right);

        public override string VisitPipe(VeeParser.PipeContext context)
        {
            var leftStr = Visit(context.left);
            var rightStr = Visit(context.right);
            return $"{leftStr}({rightStr})";
        }
        
        private string VisitUnaryOperator(IToken @operator, VeeParser.ExpressionContext expressionContext)
        {
            var expression = Visit(expressionContext);
            var fn = LookupJsOperatorFunction(@operator.Type);
            return $"{fn}({expression})";
        }

        private string VisitUnaryOperatorFunction(IToken @operator, VeeParser.ExpressionContext expressionContext)
        {
            var expression = Visit(expressionContext);
            var op = LookupJsOperator(@operator.Type);
            return $"{op}({expression})";
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
            return $"{leftStr} {@operator.Text} {rightStr}";
        }

        private static string LookupJsOperatorFunction(int operatorType)
        {
            // TODO: map x^y to context.Math.pow(), etc...
            throw new NotImplementedException();
        }

        private static string LookupJsOperator(int operatorType) {
            throw new NotImplementedException();
        }

        private static string GetStringContent(ITerminalNode stringNode)
        {
            // TODO: replace escape, 
            return stringNode.Symbol.Text.Trim('\'');
        }
    }
}
