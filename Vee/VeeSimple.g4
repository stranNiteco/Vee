grammar VeeSimple;
// - PARSER RULES
root            : expression EOF
                ;
// - EXPRESSIONS
expression      : Boolean                                                   #boolean            // false; true
                | Number                                                    #number             // 3.14159265358979
                | String                                                    #string             // "xyz";
                | Identifier                                                #variable           // x; x1; _; $; _x; $x
                | LParen expression RParen                                  #grouping           // (x+y)
                | Not expression                                            #logicalNot         // not x
                | op=(Plus|Minus|Compl) expression                          #unary              // +x; -x; ~x
                | l=expression  op=Pow                       r=expression   #exponentiation     // x**y
                | l=expression  op=(Multiply|Divide|Modulo)  r=expression   #multiplicative     // x*y; x/y; x%y
                | l=expression  op=(Plus|Minus)              r=expression   #additive           // x+y; x-y
                | l=expression  op=(Eq|Neq|Lt|Lte|Gt|Gte)    r=expression   #compare            // x=y; x!=y; x<y; x<=y; x>y; x>=y
                | l=expression  op=(And|Xor|Or)              r=expression   #bitwise            // x&y; x^y; x|y
                | l=expression  op=(AndAlso|OrElse)          r=expression   #logical            // x and y; x or y
                | If thenClause (Comma thenClause)* elseClause              #conditional        // if x>y then x else y; if x<0 then "negative", x=0 then "zero" else "positive"
                ;
// - CONDITIONS:
thenClause      : expression Then expression
                ;
elseClause      : Else expression
                ;

// - LEXER RULES
//-- ordering is very important for ANTLR
// - GROUPING
LParen          : '(';
RParen          : ')';

// - OPERATORS
//-- arithmetics
Pow             : '**';
Multiply        : '*';
Divide          : '/';
Modulo          : '%';
Plus            : '+';
Minus           : '-';
//-- comparison
Eq              : '=';
Neq             : '!=';
Lt              : '<';
Gt              : '>';
Lte             : '<=';
Gte             : '>=';
//-- bitwise
Xor             : '^';
And             : '&';
Or              : '|';
Compl           : '~';

//-- logical
AndAlso         : 'and';
OrElse          : 'or';
Not             : 'not';

// - LITERALS
Boolean         : 'true'
                | 'false'
                ;
Number          : Digit+ (Dot Digit+)?;
Identifier      : [a-zA-Z_$][a-zA-Z0-9$_]*;
String          : Quote (Esc | ~["\\])* Quote;
WS              : [ \t\n\r] -> skip;

//num
fragment Digit          : [0-9];
fragment Dot             : '.';
//text
fragment Quote          : '"';
fragment Esc            : '\\' (["\\] | Unicode);
fragment Unicode        : 'u' Hex Hex Hex Hex;
fragment Hex            : [0-9a-fA-F];