using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Security.Permissions;
using System.Text;
using System.Threading.Tasks;
using Antlr4.Runtime.Sharpen;
using Antlr4.Runtime.Tree;
using Vee.Runtime;

namespace Vee
{
    public class Scope
    {
        private readonly ConcurrentDictionary<string, ParameterExpression> _variables = new ConcurrentDictionary<string, ParameterExpression>();
        public Scope Parent { get; set; }

        public ParameterExpression Resolve(string variableName)
        {
            return _variables.ContainsKey(variableName)
                    ? _variables[variableName]
                    : Parent?.Resolve(variableName);
        }

        public ParameterExpression Add(string variableName, Type type)
        {
            var param = Expression.Parameter(type, variableName);
            _variables.TryAdd(variableName, param);
            return param;
        }
    }


    //'bool' | 'number' | 'char' | 'string' | 'binary' | 'tuple' | 'range' | 'list' | 'map' | 'option' | 'task' | 'function'
    public class ExpressionTransformer : VeeBaseVisitor<Expression>
    {
        //TODO: have a stateful object that remember names, assignments... etc
        
        private readonly IDictionary<string, ParameterExpression> _variables = new Dictionary<string, ParameterExpression>();

        public const string DateFormat = "yyyy-MM-dd";

        public override Expression VisitRoot(VeeParser.RootContext context)
        {
            return Visit(context.expression());
        }

        public override Expression VisitTrue(VeeParser.TrueContext context)
        {
            return Expression.Constant(true);
        }

        public override Expression VisitFalse(VeeParser.FalseContext context)
        {
            return Expression.Constant(false);
        }

        public override Expression VisitNumber(VeeParser.NumberContext context)
        {
            var numStr = context.GetText();
            double num;
            switch (numStr)
            {
                case "NaN":
                    num = double.NaN;
                    break;
                case "+Infinity":
                    num = double.PositiveInfinity;
                    break;
                case "-Infinity":
                    num = double.NegativeInfinity;
                    break;
                default:
                    num = double.Parse(numStr, CultureInfo.InvariantCulture);
                    break;
            }
            return Expression.Constant(num);
        }

        public override Expression VisitString(VeeParser.StringContext context)
        {
            Expression result;
            var txt = context.GetText();
            var runs = Helper.GetRuns(txt).ToArray();
            Debug.Assert(runs.Length > 0);
            if (runs.Length == 1)
            {
                var content = string.Concat(runs.Select(x => x.Content));
                result = Expression.Constant(content);
            }
            else
            {
                // [runs] -> [expressions]
                throw new NotImplementedException("TODO:implement concat w. variables");
            }
            return result;
        }

        public override Expression VisitDatetime(VeeParser.DatetimeContext context)
        {
            var txt = context.DateTime().GetText().Trim('#');
            var result = txt.Length == 10 
                        ? new DateTimeOffset(DateTime.ParseExact(txt, DateFormat, CultureInfo.InvariantCulture)) 
                        : DateTimeOffset.Parse(txt, CultureInfo.InvariantCulture);
            return Expression.Constant(result);
        }

        public override Expression VisitVariable(VeeParser.VariableContext context)
        {
            var txt = context.GetText();
            //TODO:lookup from scope
            return Expression.Variable(ResolveVariableType(txt), txt);
        }

        public override Expression VisitList(VeeParser.ListContext context)
        {
            Expression result;
            VeeParser.NumsContext numsCtx;
            VeeParser.DatesContext datesCtx;
            VeeParser.ItemsContext itemsCtx;
            VeeParser.TypeContext type;
            if ((numsCtx = context.nums()) != null)
            {
                string  fromStr = numsCtx.from.GetText(), 
                        toStr   = numsCtx.to.GetText(),
                        incrStr = numsCtx.incr().GetText().Trim('.');
                double from = double.Parse(fromStr),
                       to   = double.Parse(toStr),
                       incr = string.IsNullOrEmpty(incrStr) ? 1d : double.Parse(incrStr);
                result = Expression.Constant(new NumericRange(from, to, incr));
            }
            else if ((datesCtx = context.dates()) != null)
            {
                string fromStr = datesCtx.from.Text,
                        toStr = datesCtx.to.Text,
                        incrStr = datesCtx.incr().GetText().Trim('.');
                DateTimeOffset from = ParseDate(fromStr),
                               to   = ParseDate(toStr);
                var incr = double.Parse(incrStr);
                result = Expression.Constant(new DatesRange(from, to, incr));
            }
            else if ((itemsCtx = context.items()) != null)
            {
                var items = GetItems(itemsCtx);
                Debug.Assert(items.Length > 0);
                var itemType = items.First().Type;
                if (items.Any(x => x.Type != itemType))
                {
                    throw new NotSupportedException("All list items must be of the same type");
                }
                result = Expression.NewArrayInit(itemType, items);
            }
            else if ((type = context.type()) != null)
            {
                var itemType = ResolveType(type);
                result = Expression.NewArrayInit(itemType);
            }
            else
            {
                throw new InvalidOperationException("Invalid list");
            }
            return result;
        }

