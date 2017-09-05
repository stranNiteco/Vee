# Language specification

Vee is a small functional expression language for non-programmers / domain experts that compiles to JavaScript.

Some notable features that we strive for:
- Easy to use with predictable, declarative syntax
- Simplified type system, with only a few primitive types and ways to combine them
- Supports algebraic data types: tuples, records and enumeration to express complex business requirements without resorting to clunky OOP styled inheritance
- No funny business with `null` or `undefined`, missing values must be declared explicitly with the type `option` and handled explicitly using pattern matching or fallbacks.
- Highly composable because everything is an expression
- Functionally inspired where functions are first-class construct that can be:
    - declared with named or anonymously with lambda expressions
    - partially applied to create another function
    - composed together with other functions if their input and output matches
- Strongly-typed to provide safety and scalability

A full program can consists of several type definitions at the top, some variable declarations and the final returning expression:

```
type Shape: enum(
                Rectangle(width: number, height: number)
                | Square(size: number)
                | Circle(radius: number)
                | Triangle(width: number, height: number)
            ),
let shapes: [Rectangle(20, 10), Square(10), Circle(60), Triangle(4,5)],
    area: \(shape: Shape) -> 
        if shape is Rectangle(w, h) then w * h
                  | Square(s) then s ^ 2
                  | Circle(r) then r ^2 * Math.PI
                  | Triangle(w, h) then w * h / 2
in shapes
|> List.transform(area, ?)
|> List.filter(|?>0|, ?)
|> List.reduce(|?1+?2|, ?)
```

## Types

### Scalar data types

<table>
    <thead>
        <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Boolean</td>
            <td>The result of logical/comparison operators</td>
            <td><code>true</code> or <code>false</code></td>
        </tr>
        <tr>
            <td>Number</td>
            <td>Standard IEEE-754 floating point number.</td>
            <td>
                <code>1.25</code>
                <br />
                Special values:
                <ul>
                    <li><code>+Infinity</code></li>
                    <li><code>-Infinity</code></li>
                    <li><code>NaN</code></li>    
                </ul>
            </td>
        </tr>
        <tr>
            <td>String</td>
            <td>Any sequence of unicode characters that are enclosed between two single quote characters</td>
            <td>
                <dl>
                    <dt>A normal string</dt>
                    <dd>
                        <code>'A quick brown fox jumps over the lazy dog'</code>
                    </dd>
                    <dt>A string with escaped delimiters</dt>
                    <dd><code>'The cat\'s tail'</code></dd>
                    <dt>A string with escaped unicode sequence</dt>
                    <dd>
                        <code>'I \u2764 HCMC'</code>
                    </dd>
                    <dt>A string with interpolated variables and field access</dt>
                    <dd>
                        <code>'Good \{timeOfDay}! \{person.name}'</code>
                    </dd>
                </dl>
            </td>
        </tr>
    </tbody>
</table>

### Collection data types

<table>
    <thead>
        <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Examples</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>List</td>
            <td>An ordered sequence of items. Items in a list must be of the same type. There are also shortcuts for generating numeric lists.</td>
            <td>
                <dl>
                    <dt>A list of numbers</dt>
                    <dd>
                        <code>[1,2,3,4,5]</code>
                    </dd>
                    <dt>A list of strings</dt>
                    <dd>
                        <code>['a', 'b', 'c']</code>
                    </dd>
                    <dt>A list of persons</dt>
                    <dd>
                        <code>[{name: 'Bob Page', age: 47}, {name: 'Morgan Everett, age: 63'}]</code>
                    </dd>
                    <dt>A list of lists</dt>
                    <dd>
                        <code>[[0,0], [1,2]]</code>
                    </dd>
                    <dt>An empty list of numbers</dt>
                    <dd>
                        <code>[number]</code>
                    </dd>
                    <dt>A numeric list of numbers from 0 to 100</dt>
                    <dd>
                        <code>[0..100]</code> (same as <code>[0..+1..100]</code>)
                    </dd>
                    <dt>A numeric list of even numbers from 0 to 100</dt>
                    <dd>
                        <code>[0..+2..100]</code>
                    </dd>
                    <dt>A numeric list of numbers from 0 to -10</dt>
                    <dd>
                        <code>[0..-1..100]</code>
                    </dd>
                </dl>
            </td>
        </tr>
        <tr>
            <td>Map</td>
            <td>A sequence of key-indexed values, similar to <code>Dictionary&lt;TKey,TValue&gt;</code> in .NET or  <code>Map</code> in Javascript
            </td>
            <td>
                <dl>
                    <dt>A map of planets and their distances from the sun </dt>
                    <dd>
                        <code>{ ['Mecury']: 0.2, ['Venus']: 2 }</code>
                    </dd>
                    <dt>An empty list with string keys and values that are list of strings</dt>
                    <dd><code>{ [string]:list(string) }</code></dd>
                </dl>
            </td>
        </tr>
    </tbody>
