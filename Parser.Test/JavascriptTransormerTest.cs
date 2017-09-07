using Vee.Parser;
using System;
using Xunit;

namespace Parser.Test
{
    public class JavascriptTransormerTest
    {
        [Theory]
        [InlineData("function() { return 1; }", "1")]
        [InlineData("function() { return 1.25; }", "1.25")]
        [InlineData("function() { return true; }", "true")]
        [InlineData("function() { return false; }", "false")]
        public void Constant(string expected, string input)
        {
            var result = JavascriptTransformer.Transform(input);
            Assert.Equal(expected, result);
        }

        [Theory]
        [InlineData("function() { return 1 + 2; }", "1 + 2")]
        public void Addition(string expected, string input)
        {
            var result = JavascriptTransformer.Transform(input);
            Assert.Equal(expected, result);
        }
    }
}
