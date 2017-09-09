using Antlr4.Runtime;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Vee.Parser.Grammar;

namespace Parser
{
    public static class ParserUtils
    {
        public static IEnumerable<RuleContext> Parents(this RuleContext context)
        {
            if (context == null)
            {
                yield break;
            }

            while (context.Parent != null)
            {
                yield return context.Parent;
                context = context.Parent;
            }
        }

        public static string Join(this IEnumerable<string> items, string separator = ", ") => string.Join(separator, items);

        public static bool IsDefinedDeclaration(VeeParser.DeclarationsContext declarations, string variableName)
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

        public static bool IsDefinedLambdaParam(VeeParser.LambdaContext lambda, string variableName)
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
    }
}
