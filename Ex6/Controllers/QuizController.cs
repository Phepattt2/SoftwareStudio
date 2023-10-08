using Ex_6.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Ex_6.Controllers
{
    public class QuizController : Controller
    {
        // GET: QuizController
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Submitted(FormData formData)
        {
            return View(formData);
        }

    }
}