        public override Expression VisitMap(VeeParser.MapContext context)
        {
            Expression result;
            VeeParser.PairsContext pairsCtx;
            VeeParser.TypeContext type;
            if ((pairsCtx = context.pairs()) != null)
            {
                //NOTE:allow interpolation in keys or not?
                var kvps = pairsCtx.pair().Select(pair => new { Key = Visit(pair.String()), Value = Visit(pair.expression()) }).ToArray();
                Debug.Assert(kvps.Length > 0);
                var valueType = kvps.First().Value.Type;
                if (kvps.Any(kvp => kvp.Value.Type != valueType))
                {
                    throw new NotSupportedException("All list items must be of the same type");
                }
                var dictType = typeof(Dictionary<,>).MakeGenericType(typeof(string), valueType);
                var addMethod = dictType.GetMethod("Add", new[] { typeof(string), valueType });//NOTE:cache?
                result = Expression.ListInit(
                    Expression.New(dictType),
                    kvps.Select(x => Expression.ElementInit(addMethod, x.Key, x.Value)).ToArray()
                );
            }
            else if ((type = context.type()) != null)
            {
                var itemType = ResolveType(type);
                var dictType = typeof(Dictionary<,>).MakeGenericType(typeof(string), itemType);
                result = Expression.New(dictType);
            }
            else
            {
                throw new InvalidOperationException("Invalid map");
            }
            return result;
        }

        public override Expression VisitLambda(VeeParser.LambdaContext context)
        {
            var parameters = context.parameters()
                                    .parameter()
                                    .Select(GetParameter)
                                    .ToArray();
            //TODO:check if parameter names cause conflict with other variables in scope
            //TODO:have a variable name lookup to prevent duplication
            //good name: not found in runtime scope and not declared locally
            var body = Visit(context.expression());
            return GetLambdaExpression(parameters, body);
        }

        public override Expression VisitTuple(VeeParser.TupleContext context)
        {
            var items = context.expression().Select(Visit).ToArray();
            var itemTypes = items.Select(x => x.Type).ToArray();

            if (itemTypes.Length < 1)
            {
                throw new NotSupportedException("Tuple with only 1 item not supported");
            }
            if (itemTypes.Length > 8)
            {
                throw new NotSupportedException("Tuple with more than 8 items not supported");
            }

            var ctor = GenericTypes.Tuples[itemTypes.Length]
                        .MakeGenericType(itemTypes)
                        .GetConstructor(itemTypes);
            Debug.Assert(ctor != null);
            return Expression.New(ctor, items);
        }

        public override Expression VisitAccess(VeeParser.AccessContext context)
        {
            var host = Visit(context.expression());
            //recursively: chain accesses from left to right
            return context.member()
                          .Aggregate(host, GetMemberAccess);
        }

        public MemberExpression GetMemberAccess(Expression host, VeeParser.MemberContext memberCtx)
        {
            throw new NotImplementedException();
            //MemberExpression result;
            //VeeParser.ExpressionContext exprCtx;
            //ITerminalNode nameNode;
            //if ((exprCtx = memberCtx.expression()) != null)
            //{
            //    var index = Visit(exprCtx);

            //}
            //else if ((nameNode = memberCtx.Name()) != null)
            //{
            //    var propName = nameNode.GetText();
            //    if (host.Type == typeof(Type))
            //    {
            //        //expose functions/constants as static delegate fields of selected types
            //        //expose prop/index as member of instances


            //    }
            //    else
            //    {
            //        result = Expression.PropertyOrField(host, propName);//TODO:check for nullable, wrap in Either
            //    }

            //}

            //if (host.Type == typeof (Type))
            //{

            //    var memberInfo = host.Type.GetMember(propName, BindingFlags.Public | BindingFlags.Static)
            //        .FirstOrDefault();
            //    if (memberInfo == null)
            //    {
            //        throw new Exception("Member not found: " + propName);
            //    }

            //    result = Expression.MakeMemberAccess(null, memberInfo);
            //}
            //else if (IsEither(host.Type))
            //{
            //    //TODO:call Bind if member type is optional else call Lift
            //}
            //Expression result;
            //var host = Visit(context.expression());
            //VeeParser.ExpressionContext exprCtx;
            //ITerminalNode nameNode;
            //if ((exprCtx = context.expression()) != null)
            //{
            //    var index = Visit(exprCtx);
                
            //}
            //else if((nameNode = context.Name()) != null)
            //{
            //    var propName = context.GetText();
            //    if (host.Type == typeof (Type))
            //    {
            //        //expose functions/constants as static delegate fields of selected types
            //        //expose prop/index as member of instances

            
            //    }
            //    else
            //    {
            //        result = Expression.PropertyOrField(host, propName);//TODO:check for nullable, wrap in Either
            //    }
                
            //}
            //return result;
        }

