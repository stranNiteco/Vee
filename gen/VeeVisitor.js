// Generated from C:/work/Vee\Vee.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by VeeParser.

function VeeVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

VeeVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
VeeVisitor.prototype.constructor = VeeVisitor;

// Visit a parse tree produced by VeeParser#root.
VeeVisitor.prototype.visitRoot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#setup.
VeeVisitor.prototype.visitSetup = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#typeDefs.
VeeVisitor.prototype.visitTypeDefs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#typeDef.
VeeVisitor.prototype.visitTypeDef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#namedType.
VeeVisitor.prototype.visitNamedType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#basicType.
VeeVisitor.prototype.visitBasicType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#aliasType.
VeeVisitor.prototype.visitAliasType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#functionType.
VeeVisitor.prototype.visitFunctionType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#parameterizedType.
VeeVisitor.prototype.visitParameterizedType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#productType.
VeeVisitor.prototype.visitProductType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#sumType.
VeeVisitor.prototype.visitSumType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#openType.
VeeVisitor.prototype.visitOpenType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#typeName.
VeeVisitor.prototype.visitTypeName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#patternMathching.
VeeVisitor.prototype.visitPatternMathching = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#access.
VeeVisitor.prototype.visitAccess = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#conditional.
VeeVisitor.prototype.visitConditional = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#unary.
VeeVisitor.prototype.visitUnary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#multiplicative.
VeeVisitor.prototype.visitMultiplicative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#tuple.
VeeVisitor.prototype.visitTuple = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#lambda.
VeeVisitor.prototype.visitLambda = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#record.
VeeVisitor.prototype.visitRecord = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#pipe.
VeeVisitor.prototype.visitPipe = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#value.
VeeVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#map.
VeeVisitor.prototype.visitMap = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#equality.
VeeVisitor.prototype.visitEquality = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#typeof.
VeeVisitor.prototype.visitTypeof = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#combination.
VeeVisitor.prototype.visitCombination = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#logicalNot.
VeeVisitor.prototype.visitLogicalNot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#list.
VeeVisitor.prototype.visitList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#comparision.
VeeVisitor.prototype.visitComparision = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#grouping.
VeeVisitor.prototype.visitGrouping = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#logical.
VeeVisitor.prototype.visitLogical = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#operatorLambda.
VeeVisitor.prototype.visitOperatorLambda = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#additive.
VeeVisitor.prototype.visitAdditive = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#functionCombination.
VeeVisitor.prototype.visitFunctionCombination = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#exponentiation.
VeeVisitor.prototype.visitExponentiation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#invocation.
VeeVisitor.prototype.visitInvocation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#variable.
VeeVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#constant.
VeeVisitor.prototype.visitConstant = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#nums.
VeeVisitor.prototype.visitNums = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#recordPair.
VeeVisitor.prototype.visitRecordPair = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#mapItems.
VeeVisitor.prototype.visitMapItems = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#mapPair.
VeeVisitor.prototype.visitMapPair = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#mapType.
VeeVisitor.prototype.visitMapType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#listItems.
VeeVisitor.prototype.visitListItems = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#member.
VeeVisitor.prototype.visitMember = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#argument.
VeeVisitor.prototype.visitArgument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#declarations.
VeeVisitor.prototype.visitDeclarations = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#declaration.
VeeVisitor.prototype.visitDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#tupleExtraction.
VeeVisitor.prototype.visitTupleExtraction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#recordExtraction.
VeeVisitor.prototype.visitRecordExtraction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#alias.
VeeVisitor.prototype.visitAlias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#condition.
VeeVisitor.prototype.visitCondition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#match.
VeeVisitor.prototype.visitMatch = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#tuplePattern.
VeeVisitor.prototype.visitTuplePattern = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#recordPattern.
VeeVisitor.prototype.visitRecordPattern = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#listPattern.
VeeVisitor.prototype.visitListPattern = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#mapPattern.
VeeVisitor.prototype.visitMapPattern = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#typePattern.
VeeVisitor.prototype.visitTypePattern = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#constantPattern.
VeeVisitor.prototype.visitConstantPattern = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#variableCapture.
VeeVisitor.prototype.visitVariableCapture = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#subPatternCapture.
VeeVisitor.prototype.visitSubPatternCapture = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#typeCapture.
VeeVisitor.prototype.visitTypeCapture = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#mapPairPattern.
VeeVisitor.prototype.visitMapPairPattern = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#recPairPattern.
VeeVisitor.prototype.visitRecPairPattern = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#rest.
VeeVisitor.prototype.visitRest = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#lambdaParams.
VeeVisitor.prototype.visitLambdaParams = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#lambdaBody.
VeeVisitor.prototype.visitLambdaBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#operators.
VeeVisitor.prototype.visitOperators = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#binaryOperators.
VeeVisitor.prototype.visitBinaryOperators = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by VeeParser#unaryOperators.
VeeVisitor.prototype.visitUnaryOperators = function(ctx) {
  return this.visitChildren(ctx);
};



exports.VeeVisitor = VeeVisitor;