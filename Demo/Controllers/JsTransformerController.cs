using Microsoft.AspNetCore.Mvc;
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
            return Ok(result);
        }
    }
}
