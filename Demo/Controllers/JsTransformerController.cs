using Demo.ViewModel;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Vee.Parser;

namespace Demo.Controllers
{
    [Route("api/[controller]")]
    public class JsTransformerController : Controller
    {
        [HttpPost("[action]")]
        public IActionResult Translate([FromBody] string input) 
        {
            var result = JavascriptTransformer.Transform(input);
            var node = ASTTransformer.Transform(input);
            var variables = new HashSet<string>();
            FindingVariableNode(node, variables);
            return Ok(new ParserResult() {RootNode = node,CompiledString = result, Variables = variables });
        }
        private void FindingVariableNode(Node node, HashSet<string> variables)
        {
            if (node != null)
            {
                if (node.Type == NodeType.Variable)
                    variables.Add(node.Text);
                foreach (var child in node.Children)
                    FindingVariableNode(child, variables);
            }
        }
    }
}
