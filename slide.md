# Rationale

## Selling point: Excel for the web

- non-programmer, advance user
- gradual learning curve while also safe and powerful
- toward data processing

## Application:

- Business rules
- Education
- Glue code 
- Business Intelligence

## Scope:

No type checking yet
Basic operators + conditional + variables + simple pattern matching if time allows

## Demo UI:

--------------------------------------
|                                    |
|          Editor area               | Compile
|                                    |
-------------------------------------|

    Interactive expression tree

 A---\
      \
       +---* -> result
      /   /
 B---/   /
        /
       /
      /
 C---/

## Tasks
Compiler:

 - Operator lambda expression: `|?a+?b|`
 - Pattern matching: `if x is ... then ... | ... then ... else ...`
 - Unit tests, using EdgeJS?

Demo Server:

 - Compiler Web API (asp.net core)

Demo Client:

 - Javascript Runtime (data type classes: Tuple, Map, Record, operators, variables... Math, List)
 - Demo UI
 - Expression tree visualizer (d3)

Misc:

- Slide for demo