</table>

### Algebraic data types

<table>
    <thead>
        <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Examples</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Tuple</td>
            <td>An ordered sequence of values where items can be of different types.</td>
            <td>
                <dl>
                    <dt></dt>
                    <dd>
                        <code>(1, 'one')</code>
                        <br>
                        <code>(2, 'two', true)</code>
                        <br>
                        <code>(3, 'eleven', [1,1])</code>
                    </dd>
                </dl>
            </td>
        </tr>
        <tr>
            <td>Record</td>
            <td>A record is an unordered collection of values where each item can be labeled and have different types.</td>
            <td>
                <dl>
                    <dt></dt>
                    <dd>
                        <code>{ name: 'Helios', powers: ['omnipotence', 'omniscience', 'hot'] }</code>
                    </dd>
                </dl>
            </td>
        </tr>
        <tr>
            <td>Enumeration</td>
            <td>An enumeration describes objects that can be either one thing or another. This is similar to discriminated union in F# or case class in Swift/Scala.
            <br>
            The runtime defines 2 built-in enumerated types: 
                <ul>
                    <li><code>option</code> is a container for a value of any type that can be missing</li>
                    <li><code>task</code> represent the result of a task, which can be either a result of any type or an error message</li>
                </ul>
            </td>
            <td>
                <dl>
                    <dt>A user defined enum of shapes</dt>
                    <dd>
                        <code>
type Shape: (Square: (size: number) | Circle: (radius: number)))
                        </code>
                    </dd>
                    <dt>The built-in <code>option</code> type</dt>
                    <dd>
                        <code>type option: Some(?) | None</code>
                    </dd>
                    <dt>The built-in <code>task</code> type</dt>
                    <dd>
                        <code>type task: Result(?) | Error(string)</code>
                    </dd>
                </dl>
            </td>
        </tr>
    </tbody>
</table>

### Function

There are several ways to define a function:

#### Lambda expression

They can be defined with name or anonymously with lambda expresion:

```
\(x: number, y: number) -> x + y
```

#### Partial application

A function that's partially applied will also returns another function accepting the rest of the missing parameters.

For example, `List.take` is a function that takes a `number` n and a list of any type `list(?)` then returns n items from that list. The expression `List.take(10, ?)`  returns another function that accepts a list and returns 10 first items.

#### Operator lambda

Most operators can be lifted to become a function:

<table>
    <thead>
        <tr>
            <th>Operator</th>
            <th>Examples</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Unary operators</td>
            <td>
                <dl>
                    <dt>A function that takes a boolean and negate it</dt>
                    <dd><code>|not?|</code></dd>
                    <dt>A function that takes a number and negate it</dt>
                    <dd><code>|-?|</code></dd>
                </dl>
            </td>
        </tr>
        <tr>
            <td>Binary operators</td>
            <td>
                <dl>
                    <dt>A function that takes 2 numbers and add them together</dt>
                    <dd><code>|?1 + ?2|</code></dd>
                    <dt>A function that divide a number by 100</dt>
                    <dd><code>|? / 100|</code></dd>
                    <dt>A function that tests if a number is greater than 100</dt>
                    <dd><code>|100 < ?|</code></dd>
                </dl>
            </td>
        </tr>
        <tr>
            <td>Member access operators</td>
            <td>
                <dl>
                    <dt>A function that takes a Rectangle and gets its width</dt>
                    <dd><code>|?:Rectangle.width|</code></dd>
                    <dt>A function that takes a map from `string` to `number` and returns </dt>
                    <dd><code>|?:map(string,number)}.[12]|</code></dd>
                </dl>
            </td>
        </tr>
    </tbody>
