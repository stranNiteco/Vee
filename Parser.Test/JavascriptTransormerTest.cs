using Vee.Parser;
using System;
using Xunit;

namespace Parser.Test
{
    public class JavascriptTransormerTest
    {
        [Theory]
        [InlineData("function(context) { return 1; }", "1")]
        [InlineData("function(context) { return 1.25; }", "1.25")]
        [InlineData("function(context) { return true; }", "true")]
        [InlineData("function(context) { return false; }", "false")]
        public void Constant(string expected, string input)
        {
            var result = JavascriptTransformer.Transform(input);
            Assert.Equal(expected, result);
        }

        [Theory]
        [InlineData("function(context) { return 1 + 2; }", "1 + 2")]
        [InlineData("function(context) { return 2 - 1; }", "2 - 1")]
        [InlineData("function(context) { return 2 * 1; }", "2 * 1")]
        [InlineData("function(context) { return 2 / 1; }", "2 / 1")]
        [InlineData("function(context) { return 2 % 1; }", "2 % 1")]
        [InlineData("function(context) { return 2 < 1; }", "2 < 1")]
        [InlineData("function(context) { return 2 <= 1; }", "2 <= 1")]
        [InlineData("function(context) { return 2 == 1; }", "2 = 1")]
        [InlineData("function(context) { return 2 != 1; }", "2 != 1")]
        [InlineData("function(context) { return 2 > 1; }", "2 > 1")]
        [InlineData("function(context) { return 2 >= 1; }", "2 >= 1")]
        [InlineData("function(context) { return Math.pow(2, 2); }", "2 ^ 2")]
        [InlineData("function(context) { return String.prototype.concat.call(2, 2); }", "2 :: 2")]
        [InlineData("function(context) { return -(1); }", "-1")]
        [InlineData("function(context) { return !(1); }", "not 1")]
        [InlineData("function(context) { return 2 && 1; }", "2 and 1")]
        [InlineData("function(context) { return context.ComposeAnd(2, 1); }", "2 && 1")]
        [InlineData("function(context) { return context.ComposeOr(2, 1); }", "2 || 1")]
        [InlineData("function(context) { return context.Inverse(1); }", "! 1")]
        public void Addition(string expected, string input)
        {
            var result = JavascriptTransformer.Transform(input);
            Assert.Equal(expected, result);
        }
    }
}
