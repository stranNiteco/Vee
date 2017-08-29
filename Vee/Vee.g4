/*

A simple, safe expression language with functional tendencies
- standard arithmetics operators
- literal for value types: boolean, number, string,
- unified number type: double
- first-class operators |+|(2,3)
- multiline string literal and string interpolation ' "what?" \{variable} '
- literal for tuple, list and map (...) [...], {...}
- enum (tagged union)
- lambda expression
- intuitive, structural equality semantics
- immutable data structure, copy and modify semantics

- first class functions, ::, |>
- no null, use maybe monad
- no exception, use either monad
- arithmetics operators
idea:

*/
grammar Vee;
// - PARSER RULES
root            : (typeDefs? declarations? Return)? expression EOF
                ;
expression
/*literal*/     : constant                                                  #value
                | Name                                                      #variable           // x; x1; _; $; _x; $x, list, map...
                | LParen expression (Comma expression)+ RParen              #tuple              // (x,y) (any)
                | LBrace recordPair (Comma recordPair)* RBrace              #record             // { key: value }
                | LBrace (mapPair (Comma mapPair)*) RBrace                  #hash               // { [1]:2, ['key']:value }
                | LBracket (nums|listItems) RBracket                        #list               // [x,y,z]; [0..100]; [-1..-2..-100];
/*invocation*/  | expression Dot member                                     #access             // x.y, a.b.c.d (object...) x.[1], x.["key"], x.[1].[2], x.["y"].["z"] (list|hash|record)
                | expression arguments                                      #invocation         // f(x); g(x,y) (func)
/*grouping*/    | LParen expression RParen                                  #grouping           // (x+y) (any)
/*operations*/  | op=Not expression                                         #logicalNot         // not x, not isPrime (boolean,  func<.. bool>)
                | op=(Plus|Minus) expression                                #unary              // +x; -x; (number)
                | op=TypeOf expression                                      #typeof             // typeof x (any)
                | New (type | Name)                                         #init               // new hash(string,int)
                | l=expression  op=Pow                      r=expression    #exponentiation     // x**y (number)
                | l=expression  op=(Multiply|Divide|Modulo) r=expression    #multiplicative     // x*y; x/y; x%y (number)
                | l=expression  op=(Plus|Minus)             r=expression    #additive           // x+y; x-y (number)
                | l=expression  op=(Eq|Neq)                 r=expression    #equality           // x=y; x!=y;
                | l=expression  op=(Lt|Lte|Gt|Gte)          r=expression    #comparision        // x<y; x<=y; x>y; x>=y (numbers) func(string*string->string) maybe(string) map(string->list(number))
                | l=expression  op=(AndAlso|OrElse)         r=expression    #logical            // x and y; x or y; isPrime and |?<100| (bool, func<T, bool>)
                | l=expression  op=Combine                  r=expression    #combination        // f :: g; [] :: [1] :: [2,3,4]; {"a":1, "b":2} :: {"b":0, "c":-1}; "string " :: "concatenation" (functions, lists, maps, strings)
                | l=expression  op=RPipe                    r=expression    #pipe               // x |> func1 |> func2 |> func3 (where func has only 1 param)
                | Pipe operators Pipe                                       #operatorLambda     // |?+?| |?-2| |?*2| |-?|
                | Lambda LParen lambdaParams RParen Arrow expression        #lambda             // \(int x)->x+1; \(int x, int y)->x+y
                | If (conditions | patterns) * Else expression              #test               //

                ;
conditions      : condition (Pipe condition)*                                                  // if x>y then x else y; if x<0 then "negative" | x=0 then "zero" else "positive"
                ;
condition       : expression Then expression
                ;
patterns        : expression Is match (Pipe match)*
                ;
match           : pattern whenClause? Then expression
                ;
whenClause      : (When expression)?
                ;
pattern         : listPattern
                | mapPattern
                | recordPattern
                | tuplePattern
                | typePattern
                | enumPattern
                ;
constant        : True | False | Number | String
                ;
nameOrConstant  : Name
                | constant
                ;