</table>



## Type definition `type ... : ...`

Define the types and aliases to be used in subsequent expressions

```
type Shape: enum(
    Rectangle(width: number, height: number)
    | Square(size: number)
    | Circle(radius: number)
    | Triangle(width: number, height: number)
),
```
## Variable declarations `let ... in ...`

A series of variable declarations that can serve as intermediate values in the subsequent declarations and the final expression.

```
let left  : 0
    right : 1
in left - right
```

### Destructuring declarations: TBD

## Operations

### Arithmetics

<table>
    <thead>
        <tr>
            <th>Operator</th>
            <th>Symbol</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Negation</td>
            <td><code>-</code></td>
            <td><code>-x</code></td>
        </tr>
        <tr>
            <td>Exponentiation</td>
            <td><code>^</code></td>
            <td><code>x ^ y</code></td>
        </tr>
        <tr>
            <td>Multiplication</td>
            <td><code>*</code></td>
            <td><code>x * y</code></td>
        </tr>
        <tr>
            <td>Division</td>
            <td><code>/</code></td>
            <td><code>x / y</code></td>
        </tr>
        <tr>
            <td>Modulo</td>
            <td><code>%</code></td>
            <td><code>x % y</code></td>
        </tr>
        <tr>
            <td>Addition</td>
            <td><code>+</code></td>
            <td><code>x + y</code></td>
        </tr>
        <tr>
            <td>Subtraction</td>
            <td><code>-</code></td>
            <td><code>x - y</code></td>
        </tr>
        <tr>
            <td>Addition</td>
            <td><code>+</code></td>
            <td><code>x + y</code></td>
        </tr>
    </tbody>
</table>

### Comparison

<table>
    <thead>
        <tr>
            <th>Operator</th>
            <th>Symbol</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Equality</td>
            <td><code>=</code></td>
            <td><code>x = y</code></td>
        </tr>
        <tr>
            <td>Non equality</td>
            <td><code>!=</code></td>
            <td><code>x != y</code></td>
        </tr>
        <tr>
            <td>Greater than or equal</td>
            <td><code>>=</code></td>
            <td><code>x >= y</code></td>
        </tr>
        <tr>
            <td>Greater than</td>
            <td><code>></code></td>
            <td><code>x > y</code></td>
        </tr>
        <tr>
            <td>Less than</td>
            <td><code><</code></td>
            <td><code>x < y</code></td>
        </tr>
        <tr>
            <td>Less than or equal</td>
            <td><code><=</code></td>
            <td><code>x <= y</code></td>
        </tr>
    </tbody>
</table>

### Logical

<table>
    <thead>
        <tr>
            <th>Operator</th>
            <th>Symbol</th>
            <th>Example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Not</td>
            <td><code>not</code></td>
            <td><code>not x</code></td>
        </tr>
        <tr>
            <td>And</td>
            <td><code>and</code></td>
            <td><code>x and y</code></td>
        </tr>
        <tr>
            <td>Or</td>
            <td><code>or</code></td>
            <td><code>x or y</code></td>
        </tr>
    </tbody>
</table>

### Combination

<table>
    <thead>
        <tr>
            <th>Operator</th>
            <th>Symbol</th>
            <th>Examples</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>String concatenation</td>
            <td><code>::</code></td>
            <td>
                <code>'Hello' :: ' ' :: 'world'</code>
            </td>
        </tr>
        <tr>
            <td>Function concatenation</td>
            <td><code>&gt;&gt;</code></td>
            <td>
                <code>g >> f</code> is a function that produces the same result as <code>f(g(?))</code></td>
        </tr>
    </tbody>
</table>

### Member access `.`