        private static bool IsEither(Type type)
        {
            return  type.IsGenericType && 
                    type.GetGenericTypeDefinition() == typeof(Either<>);
        }


        public override Expression VisitInvocation(VeeParser.InvocationContext context)
        {
            //TODO:currying
            throw new NotImplementedException();
        }

        public override Expression VisitGrouping(VeeParser.GroupingContext context)
        {
            return Visit(context.expression());
        }

        public override Expression VisitLogicalNot(VeeParser.LogicalNotContext context)
        {
            Expression result;
            var expr = Visit(context.expression());
            if (expr.Type == typeof (bool))
            {
                result = Expression.Not(expr);
            }
            else if (expr.NodeType == ExpressionType.Lambda && ((LambdaExpression) expr).ReturnType == typeof (bool))
            {
                //TODO: invert func
                result = null;
                throw new NotImplementedException();
            }
            else
            {
                throw new NotSupportedException();
            }
            return result;
        }

        public override Expression VisitUnary(VeeParser.UnaryContext context)
        {
            UnaryExpression result;
            var expr = Visit(context.expression());
            var opType = context.op.Type;
            switch (opType)
            {
                case VeeParser.Plus:
                    result = Expression.UnaryPlus(expr); break;
                case VeeParser.Minus:
                    result = Expression.Negate(expr); break;
                case VeeParser.Compl:
                    result = Expression.Convert(
                                Expression.OnesComplement(
                                    Expression.Convert(expr, typeof(long))), 
                                typeof(double)); 
                    break;
                default:
                    throw new NotSupportedException(opType + " not supported");
            }
            return result;
        }

        public override Expression VisitExponentiation(VeeParser.ExponentiationContext context)
        {
            var left = Visit(context.l);
            var right = Visit(context.r);
            return Expression.Power(left, right);
        }

        public override Expression VisitMultiplicative(VeeParser.MultiplicativeContext context)
        {
            BinaryExpression result;
            var left = Visit(context.l);
            var right = Visit(context.r);
            var opType = context.op.Type;
            switch (opType)
            {
                case VeeParser.Multiply:
                    result = Expression.Multiply(left, right); break;
                case VeeParser.Divide:
                    result = Expression.Divide(left, right); break;
                case VeeParser.Modulo:
                    result = Expression.Modulo(left, right); break;
                default:
                    throw new NotSupportedException(opType + " not supported");
            }
            return result;
        }

        public override Expression VisitAdditive(VeeParser.AdditiveContext context)
        {
            BinaryExpression result;
            var left = Visit(context.l);
            var right = Visit(context.r);
            var opType = context.op.Type;
            //TODO:enforce type
            switch (opType)
            {
                case VeeParser.Plus:
                    result = Expression.Add(left, right); break;
                    //TODO: string concatenation
                case VeeParser.Minus:
                    result = Expression.Subtract(left, right); break;
                default:
                    throw new NotSupportedException(opType + " not supported");
            }
            return result;
        }

        public override Expression VisitEquality(VeeParser.EqualityContext context)
        {
            BinaryExpression result;
            var left = Visit(context.l);
            var right = Visit(context.r);
            var opType = context.op.Type;
            //TODO:enforce same-type comparision
            //TODO:chain if LHS is also equality
            switch (opType)
            {
                case VeeParser.Eq:
                    //value type comparision and struct 
                    result = Expression.Equal(left, right); break;
                case VeeParser.Neq:
                    result = Expression.NotEqual(left, right); break;
                case VeeParser.Deq://deep equal
                case VeeParser.Eeq://epsilon equal
                    throw new NotImplementedException();
                    break;
                default:
                    throw new NotSupportedException(opType + " not supported");
            }
            return result;
        }

