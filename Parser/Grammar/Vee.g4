grammar Vee;
// - PARSER RULES
root            : (declarations In)? expression EOF
                ;
type            : typeName                      #builtinType
                | Name                          #namedType
                | Wildcard                      #openType
                | Name typeAnnotation           #aliasType
                | type LParen type RParen       #parameterizedType
                | type Arrow type               #functionType
                | type Comma type               #productType
                | type Pipe type                #sumType
                ;
typeAnnotation  : Colon type
                ;
typeName        : StringType
                | NumberType
                | BooleanType
                | ListType
                | MapType
                | TupleType
                | RecordType
                | EnumType
                | TaskType
                | OptionType
                | UnitType
                ;
// - - EXPRESSIONS
expression
/*literal*/     : constant                                                                      #value                  // 'string', true, false, 1.25, NaN
                | Name                                                                          #variable               // x; x1; _; $; _x; $x
                | LParen expression (Comma expression)+ RParen                                  #tuple                  // (x,y)
                | LBrace recordPair (Comma recordPair)* RBrace                                  #record                 // { key: value }
                | LBrace (mapItems | mapItemType|) RBrace                                       #map                    // { [1]:2, ['key']:value }
                | LBracket (nums|listItems|type|) RBracket                                      #list                   // [x,y,z]; [0..100]; [-1..-2..-100];
/*grouping*/    | LParen expression RParen                                                      #grouping               // (x+y) (any)
/*invocation*/  | expression Dot member                                                         #access                 // x.y, a.b.c.d (object...) x.[1], x.["key"], x.[1].[2], x.["y"].["z"] (list|map|record)
                | expression LParen argument? (Comma argument)* RParen                          #invocation             // f(x); g(x,y) (func)
/*operations*/  | op=Not expression                                                             #logicalNot             // not x, not isPrime (boolean,  func<.. bool>)
                | op=Inverse expression                                                         #predicateInversion     // !isTrue
                | op=(Plus|Minus) expression                                                    #unary                  // +x; -x; (number)
                | op=TypeOf expression                                                          #typeof                 // typeof x (any)
                | left=expression  op=Pow                         right=expression              #exponentiation         // x^y (number)
                | left=expression  op=(Multiply|Divide|Modulo)    right=expression              #multiplicative         // x*y; x/y; x%y (number)
                | left=expression  op=(Plus|Minus)                right=expression              #additive               // x+y; x-y (number)
                | left=expression  op=(Eq|Neq)                    right=expression              #equality               // x=y; x!=y;
                | left=expression  op=(Lt|Lte|Gt|Gte)             right=expression              #comparision            // x<y; x<=y; x>y; x>=y (numbers) func(string*string->string) maybe(string) map(string->list(number))
                | left=expression  op=(AndAlso|OrElse)            right=expression              #logical                // x and y; x or y; isPrime and |?<100| (bool, func<T, bool>)
                | left=expression  op=Concat                      right=expression              #concatenation          // [] :: [1] :: [2,3,4]; {"a":1, "b":2} :: {"b":0, "c":-1}; "string " :: "concatenation" (lists, maps, strings)
                | left=expression  op=(ComposeAnd|ComposeOr)      right=expression              #predicateComposition   // isEven || isPositive
                | left=expression  op=(ComposeLeft|ComposeRight)  right=expression              #functionComposition    // f >> g, f << g
                | left=expression  op=RPipe                       right=expression              #pipe                   // x |> func1 |> func2 |> func3 (where func has only 1 param)
                | Pipe operators Pipe                                                           #operatorLambda         // |?+?| |?-2| |?*2| |-?|
                | Lambda lambdaParams Arrow lambdaBody                                          #lambda                 // \(int x)->x+1; \(x: int, y: int)->x+y
                | If condition (Pipe condition)* Else expression                                #conditional            // if x > 0 then 'positive' | x < 0 then 'negative' else 'zero'
                | If expression Is Pipe? match (Pipe match)* (Else expression)?                 #patternMathching       // if x match <pattern1> when ... then ... | <pattern2> when ... then ... else ...
                ;

// -- LITERALS
constant        : True
                | False
                | Number
                | String
                ;
nums            : from=Number Range ((Plus|Minus) Number Range)? to=Number // numeric range
                ;
recordPair      : Name Colon expression
                ;
mapItems        : mapPair (Comma mapPair)*
                ;
mapPair         : LBracket expression RBracket Colon expression
                ;
mapItemType     : LBracket type RBracket typeAnnotation
                ;
listItems       : expression (Comma expression)* // items for list
                ;
member          : LBracket expression RBracket
                | Name
                ;
argument        : ((Name Colon)? expression)
                | Wildcard
                ;

// - - DECLARATIONS
declarations    : Let declaration (Comma declaration)* Comma?
                ;
