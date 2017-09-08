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
        [InlineData("function() { return +0.01; }", "+0.01")]
        [InlineData("function() { return -100.5; }", "-100.5")]
        [InlineData("function() { return true; }", "true")]
        [InlineData("function() { return false; }", "false")]
        [InlineData("function() { return 'string'; }", "'string'")]
        public void Constant(string expected, string input)
        {
            var result = JavascriptTransformer.Transform(input);
            Assert.Equal(expected, result);
        }

        [Theory]
        [InlineData("function() { return 1 + 2; }", "1 + 2")]
        [InlineData("function() { return 2 - 1; }", "2 - 1")]
        [InlineData("function() { return 2 * 1; }", "2 * 1")]
        [InlineData("function() { return 2 / 1; }", "2 / 1")]
        [InlineData("function() { return 2 % 1; }", "2 % 1")]
        [InlineData("function() { return 2 < 1; }", "2 < 1")]
        [InlineData("function() { return 2 <= 1; }", "2 <= 1")]
        [InlineData("function() { return 2 == 1; }", "2 = 1")]
        [InlineData("function() { return 2 != 1; }", "2 != 1")]
        [InlineData("function() { return 2 > 1; }", "2 > 1")]
        [InlineData("function() { return 2 >= 1; }", "2 >= 1")]
        [InlineData("function() { return this.function.pow(2, 2); }", "2 ^ 2")]
        [InlineData("function() { return this.function.concat(2, 2); }", "2 :: 2")]
        [InlineData("function() { return --1; }", "--1")]
        [InlineData("function() { return !2; }", "not 2")]
        [InlineData("function() { return 2 && 1; }", "2 and 1")]
        [InlineData("function() { return this.function.composeAnd(2, 1); }", "2 && 1")]
        [InlineData("function() { return this.function.composeOr(2, 1); }", "2 || 1")]
        [InlineData("function() { return this.function.inverse(2); }", "!2")]
        public void Addition(string expected, string input)
        {
            var result = JavascriptTransformer.Transform(input);
            Assert.Equal(expected, result);
        }

        [Theory]
        [InlineData("function() { return this.x + this.y; }", "x + y")]
        public void Variable(string expected, string input) => Assert.Equal(expected, JavascriptTransformer.Transform(input));

        [Theory]
        [InlineData("function() { return this.f(this.x); }", "f(x)")]
        [InlineData("function() { return ((y) => this.f(this.x, y)); }", "f(x, ?y)")]
        [InlineData("function() { return ((y) => this.f(this.x, y, y)); }", "f(x, ?y, ?y)")]
        [InlineData("function() { return ((y, z) => this.f(this.x, y, z)); }", "f(x, ?y, ?z)")]
        public void Invocation(string expected, string input) => Assert.Equal(expected, JavascriptTransformer.Transform(input));

        [Theory]
        [InlineData("function() { return this.tuple(1, 2); }", "(1,2)")]
        [InlineData("function() { return this.tuple(1, 2, 'hello', this.tuple(true, false)); }", "(1,2,'hello',(true,false))")]
        public void Tuple(string expected, string input) => Assert.Equal(expected, JavascriptTransformer.Transform(input));

        [Theory]
        [InlineData("function() { return { 'a': 1, 'b': 2 }; }", "{ a:1, b:2 }")]
        [InlineData("function() { return { 'x': this.y }; }", "{ x: y }")]
        public void Record(string expected, string input) => Assert.Equal(expected, JavascriptTransformer.Transform(input));

        [Theory]
        [InlineData("function() { return []; }", "[]")]
        [InlineData("function() { return [1, 2, 3, 4, 5, 6]; }", "[1,2,3,4,5,6]")]
        [InlineData("function() { return this.list(0, 100, x => x + +10); }", "[0..+10..100]")]
        [InlineData("function() { return this.list(0, 100); }", "[0..100]")]
        [InlineData("function() { return this.list(-10, -100, x => x + -2); }", "[-10..-2..-100]")]
        public void List(string expected, string input) => Assert.Equal(expected, JavascriptTransformer.Transform(input));

        [Theory]
        [InlineData("function() { return this.map([[1, 2]]); }", "{ [1]: 2 }")]
        [InlineData("function() { return this.map(); }", "{  }")]
        public void Map(string expected, string input) => Assert.Equal(expected, JavascriptTransformer.Transform(input));

        [Theory]
        [InlineData("function() { return (1 + 2) * 3; }", "(1 + 2) * 3")]
        [InlineData("function() { return (1); }", "(1)")]
        public void Grouping(string expected, string input) => Assert.Equal(expected, JavascriptTransformer.Transform(input));

        [Theory]
        [InlineData("function() { const x = 1; return x; }", "let x: 1 in x")]
        [InlineData("function() { const x = 1; return this.y; }", "let x: 1 in y")]
        [InlineData("function() { const x = 1; const y = x - 1; return y; }", "let x: 1, y: x - 1 in y")]
        public void Declarations(string expected, string input) => Assert.Equal(expected, JavascriptTransformer.Transform(input));

        [Theory]
        [InlineData("function() { return (x => { return x + 1 }); }", "\\x -> x + 1")]
        [InlineData("function() { return (x => { return x + this.y }); }", "\\x -> x + y")]
        [InlineData("function() { return ((x, y) => { return x + y }); }", "\\(x, y) -> x + y")]
        [InlineData("function() { return ((x, y) => { const z = 1; return x + y + z }); }", "\\(x, y) -> let z: 1 in x + y + z")]
        public void Lambda(string expected, string input) => Assert.Equal(expected, JavascriptTransformer.Transform(input));

        [Theory]
        [InlineData("function() { return this.x < 0 ? 'negative' : this.x > 0 ? 'positive' : 'zero'; }", "if x < 0 then 'negative' | x > 0 then 'positive' else 'zero'")]
        [InlineData("function() { return 1 ? 2 : 3 ? 4 : 5 ? 6 : 7 ? 8 : 9; }", "if 1 then 2 | 3 then 4 | 5 then 6 | 7 then 8 else 9")]
        public void Conditional(string expected, string input) => Assert.Equal(expected, JavascriptTransformer.Transform(input));
    }
}
