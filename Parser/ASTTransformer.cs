using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using Vee.Parser.Grammar;
using Antlr4.Runtime.Tree;
using Antlr4.Runtime;

namespace Vee.Parser
{
    public class Node
    {
        public Node(string text, int nodeType, int dataType, params Node[] children)
        {
            Text = text;
            NodeType = nodeType;
            DataType = dataType;
            Children = children.Where(n => n != null).ToArray();
        }

        public string Text { get; private set; }
        public int NodeType { get; private set; }
        public int DataType { get; private set; }
        public IEnumerable<Node> Children { get; private set; }
    }

    public class ASTTransformer : VeeBaseVisitor<Node> 
    {
        public static Node Transform(string inputExpresion) 
        {
            var inputStream = new AntlrInputStream(inputExpresion);
	        var lexer = new VeeLexer(inputStream);
	        var commonTokenStream = new CommonTokenStream(lexer);
	        var parser = new VeeParser(commonTokenStream);
	        var rootCtx = parser.root();
	        var visitor = new ASTTransformer();
	        return visitor.Visit(rootCtx);
        }
    }
}
