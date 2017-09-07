using System;
using System.Text;
using Vee.Parser.Grammar;
using Antlr4.Runtime.Tree;
using Antlr4.Runtime;

namespace Vee.Parser
{
    public class JavascriptTransformer : VeeBaseVisitor<string> 
    {
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
        
        public override string VisitRoot(VeeParser.RootContext context) {
            return $"function() {{ return {Visit(context.expression())}; }}";
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
                // TODO: replace escape, 
                result = @string.Symbol.Text;
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

        public override string VisitAdditive(VeeParser.AdditiveContext context)
        {
            var left = Visit(context.left);
            var right = Visit(context.right);
            var op = context.op.Text;
            return $"{left} {op} {right}";
        }
    }
}
