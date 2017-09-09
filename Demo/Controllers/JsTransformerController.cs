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
            return Ok(new ParserResult() {CompiledString = result, Variables = new List<string>() { "a","b"} });
        }        
    }
}