        public override Expression VisitComparision(VeeParser.ComparisionContext context)
        {
            BinaryExpression result;
            var left = Visit(context.l);
            var right = Visit(context.r);
            var opType = context.op.Type;
            //TODO:enforce same-type comparision: number
            //TODO:chain if LHS is also comparision
            switch (opType)
            {
                case VeeParser.Lt:
                    result = Expression.LessThan(left, right); break;
                case VeeParser.Lte:
                    result = Expression.LessThanOrEqual(left, right); break;
                case VeeParser.Gt:
                    result = Expression.GreaterThan(left, right); break;
                case VeeParser.Gte:
                    result = Expression.GreaterThanOrEqual(left, right); break;
                default:
                    throw new NotSupportedException(opType + " not supported");
            }
            return result;
        }

        public override Expression VisitBitwise(VeeParser.BitwiseContext context)
        {
            BinaryExpression result;
            var left = Expression.Convert(Visit(context.l), typeof(long));
            var right = Expression.Convert(Visit(context.r), typeof(long));
            var opType = context.op.Type;
            switch (opType)
            {
                case VeeParser.And:
                    result = Expression.And(left, right); break;
                case VeeParser.Or:
                    result = Expression.Or(left, right); break;
                case VeeParser.Xor:
                    result = Expression.ExclusiveOr(left, right); break;
                default:
                    throw new NotSupportedException(opType + " not supported");
            }
            return Expression.Convert(result, typeof(double));
        }

        public override Expression VisitLogical(VeeParser.LogicalContext context)
        {
            BinaryExpression result;
            var left = Visit(context.l);
            var right = Visit(context.r);
            var opType = context.op.Type;
            //TODO:support Func<bool>
            switch (opType)
            {
                case VeeParser.AndAlso:
                    result = Expression.AndAlso(left, right); break;
                case VeeParser.OrElse:
                    result = Expression.OrElse(left, right); break;
                default:
                    throw new NotSupportedException(opType + " not supported");
            }
            return result;
        }

        public override Expression VisitCombination(VeeParser.CombinationContext context)
        {
            //TODO: combine functions, concatenate strings, merge map, join lists
            throw new NotImplementedException();
        }

        public override Expression VisitPipe(VeeParser.PipeContext context)
        {
            //TODO: invoke delegate
            throw new NotImplementedException();
        }

        public override Expression VisitResolution(VeeParser.ResolutionContext context)
        {
            //TODO: call Match on Either
            throw new NotImplementedException();
        }

        public override Expression VisitConditional(VeeParser.ConditionalContext context)
        {
            var @else = Visit(context.elseClause());
            return ChainCondition(context.thenClause().AsEnumerable().GetEnumerator(), @else);
        }

        private Expression ChainCondition(IEnumerator<VeeParser.ThenClauseContext> iterator, Expression last)
        {
            Expression result;
            if (iterator.MoveNext())
            {
                var context = iterator.Current;
                var @if = Visit(context.@if);
                var then = Visit(context.then);
                result = Expression.Condition(@if, then, ChainCondition(iterator, last));
            }
            else
            {
                result = last;
            }
            return result;
        }

        public override Expression VisitDeclarations(VeeParser.DeclarationsContext context)
        {
            //context.
            throw new NotImplementedException();
        }

        public override Expression VisitDeclaration(VeeParser.DeclarationContext context)
        {
            var variableNames = context.Name().Select(x => x.GetText()).ToArray();

            Expression[] assignments;
            Debug.Assert(variableNames.Length > 0);
            var rhs = Visit(context.expression());
            //TODO: check rhs type for tuple vs single value
            if (variableNames.Length == 1) //single assignment
            {
                var varName = variableNames[0];
                assignments = new[] {Expression.Assign(Expression.Variable(ResolveVariableType(varName), varName), rhs)};
            }
            else //destructuring assignment
            {
                //"TODO:generate new name", 
                //var tempVar4Tuple = Expression.Assign()
                throw new NotImplementedException();
            }
            throw new NotImplementedException();
        }

        private static Expression GetLambdaExpression(ParameterExpression[] parameters, Expression body)
        {
            var paramTypes = parameters.Select(x => x.Type).ToArray();
            var returnType = body.Type;

            if (paramTypes.Length > 16)
            {
                throw new NotSupportedException("lambda with more than 16 parameters not supported");
            }

            var lambdaType = GenericTypes.Funcs[paramTypes.Length].MakeGenericType(paramTypes.Concat(new[] { returnType }).ToArray());
            return Expression.Lambda(lambdaType, body, true, parameters);
        }

        private ParameterExpression GetParameter(VeeParser.ParameterContext ctx)
        {
            ParameterExpression result;
            VeeParser.TypeContext typeCtx;
            var paramName = ctx.Name().GetText();

            if ((typeCtx = ctx.type()) != null)
            {
                var paramType = ResolveType(typeCtx);
                result = Expression.Parameter(paramType, paramName);
            }
            else
            {
                throw new NotSupportedException("Parameter declaration syntax not supported: " + ctx.GetText());
            }
            return result;
        }

