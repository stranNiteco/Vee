using Vee.Parser;
using System;
using Xunit;

namespace Parser.Test
{
    public class JavascriptTransormerTest
    {
        [Theory]
        [InlineData(" return 1;", "1")]
        [InlineData(" return 1.25;", "1.25")]
        [InlineData(" return +0.01;", "+0.01")]
        [InlineData(" return -100.5;", "-100.5")]
        [InlineData(" return true;", "true")]
        [InlineData(" return false;", "false")]
        [InlineData(" return 'string';", "'string'")]
        public void Constant(string expected, string input)
        {
            var result = JavascriptTransformer.Transform(input).Trim();
            Assert.Equal(expected.Trim(), result.Trim());
        }

        [Theory]
        [InlineData(" return 1 + 2;", "1 + 2")]
        [InlineData(" return 2 - 1;", "2 - 1")]
        [InlineData(" return 2 * 1;", "2 * 1")]
        [InlineData(" return 2 / 1;", "2 / 1")]
        [InlineData(" return 2 % 1;", "2 % 1")]
        [InlineData(" return 2 < 1;", "2 < 1")]
        [InlineData(" return 2 <= 1;", "2 <= 1")]
        [InlineData(" return 2 == 1;", "2 = 1")]
        [InlineData(" return 2 != 1;", "2 != 1")]
        [InlineData(" return 2 > 1;", "2 > 1")]
        [InlineData(" return 2 >= 1;", "2 >= 1")]
        [InlineData(" return this.function.pow(2, 2);", "2 ^ 2")]
        [InlineData(" return this.function.concat(2, 2);", "2 :: 2")]
        [InlineData(" return --1;", "--1")]
        [InlineData(" return !2;", "not 2")]
        [InlineData(" return 2 && 1;", "2 and 1")]
        [InlineData(" return this.function.composeAnd(2, 1);", "2 && 1")]
        [InlineData(" return this.function.composeOr(2, 1);", "2 || 1")]
        [InlineData(" return this.function.inverse(2);", "!2")]         
        [InlineData(" return this.function.composeLeft(2, 1);", "2 << 1")]
        [InlineData(" return this.function.composeRight(2, 1);", "2 >> 1")]   			  
        public void Addition(string expected, string input)
        {
            var result = JavascriptTransformer.Transform(input).Trim();
            Assert.Equal(expected.Trim(), result.Trim());
        }

        [Theory]
        [InlineData(" return this.x + this.y;", "x + y")]
        public void Variable(string expected, string input) => Assert.Equal(expected.Trim(), JavascriptTransformer.Transform(input).Trim());

        [Theory]
        [InlineData(" return this.f(this.x);", "f(x)")]
        [InlineData(" return ((y) => this.f(this.x, y));", "f(x, ?y)")]
        [InlineData(" return ((y) => this.f(this.x, y, y));", "f(x, ?y, ?y)")]
        [InlineData(" return ((y, z) => this.f(this.x, y, z));", "f(x, ?y, ?z)")]
        public void Invocation(string expected, string input) => Assert.Equal(expected.Trim(), JavascriptTransformer.Transform(input).Trim());

        [Theory]
        [InlineData(" return this.tuple(1, 2);", "(1,2)")]
        [InlineData(" return this.tuple(1, 2, 'hello', this.tuple(true, false));", "(1,2,'hello',(true,false))")]
        public void Tuple(string expected, string input) => Assert.Equal(expected.Trim(), JavascriptTransformer.Transform(input).Trim());

        [Theory]
        [InlineData(" return { 'a': 1, 'b': 2 };", "{ a:1, b:2")]
        [InlineData(" return { 'x': this.y };", "{ x: y")]
        public void Record(string expected, string input) => Assert.Equal(expected.Trim(), JavascriptTransformer.Transform(input).Trim());

        [Theory]
        [InlineData(" return [];", "[]")]
        [InlineData(" return [1, 2, 3, 4, 5, 6];", "[1,2,3,4,5,6]")]
        [InlineData(" return this.list(0, 100, x => x + +10);", "[0..+10..100]")]
        [InlineData(" return this.list(0, 100);", "[0..100]")]
        [InlineData(" return this.list(-10, -100, x => x + -2);", "[-10..-2..-100]")]
        public void List(string expected, string input) => Assert.Equal(expected.Trim(), JavascriptTransformer.Transform(input).Trim());

        [Theory]
        [InlineData(" return this.map([[1, 2]]);", "{ [1]: 2")]
        [InlineData("return this.map();", "{  }")]
        public void Map(string expected, string input) => Assert.Equal(expected.Trim(), JavascriptTransformer.Transform(input).Trim());

        [Theory]
        [InlineData(" return (1 + 2) * 3;", "(1 + 2) * 3")]
        [InlineData(" return (1);", "(1)")]
        public void Grouping(string expected, string input) => Assert.Equal(expected.Trim(), JavascriptTransformer.Transform(input).Trim());

        [Theory]
        [InlineData(" const x = 1; return x;", "let x: 1 in x")]
        [InlineData(" const x = 1; return this.y;", "let x: 1 in y")]
        [InlineData(" const x = 1; const y = x - 1; return y;", "let x: 1, y: x - 1 in y")]
        public void Declarations(string expected, string input) => Assert.Equal(expected.Trim(), JavascriptTransformer.Transform(input).Trim());

        [Theory]
        [InlineData(" return (x => { return x + 1 });", "\\x -> x + 1")]
        [InlineData(" return (x => { return x + this.y });", "\\x -> x + y")]
        [InlineData(" return ((x, y) => { return x + y });", "\\(x, y) -> x + y")]
        [InlineData(" return ((x, y) => { const z = 1; return x + y + z });", "\\(x, y) -> let z: 1 in x + y + z")]
        public void Lambda(string expected, string input) => Assert.Equal(expected.Trim(), JavascriptTransformer.Transform(input).Trim());

        [Theory]
        [InlineData(" return this.x < 0 ? 'negative' : this.x > 0 ? 'positive' : 'zero';", "if x < 0 then 'negative' | x > 0 then 'positive' else 'zero'")]
        [InlineData(" return 1 ? 2 : 3 ? 4 : 5 ? 6 : 7 ? 8 : 9;", "if 1 then 2 | 3 then 4 | 5 then 6 | 7 then 8 else 9")]
        public void Conditional(string expected, string input) => Assert.Equal(expected.Trim(), JavascriptTransformer.Transform(input).Trim());
    }
}
