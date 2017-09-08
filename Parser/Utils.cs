using Antlr4.Runtime;
using System;
using System.Collections.Generic;
using System.Text;

namespace Parser
{
    public static class Utils
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

    }
}
