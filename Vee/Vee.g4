grammar Vee;
// - PARSER RULES
root            : declarations? expression EOF
                ;
expression
/*literal*/     : True                                                      #true               // true
                | False                                                     #false              // false
                | Number                                                    #number             // 3.14159265358979
                | String                                                    #string             // "xyz"; "X=\{x}, Y=\{y}"
                | DateTime                                                  #datetime           // #2015-01-01#; #2015-01-01 12:00:00+0700#
                | Name                                                      #variable           // x; x1; _; $; _x; $x, list, map...
                | LBracket (dates|nums|items|Lt type Gt) RBracket           #list               // [x,y,z]; [0..100]; [-1..-2..-100];[#2015-01-04..+7..2015-12-31#]
                | LBrace (pairs|Lt type Gt) RBrace                          #map                // {"key":value}
                | LParen parameters RParen Arrow LBrace expression RBrace   #lambda             // (x:int)->{x+1}; (x:int,y:int)->{x+y}
                | LParen expression (Comma expression)+ RParen              #tuple              // (x,y) (any)
/*invocation*/  | expression member+                                        #access             // x.y, a.b.c.d (object...) x[1], x["key"], x[1][2], x["y"]["z"] (list|map|object)
                | expression arguments                                      #invocation         // f(x); g(x,y) (func)
/*grouping*/    | LParen expression RParen                                  #grouping           // (x+y) (any)
/*operations*/  | op=Not expression                                         #logicalNot         // not x, not isPrime (boolean,  func<.. bool>)
                | op=(Plus|Minus|Compl) expression                          #unary              // +x; -x; ~x (numbers)
                | l=expression  op=Pow                      r=expression    #exponentiation     // x**y (numbers)
                | l=expression  op=(Multiply|Divide|Modulo) r=expression    #multiplicative     // x*y; x/y; x%y (numbers)
                | l=expression  op=(Plus|Minus)             r=expression    #additive           // x+y; x-y (numbers)
                | l=expression  op=(Eq|Eeq|Deq|Neq)         r=expression    #equality           // x=y (shallow equality for primitives); x==y (deep equality for list and map); x~=y (epsilon for number); x!=y;
                | l=expression  op=(Lt|Lte|Gt|Gte)          r=expression    #comparision        // x<y; x<=y; x>y; x>=y (numbers, dates, string, boolean, should be chainable)
                | l=expression  op=(And|Xor|Or)             r=expression    #bitwise            // x&y; x^y; x|y (numbers)
                | l=expression  op=(AndAlso|OrElse)         r=expression    #logical            // x and y; x or y; isPrime and isLt100 (bool, func<.. bool>)
                | l=expression  op=Combine                  r=expression    #combination        // f :: g; [] :: [1] :: [2,3,4]; {"a":1, "b":2} :: {"b":0, "c":-1}; "string " :: "concatenation" (functions, resolutions, lists, maps, strings)
                | l=expression  op=RPipe                    r=expression    #pipe               // x |> func1 |> func2 |> func3 (where func has only 1 param)
/*flow control*/| Try expression (continuation | fallback)                  #resolution         // try f(x) then result-> "X=\{x}" else error-> "Error \{error}"; try f(x) else 0
                | If thenClause (Comma thenClause)* elseClause              #conditional        // if x>y then x else y; if x<0 then "negative", x=0 then "zero" else "positive"
                ;
dates           : Hash from=Date incr to=Date Hash              // date range
                ;
nums            : from=int incr to=int                          // numeric range
                ;
int             : (Plus|Minus)? Number
                ;
incr            : Range ((Plus|Minus) Number Range)?            // direction (+ or -) must be specified
                ;
pairs           : pair (Comma pair)*                            // key-value pair, keys have to be string, values can be any expression
                ;
pair            : String Colon expression
                ;
parameters      : parameter? (Comma parameter)*
                ;
parameter       : Name Colon type                               //defaultValue    : True | False | Number | String ;// TODO: consider support for named/optional param with default value
                ;
items           : expression (Comma expression)*                // items for list and indexer
                ;
arguments       : genericArgs? LParen argument? (Comma argument)* RParen     // arguments for function invocation
                ;
genericArgs     : Lt type (Comma type)* Gt
                ;
argument        : (Name Colon)? expression
                ;
member          : LBracket expression RBracket
                | Dot Name
                ;
type            : Name (Lt type (Comma type)* Gt)?              // type annotation, can be recursive
                ;
thenClause      : if=expression Then then=expression            // if-then-else, chainable
                ;
elseClause      : Else else=expression
                ;
continuation    : Then success=handler Else failure=handler     // extract values from optional/task
                ;
handler         : Name Arrow expression
                ;
fallback        : Else expression                               // shorthand syntax for extraction
                ;
declarations    : Let declaration (Comma declaration)* Return   // local variable assignment, support destructuring tuples
                ;
declaration     : Name (Comma Name)* Colon expression
                ;

// - LEXER RULES (ordering is very important for ANTLR)
LBracket        : '[';      // grouping
RBracket        : ']';
LBrace          : '{';
RBrace          : '}';
LParen          : '(';
RParen          : ')';
Comma           : ',';      // separators
Quiz            : '?';
Colon           : ':';
Hash            : '#';
Range           : '..';
Arrow           : '->';
Pow             : '**';     // arithmetics
Multiply        : '*';
Divide          : '/';
Modulo          : '%';
Plus            : '+';
Minus           : '-';
Eq              : '=';      // equality
Eeq             : '~=';
Deq             : '==';
Neq             : '!=';
Lt              : '<';      // comparison
Gt              : '>';
Lte             : '<=';
Gte             : '>=';
Xor             : '^';      // bitwise
And             : '&';
Or              : '|';
Compl           : '~';
RPipe           : '|>';     // invocation and member access
Dot             : '.';
Combine         : '::';     // composition
AndAlso         : 'and';    // logical
OrElse          : 'or';
Not             : 'not';
Let             : 'let';    // declaration
Return          : 'return';
If              : 'if';     // conditional and resolution
Try             : 'try';
Then            : 'then';
Else            : 'else';
True            : 'true';   // literals
False           : 'false';
Date            : TwoDigits TwoDigits Minus TwoDigits Minus TwoDigits;
DateTime        : Hash (Date (Time TimeZone)?) Hash;
Number          : NaN | (Plus|Minus)? Infinity | NormalNumber;
Name            : Identifier;
String          : Quote (Esc | ~["\\])* Quote;
WS              : [ \t\n\r] -> skip;

fragment Time           : ' ' TwoDigits Colon TwoDigits Colon TwoDigits;    //date & time
fragment TimeZone       : ([+-] TwoDigits Colon TwoDigits | 'Z');
fragment TwoDigits      : Digit Digit;
fragment NaN            : 'NaN';                                            //num
fragment Infinity       : 'Infinity';
fragment NormalNumber   : Digit+ (Dot Digit+)?;
fragment Digit          : [0-9];
fragment Quote          : '"';                                              //text
fragment Esc            : '\\' (["\\] | Unicode | Interpolation);
fragment Unicode        : 'u' Hex Hex Hex Hex;
fragment Hex            : [0-9a-fA-F];
fragment Interpolation  : LBrace Name RBrace;                               //interpolation, support only variable name at the moment
fragment Identifier     : [a-zA-Z_$][a-zA-Z0-9$_]*;