        public Expression[] GetItems(VeeParser.ItemsContext context)
        {
            return context.expression().Select(Visit).ToArray();
        }

        private ParameterExpression ResolveVariable(string name)
        {
            return Expression.Parameter(ResolveVariableType(name), name);
        }

        private Type ResolveVariableType(string name)
        {
            return typeof (double);
            //_variables.Add(name, );
            throw new NotImplementedException("TODO: runtime to resolve variable type");
        }

        private Type ResolveType(VeeParser.TypeContext typeInfo)
        {
            return typeof (double);
            //throw new NotImplementedException("TODO: runtime to resolve type");

        }

        private static DateTimeOffset ParseDate(string input)
        {
            //TODO: use runtime-provided culture
            return DateTimeOffset.ParseExact(input, DateFormat, CultureInfo.InvariantCulture.DateTimeFormat);
        }
    }

    public static class Helper
    {
        public static IEnumerable<Run> GetRuns(string input)
        {
            var sb = new StringBuilder();
            var iter = input.GetEnumerator();
            while (iter.MoveNext())
            {
                if (iter.Current == '\\')
                {
                    switch (iter.Current)
                    {
                        case 'u':
                            var code = Read(iter, 4);
                            var bytes = new[] { Convert.ToByte("" + code[2] + code[3], 16), Convert.ToByte("" + code[0] + code[1], 16) };
                            var str = Encoding.Unicode.GetString(bytes);
                            sb.Append(str);
                            break;
                        case '{':
                            var variableName = ReadUntil(iter, '}');
                            if (variableName.Length != 0)
                            {
                                yield return new Run(sb.ToString());
                                sb.Length = 0;
                                yield return new Run(variableName, RunType.Interpolation);
                            }
                            break;
                        default:
                            sb.Append(iter.Current);
                            break;
                    }
                }
                else
                {
                    sb.Append(iter.Current);
                }
            }
            yield return new Run(sb.ToString());
        }

        public static char[] Read(CharEnumerator enumerator, int count)
        {
            var result = new char[count];
            for (var i = 0; i < count; i++)
            {
                var hasNext = enumerator.MoveNext();
                if (hasNext)
                {
                    result[i] = enumerator.Current;
                }
                else
                {
                    break;
                }
                
                Functions.Curry<Expression, Expression, Expression, Type, ConditionalExpression>(Expression.Condition);
            }
            return result;
        }

        public static string ReadUntil(CharEnumerator enumerator, char c)
        {
            var result = new StringBuilder();
            while (enumerator.MoveNext())
            {
                if (enumerator.Current == c)
                {
                    break;
                }
                else
                {
                    result.Append(enumerator.Current);
                }
            }
            return result.ToString();
        }
    }

    public struct Run
    {
        private readonly RunType _type;
        private readonly string _content;

        public Run(string content, RunType type = RunType.Plain)
        {
            _content = content;
            _type = type;
        }

        public string Content { get { return _content; } }

        public RunType Type { get { return _type; } }
    }

    public enum RunType
    {
        Plain = 0,
        Interpolation = 1
    }

    public static class GenericTypes
    {
        public static readonly Type[] Funcs = {
            typeof(System.Func<>),//0
            typeof(System.Func<,>),
            typeof(System.Func<,,>),
            typeof(Func<,,,>),
            typeof(Func<,,,,>),
            typeof(Func<,,,,,>),
            typeof(Func<,,,,,,>),
            typeof(Func<,,,,,,,>),
            typeof(Func<,,,,,,,,>),
            typeof(Func<,,,,,,,,,>),
            typeof(Func<,,,,,,,,,,>),
            typeof(Func<,,,,,,,,,,,>),
            typeof(Func<,,,,,,,,,,,,>),
            typeof(Func<,,,,,,,,,,,,,>),
            typeof(Func<,,,,,,,,,,,,,,>),
            typeof(Func<,,,,,,,,,,,,,,,>),
            typeof(Func<,,,,,,,,,,,,,,,,>)//16
        };

        public static readonly Type[] Tuples = {
            null,
            typeof(Tuple<>),//1
            typeof(System.Tuple<,>),
            typeof(Tuple<,,>),
            typeof(Tuple<,,,>),
            typeof(Tuple<,,,,>),
            typeof(Tuple<,,,,,>),
            typeof(Tuple<,,,,,,>),
            typeof(Tuple<,,,,,,,>)//8
        };
    }
}
