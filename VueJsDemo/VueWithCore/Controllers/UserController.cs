using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace VueWithCore.Controllers
{
    [Authorize, Route("User")]
    public class UserController : Controller
    {
        [Route("Info")]
        public IActionResult UserInfo()
        {
            return Ok(new
            {
                name = User.Identity.Name
            });
        }
    }
}