typePattern     : type alias?
                ;
listPattern     : LBracket nameOrConstant? (Comma nameOrConstant)* (Comma rest)? RBracket
                ;
mapPattern      : LBrace mapPairPattern (Comma mapPairPattern)* (Comma rest)? RBrace
                ;
mapPairPattern  : LBracket constant RBracket Colon nameOrConstant
                ;
recordPattern   : LBrace recPairPattern (Comma recPairPattern)* (Comma rest)? RBrace
                ;
recPairPattern  : Name Colon type alias?
                | Name Colon constant
                ;
tuplePattern    : LParen tupleItemPattern (Comma tupleItemPattern)* (Comma rest)? RParen
                ;
tupleItemPattern: Name Colon (type | Name)
                | constant
                ;
enumPattern     : Name (LParen Name (Comma Name)* RParen)?
                ;
rest            : Range Name
                ;
operators       : Quiz binaryOperators expression
                | expression binaryOperators Quiz
                | Quiz binaryOperators Quiz
                | unaryOperators Quiz
                | Quiz Dot member
                ;
member          : LBracket expression RBracket
                | Name
                ;
binaryOperators : Pow | Multiply | Divide | Modulo | Plus | Minus | Eq | Neq | AndAlso | OrElse | Gte | Gt | Lt | Lte | Combine
                ;
unaryOperators  : Minus | Not
                ;
nums            : from=Number (Range (Plus|Minus) Number Range) to=Number                          // numeric range
                ;
recordPair      : Name Colon expression
                ;
mapPair         : LBracket expression RBracket Colon expression
                ;
lambdaParams    : (Name Colon (Name|type))? (Comma Name Colon (Name|type))*
                ;
listItems       : expression (Comma expression)*                // items for list
                ;
arguments       : LParen argument? (Comma argument)* RParen     // arguments for function invocation
                ;
argument        : ((Name Colon)? expression) | Quiz
                ;
type            : (Name Colon)? typeName                                    #singleType
                | Quiz                                                      #unknownType
                | LParen type RParen                                        #typeGroup// type grouping
                | type Arrow type                                           #funcType
                | type Pipe type                                            #sumType
                | type Multiply type                                        #productType
                | type LParen type RParen                                   #parameterizedType
                ;
typeName        : StringType | NumberType | BooleanType | ListType | HashType | TupleType | RecordType | EnumType | TryType | OptionType
                ;
declarations    : Let declaration (Comma declaration)*   // local variable assignment, support destructuring tuples
                ;
extraction      : Name                                              #scalarExtraction
                | LParen Name (Comma Name)+ RParen                  #tupleExtraction
                | LBrace Name alias? (Comma Name alias)* RBrace     #recordExtraction
                ;
alias           : As Name;
declaration     : extraction Colon expression
                ;
typeDefs        : Type typeDef (Comma typeDef)*
                ;
typeDef         : Name Colon type
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
AndAlso         : 'and';    // logical
OrElse          : 'or';
Not             : 'not';
TypeOf          : 'typeof';
Let             : 'let';    // declaration
Return          : 'return';
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
HashType        : 'hash';
TryType         : 'try';
OptionType      : 'option';
Number          : NaN | (Plus|Minus)? Infinity | NormalNumber;
Name            : Identifier;
String          : Quote (Esc | ~['\\])* Quote;
WS              : [ \t\n\r] -> skip;

fragment NaN            : 'NaN';                                            //num
fragment Infinity       : 'Infinity';
fragment NormalNumber   : Digit+ (Dot Digit+)?;
fragment Digit          : [0-9];
fragment Quote          : '\'';                                             //text
fragment Esc            : '\\' (['\\] | Unicode | Interpolation);
fragment Unicode        : 'u' Hex Hex Hex Hex;
fragment Hex            : [0-9a-fA-F];
fragment Interpolation  : LBrace Name RBrace;                               //interpolation, support only 1 variable name at the moment
fragment Identifier     : [a-zA-Z_$][a-zA-Z0-9$_]*;

// TODO reserve type names: number, boolean, string, function, map, list