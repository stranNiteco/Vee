//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     ANTLR Version: 4.7
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

// Generated from C:/work/Vee/Parser/Grammar\Vee.g4 by ANTLR 4.7

// Unreachable code detected
#pragma warning disable 0162
// The variable '...' is assigned but its value is never used
#pragma warning disable 0219
// Missing XML comment for publicly visible type or member '...'
#pragma warning disable 1591
// Ambiguous reference in cref attribute
#pragma warning disable 419

namespace Vee.Parser.Grammar {
using Antlr4.Runtime.Misc;
using Antlr4.Runtime.Tree;
using IToken = Antlr4.Runtime.IToken;

/// <summary>
/// This interface defines a complete generic visitor for a parse tree produced
/// by <see cref="VeeParser"/>.
/// </summary>
/// <typeparam name="Result">The return type of the visit operation.</typeparam>
[System.CodeDom.Compiler.GeneratedCode("ANTLR", "4.7")]
[System.CLSCompliant(false)]
public interface IVeeVisitor<Result> : IParseTreeVisitor<Result> {
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.root"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitRoot([NotNull] VeeParser.RootContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>namedType</c>
	/// labeled alternative in <see cref="VeeParser.type"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitNamedType([NotNull] VeeParser.NamedTypeContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>aliasType</c>
	/// labeled alternative in <see cref="VeeParser.type"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitAliasType([NotNull] VeeParser.AliasTypeContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>functionType</c>
	/// labeled alternative in <see cref="VeeParser.type"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitFunctionType([NotNull] VeeParser.FunctionTypeContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>parameterizedType</c>
	/// labeled alternative in <see cref="VeeParser.type"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitParameterizedType([NotNull] VeeParser.ParameterizedTypeContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>builtinType</c>
	/// labeled alternative in <see cref="VeeParser.type"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitBuiltinType([NotNull] VeeParser.BuiltinTypeContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>productType</c>
	/// labeled alternative in <see cref="VeeParser.type"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitProductType([NotNull] VeeParser.ProductTypeContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>sumType</c>
	/// labeled alternative in <see cref="VeeParser.type"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitSumType([NotNull] VeeParser.SumTypeContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>openType</c>
	/// labeled alternative in <see cref="VeeParser.type"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitOpenType([NotNull] VeeParser.OpenTypeContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.typeAnnotation"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitTypeAnnotation([NotNull] VeeParser.TypeAnnotationContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.typeName"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitTypeName([NotNull] VeeParser.TypeNameContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>patternMathching</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitPatternMathching([NotNull] VeeParser.PatternMathchingContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>access</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitAccess([NotNull] VeeParser.AccessContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>conditional</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitConditional([NotNull] VeeParser.ConditionalContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>unary</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitUnary([NotNull] VeeParser.UnaryContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>multiplicative</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitMultiplicative([NotNull] VeeParser.MultiplicativeContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>tuple</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitTuple([NotNull] VeeParser.TupleContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>lambda</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitLambda([NotNull] VeeParser.LambdaContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>functionComposition</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitFunctionComposition([NotNull] VeeParser.FunctionCompositionContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>record</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitRecord([NotNull] VeeParser.RecordContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>predicateComposition</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitPredicateComposition([NotNull] VeeParser.PredicateCompositionContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>pipe</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitPipe([NotNull] VeeParser.PipeContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>value</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitValue([NotNull] VeeParser.ValueContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>map</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitMap([NotNull] VeeParser.MapContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>predicateInversion</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitPredicateInversion([NotNull] VeeParser.PredicateInversionContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>equality</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitEquality([NotNull] VeeParser.EqualityContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>logicalNot</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitLogicalNot([NotNull] VeeParser.LogicalNotContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>list</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitList([NotNull] VeeParser.ListContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>comparision</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitComparision([NotNull] VeeParser.ComparisionContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>grouping</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitGrouping([NotNull] VeeParser.GroupingContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>logical</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitLogical([NotNull] VeeParser.LogicalContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>operatorLambda</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitOperatorLambda([NotNull] VeeParser.OperatorLambdaContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>additive</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitAdditive([NotNull] VeeParser.AdditiveContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>exponentiation</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitExponentiation([NotNull] VeeParser.ExponentiationContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>invocation</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitInvocation([NotNull] VeeParser.InvocationContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>concatenation</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitConcatenation([NotNull] VeeParser.ConcatenationContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>variable</c>
	/// labeled alternative in <see cref="VeeParser.expression"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitVariable([NotNull] VeeParser.VariableContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.constant"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitConstant([NotNull] VeeParser.ConstantContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.range"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitRange([NotNull] VeeParser.RangeContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.recordPair"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitRecordPair([NotNull] VeeParser.RecordPairContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.mapItems"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitMapItems([NotNull] VeeParser.MapItemsContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.mapPair"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitMapPair([NotNull] VeeParser.MapPairContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.listItems"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitListItems([NotNull] VeeParser.ListItemsContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.member"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitMember([NotNull] VeeParser.MemberContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.argument"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitArgument([NotNull] VeeParser.ArgumentContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.declarations"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitDeclarations([NotNull] VeeParser.DeclarationsContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.declaration"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitDeclaration([NotNull] VeeParser.DeclarationContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>tupleExtraction</c>
	/// labeled alternative in <see cref="VeeParser.extraction"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitTupleExtraction([NotNull] VeeParser.TupleExtractionContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>recordExtraction</c>
	/// labeled alternative in <see cref="VeeParser.extraction"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitRecordExtraction([NotNull] VeeParser.RecordExtractionContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.alias"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitAlias([NotNull] VeeParser.AliasContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.condition"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitCondition([NotNull] VeeParser.ConditionContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.match"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitMatch([NotNull] VeeParser.MatchContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>tuplePattern</c>
	/// labeled alternative in <see cref="VeeParser.pattern"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitTuplePattern([NotNull] VeeParser.TuplePatternContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>recordPattern</c>
	/// labeled alternative in <see cref="VeeParser.pattern"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitRecordPattern([NotNull] VeeParser.RecordPatternContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>listPattern</c>
	/// labeled alternative in <see cref="VeeParser.pattern"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitListPattern([NotNull] VeeParser.ListPatternContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>mapPattern</c>
	/// labeled alternative in <see cref="VeeParser.pattern"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitMapPattern([NotNull] VeeParser.MapPatternContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>enumPattern</c>
	/// labeled alternative in <see cref="VeeParser.pattern"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitEnumPattern([NotNull] VeeParser.EnumPatternContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>nonePattern</c>
	/// labeled alternative in <see cref="VeeParser.pattern"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitNonePattern([NotNull] VeeParser.NonePatternContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>constantPattern</c>
	/// labeled alternative in <see cref="VeeParser.pattern"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitConstantPattern([NotNull] VeeParser.ConstantPatternContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>variableCapture</c>
	/// labeled alternative in <see cref="VeeParser.capture"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitVariableCapture([NotNull] VeeParser.VariableCaptureContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>subPatternCapture</c>
	/// labeled alternative in <see cref="VeeParser.capture"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitSubPatternCapture([NotNull] VeeParser.SubPatternCaptureContext context);
	/// <summary>
	/// Visit a parse tree produced by the <c>typeCapture</c>
	/// labeled alternative in <see cref="VeeParser.capture"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitTypeCapture([NotNull] VeeParser.TypeCaptureContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.keyPattern"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitKeyPattern([NotNull] VeeParser.KeyPatternContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.fieldPattern"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitFieldPattern([NotNull] VeeParser.FieldPatternContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.rest"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitRest([NotNull] VeeParser.RestContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.lambdaParams"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitLambdaParams([NotNull] VeeParser.LambdaParamsContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.lambdaBody"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitLambdaBody([NotNull] VeeParser.LambdaBodyContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.operators"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitOperators([NotNull] VeeParser.OperatorsContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.binaryOperators"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitBinaryOperators([NotNull] VeeParser.BinaryOperatorsContext context);
	/// <summary>
	/// Visit a parse tree produced by <see cref="VeeParser.unaryOperators"/>.
	/// </summary>
	/// <param name="context">The parse tree.</param>
	/// <return>The visitor result.</return>
	Result VisitUnaryOperators([NotNull] VeeParser.UnaryOperatorsContext context);
}
} // namespace Vee.Parser.Grammar