<table>
    <thead>
        <tr>
            <th>Operators</th>
            <th>Symbol</th>
            <th>Examples</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Record field</td>
            <td><code>.x</code></td>
            <td>
                <code>rect.width</code>
                <br>
                <code>person.name</code>
            </td>
        </tr>
        <tr>
            <td>List/map index</td>
            <td><code>.[x]</code></td>
            <td>
                <code>map['key']</code>
                <br>
                <code>list[0]</code>
            </td>
        </tr>
    </tbody>
</table>

### Type Instropection `typeof`

Returns the name type of the expression on the right as a string `typeof x`

### Invocation `f(x)` and pipe `x |> f`

```
[0..100]
|> List.filter(\(x: number) -> x % 2 = 0, ?)
|> List.transform(|?*?|)
|> List.reduce(|?1+?2|, 0)
```

### Conditional `if ... then ... else ...`

```
if x > y then x else y
```

```
if x < 0 then 'negative'
 | x = 0 then 'zero'
else 'positive'
```

### Pattern matching

Best used for testing the shape of complex data types (list, dictionary, tuple, record or enumeration) to see if they match a certain pattern

#### List pattern

```
let sum: \(nums: list(number)) -> 
    if nums is [] then 0
    | [a, b] then a + b
    | [head, ..rest] then head + sum(rest)
    else 0
in sum([0..100])
```

#### Dictionary pattern

```
if dict is 
| { ['x'], ['y'] } then 'Both x and y are in the map'
| { ['x']:x } then 'Only x=\{x}'
| { ['y']:y } then 'Only y=\{y}'
else 'Neither x or y is in the map'
```

#### Tuple pattern

```
if pair is 
| ('', _) then 'Pair with empty key'
| (_, '') then 'Pair with empty value'
| (key, value) then 'Key=\{key} and Value=\{value}'
else 'Not a pair'
```

#### Record pattern

```
if person is 
| { name: 'Waldo', location: (x, y) } then 'Waldo is at (\{x}, \{y}) on the map'
else 'Not waldo'
```

#### Type pattern

```
let aOption: readInput('A='),
    bOption: readInput('B='),
in if (aOption, bOption) is (Some(a), Some(b)) then 'A=\{a} and B=\{b}'
                         | (Some(a), ?) then 'A=\{a}'
                         | (?, Some(b)) then 'B=\{b}'
                         else 'no input was given'
```

## Operator precedences

<table>
    <thead>
        <tr>
            <th>Group</th>
            <th>Symbols</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Grouping</td>
            <td><code>(...)</code></td>
        </tr>
        <tr>
            <td>Member access</td>
            <td><code>?.field, ?.[1], ?.['key']</code></td>
        </tr>
        <tr>
            <td>Function invocation</td>
            <td><code>f(...)</code></td>
        </tr>
        <tr>
            <td>Not</td>
            <td><code>not</code></td>
        </tr>
        <tr>
            <td>Negation</td>
            <td><code>-</code></td>
        </tr>
        <tr>
            <td>Type introspection</td>
            <td><code>typeof</code></td>
        </tr>
        <tr>
            <td>Exponentiation</td>
            <td><code>^</code></td>
        </tr>
        <tr>
            <td>Multiplication, division, modulo</td>
            <td><code>* / %</code></td>
        </tr>
        <tr>
            <td>Addition, subtraction</td>
            <td><code>+ -</code></td>
        </tr>
        <tr>
            <td>Equality</td>
            <td><code>= !=</code></td>
        </tr>
        <tr>
            <td>Comparison</td>
            <td><code>< <= > >=</code></td>
        </tr>
        <tr>
            <td>Logical</td>
            <td><code>and or</code></td>
        </tr>
        <tr>
            <td>String concatenation</td>
            <td><code>::</code></td>
        </tr>
        <tr>
            <td>Function composition</td>
            <td><code>>></code></td>
        </tr>
        <tr>
            <td>Pipe</td>
            <td><code>|></code></td>
        </tr>
        <tr>
            <td>Conditional</td>
            <td><code>if ... then ... else ...</code></td>
        </tr>
        <tr>
            <td>Pattern matching</td>
            <td><code>if ... is ... when ... then ... else ...</code></td>
        </tr>
    </tbody>
</table>