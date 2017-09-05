grammar Vee;
// - PARSER RULES
root            : setup? expression EOF
                ;
setup           : typeDefs In
                | declarations
                | typeDefs Comma? declarations
                ;
// - - TYPEDEFS
typeDefs        : Type typeDef (Comma typeDef)*
                ;
typeDef         : Name Colon type
                ;
type            : typeName                                                  #basicType
                | Name                                                      #namedType
                | OpenTypeParam                                             #openType
                | type Arrow type                                           #functionType
                | type Pipe type                                            #sumType
                | type Comma type                                           #productType
                | Name Colon type                                           #aliasType
                | type LParen type RParen                                   #parameterizedType
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
/*literal*/     : constant                                                                      #value
                | Name                                                                          #variable           // x; x1; _; $; _x; $x, list, map...
                | LParen expression (Comma expression)+ RParen                                  #tuple              // (x,y) (any)
                | LBrace recordPair (Comma recordPair)* RBrace                                  #record             // { key: value }
                | LBrace (mapItems | mapType) RBrace                                            #map                // { [1]:2, ['key']:value }
                | LBracket (nums|listItems|type) RBracket                                       #list               // [x,y,z]; [0..100]; [-1..-2..-100];
/*grouping*/    | LParen expression RParen                                                      #grouping           // (x+y) (any)
/*invocation*/  | expression Dot member                                                         #access             // x.y, a.b.c.d (object...) x.[1], x.["key"], x.[1].[2], x.["y"].["z"] (list|map|record)
                | expression LParen argument? (Comma argument)* RParen                          #invocation         // f(x); g(x,y) (func)
/*operations*/  | op=Not expression                                                             #logicalNot         // not x, not isPrime (boolean,  func<.. bool>)
                | op=(Plus|Minus) expression                                                    #unary              // +x; -x; (number)
                | op=TypeOf expression                                                          #typeof             // typeof x (any)
                | l=expression  op=Pow                      r=expression                        #exponentiation     // x^y (number)
                | l=expression  op=(Multiply|Divide|Modulo) r=expression                        #multiplicative     // x*y; x/y; x%y (number)
                | l=expression  op=(Plus|Minus)             r=expression                        #additive           // x+y; x-y (number)
                | l=expression  op=(Eq|Neq)                 r=expression                        #equality           // x=y; x!=y;
                | l=expression  op=(Lt|Lte|Gt|Gte)          r=expression                        #comparision        // x<y; x<=y; x>y; x>=y (numbers) func(string*string->string) maybe(string) map(string->list(number))
                | l=expression  op=(AndAlso|OrElse)         r=expression                        #logical            // x and y; x or y; isPrime and |?<100| (bool, func<T, bool>)
                | l=expression  op=Combine                  r=expression                        #combination        // f :: g; [] :: [1] :: [2,3,4]; {"a":1, "b":2} :: {"b":0, "c":-1}; "string " :: "concatenation" (functions, lists, maps, strings)
                | l=expression  op=CombineF                 r=expression                        #functionCombination//
                | l=expression  op=RPipe                    r=expression                        #pipe               // x |> func1 |> func2 |> func3 (where func has only 1 param)
                | Pipe operators Pipe                                                           #operatorLambda     // |?+?| |?-2| |?*2| |-?|
                | Lambda LParen lambdaParams RParen Arrow lambdaBody                            #lambda             // \(int x)->x+1; \(int x, int y)->x+y
                | If condition (Pipe condition)* Else expression                                #conditional        // if x > 0 then 'positive' | x < 0 then 'negative' else 'zero'
                | If expression Is Pipe? match (Pipe match)* (Else expression)?                 #patternMathching
                ;

// -- LITERALS
constant        : True
                | False
                | Number
                | String
                ;
nums            : from=Number Range ((Plus|Minus) Number Range)? to=Number                          // numeric range
                ;
recordPair      : Name Colon expression
                ;
mapItems        : mapPair (Comma mapPair)*
                ;
mapPair         : LBracket expression RBracket Colon expression
                ;
mapType         : LBracket type RBracket Colon type
                ;
listItems       : expression (Comma expression)* // items for list
                ;
member          : LBracket expression RBracket
                | Name
                ;
argument        : ((Name Colon)? expression)
                | OpenTypeParam
                ;

// - - DECLARATIONS
declarations    : Let declaration (Comma declaration)* Comma? In
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
                | LBrace recPairPattern (Comma recPairPattern)* (Comma rest)? RBrace    #recordPattern
                | LBracket capture? (Comma capture)* (Comma rest)? RBracket             #listPattern
                | LBrace mapPairPattern? (Comma mapPairPattern)* (Comma rest)? RBrace   #mapPattern
                | Name (LParen capture (Comma capture)* RParen)?                        #typePattern // type must implement destructor protocol
                // TODO: special discriminator for type pattern
                | constant                                                              #constantPattern
                ;
capture         : Name              #variableCapture
                | pattern           #subPatternCapture
                | type alias?       #typeCapture // record
                ;
mapPairPattern  : LBracket constant RBracket (Colon capture)?
                ;
recPairPattern  : Name Colon capture
                ;
rest            : Range Name
                ;

// -- LAMBDAS
lambdaParams    : (Name (Colon type))? (Comma Name (Colon type)?)*
                ;
lambdaBody      : declarations? expression
                ;
operators       : OpenTypeParam binaryOperators expression
                | expression binaryOperators OpenTypeParam
                | OpenTypeParam (Colon type)? binaryOperators OpenTypeParam (Colon type)?
                | unaryOperators OpenTypeParam
                | OpenTypeParam Colon type Dot member
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
                | Combine
                | CombineF
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
Combine         : '::';     // composition
CombineF        : '>>';
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
Number          : NaN | (Plus|Minus)? Infinity | NormalNumber;
Name            : Identifier;
OpenTypeParam   : Quiz Digit*;
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