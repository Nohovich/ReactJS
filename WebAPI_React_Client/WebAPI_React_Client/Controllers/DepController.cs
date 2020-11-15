using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebAPI_React_Client.Models;

namespace WebAPI_React_Client.Controllers
{
}
// We will allow any origin, any header and any method to access this api by passing *, *
[EnableCors("*", "*", "*")]
public class DepController : ApiController
{
        public List<Debinfo> GetAll()
        {
            List<Debinfo> DebList = new List<Debinfo>
            {
                new Debinfo{Id=101,Name="Dev",Location="Israel",Salary=12345},

                new Debinfo{Id=102,Name="Big Data",Location="Israel",Salary=23456},

                new Debinfo{Id=103,Name="Mobile",Location="Israel",Salary=34567},
            };
            return DebList;

        }
}
