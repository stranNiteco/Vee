using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using SF = Microsoft.CodeAnalysis.CSharp.SyntaxFactory;
using SK = Microsoft.CodeAnalysis.CSharp.SyntaxKind;
namespace Vee
{
    public class RoslynTreeTransformer: VeeBaseVisitor<SyntaxNode>
    {
        public override SyntaxNode VisitTrue(VeeParser.TrueContext context)
        {
            return SF.LiteralExpression(SK.TrueLiteralExpression);
        }

        public override SyntaxNode VisitFalse(VeeParser.FalseContext context)
        {
            return SF.LiteralExpression(SK.FalseLiteralExpression);
        }

        public override SyntaxNode VisitNumber(VeeParser.NumberContext context)
        {
            //var numStr = context.GetText();
            //string propName;
            //switch (numStr)
            //{
            //    case "NaN":
            //        propName = nameof(Double.NaN);
            //    case "+Infinity":
            //        propName = nameof(Double.PositiveInfinity);
            //    case "-Infinity":
            //        propName = nameof(Double.NegativeInfinity);
            //    default:

            //}
            //return Expression.Constant(num);
            throw new NotImplementedException();
        }
    }
}