declaration     : (Name | extraction) Colon expression
                ;
extraction      : LParen Name (Comma Name)+ RParen                  #tupleExtraction
                | LBrace Name alias? (Comma Name alias)* RBrace     #recordExtraction
                ;
alias           : As Name
                ;

// - - CONDITIONALS and PATTERN MATCHING
condition       : expression Then expression
                ;
match           : pattern (When expression)? Then expression
                ;
pattern         : LParen capture (Comma capture)* (Comma rest)? RParen                  #tuplePattern
                | LBrace fieldPattern (Comma fieldPattern)* (Comma rest)? RBrace        #recordPattern
                | LBracket capture? (Comma capture)* (Comma rest)? RBracket             #listPattern
                | LBrace keyPattern? (Comma keyPattern)* (Comma rest)? RBrace           #mapPattern
                | (SomeCase | ResultCase | ErrorCase) capture                           #enumPattern
                | NoneCase                                                              #nonePattern
                | constant                                                              #constantPattern
                ;
capture         : Name              #variableCapture
                | pattern           #subPatternCapture
                | typeName alias?   #typeCapture
                ;
keyPattern      : LBracket constant RBracket (Colon capture)?
                ;
fieldPattern    : Name Colon capture
                ;
rest            : Range Name
                ;

// -- LAMBDAS
lambdaParams    : Name
                | LParen Name typeAnnotation? (Comma Name typeAnnotation?)* RParen
                ;
lambdaBody      : declarations? expression
                ;
operators       : Wildcard binaryOperators expression
                | expression binaryOperators Wildcard
                | Wildcard typeAnnotation? binaryOperators Wildcard typeAnnotation?
                | unaryOperators Wildcard
                | Wildcard typeAnnotation? Dot member
                ;
binaryOperators : Pow
                | Multiply
                | Divide
                | Modulo
                | Plus
                | Minus
                | Eq
                | Neq
                | AndAlso
                | OrElse
                | Gte
                | Gt
                | Lt
                | Lte
                | Concat
                ;
unaryOperators  : Minus
                | Not
                ;

// - LEXER RULES (ordering is very important for ANTLR)
LBracket        : '[';      // grouping
RBracket        : ']';
LBrace          : '{';
RBrace          : '}';
LParen          : '(';
RParen          : ')';
Comma           : ',';      // separators
Colon           : ':';
Range           : '..';
Arrow           : '->';
Lambda          : '\\';
Pow             : '^';     // arithmetics
Multiply        : '*';
Divide          : '/';
Modulo          : '%';
Plus            : '+';
Minus           : '-';
Eq              : '=';      // equality
Neq             : '!=';
Lt              : '<';      // comparison
Gt              : '>';
Lte             : '<=';
Gte             : '>=';
Pipe            : '|';
RPipe           : '|>';     // invocation and member access
Dot             : '.';
Concat          : '::';     // composition
ComposeRight    : '>>';
ComposeLeft     : '<<';
ComposeAnd      : '&&';
ComposeOr       : '||';
Inverse         : '!';
AndAlso         : 'and';    // logical
OrElse          : 'or';
Not             : 'not';
TypeOf          : 'typeof';
Let             : 'let';    // declaration
In              : 'in';
If              : 'if';     // conditional and resolution
Is              : 'is';
When            : 'when';
Then            : 'then';
Else            : 'else';
True            : 'true';   // literals
False           : 'false';
New             : 'new';
As              : 'as';
Type            : 'type';
StringType      : 'string';  // type names
NumberType      : 'number';
BooleanType     : 'boolean';
EnumType        : 'enum';
TupleType       : 'tuple';
RecordType      : 'record';
ListType        : 'list';
MapType         : 'map';
TaskType        : 'task';
OptionType      : 'option';
UnitType        : 'unit';
SomeCase        : 'some';
NoneCase        : 'none';
ResultCase      : 'result';
ErrorCase       : 'error';
Number          : NaN | (Plus|Minus)? Infinity | NormalNumber;
Name            : Identifier;
Wildcard        : Quiz Digit*;
String          : Quote (Esc | ~['\\])* Quote;
WS              : [ \t\n\r] -> skip;

fragment Quiz           : '?';
fragment NaN            : 'NaN';                                            //num
fragment Infinity       : 'Infinity';
fragment NormalNumber   : Digit+ (Dot Digit+)?;
fragment Digit          : [0-9];
fragment Quote          : '\'';                                             //text
fragment Esc            : '\\' (['\\] | Unicode | Interpolation);
fragment Unicode        : 'u' Hex Hex Hex Hex;
fragment Hex            : [0-9a-fA-F];
fragment Interpolation  : LBrace Name (Dot Name)* RBrace;                               //interpolation, support only 1 variable name at the moment
fragment Identifier     : [a-zA-Z_$][a-zA-Z0-9$_]*;