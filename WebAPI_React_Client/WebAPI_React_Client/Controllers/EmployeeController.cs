using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebAPI_React_Client.Models;

namespace WebAPI_React_Client.Controllers
{
    // EnableCors attribute to this Class
    // We will allow any origin, any header and any method to access this api by passing *, *
    [EnableCors("*", "*", "*")]
    public class EmployeeController : ApiController
    {
        public List<Debinfo> GetAll()
        {
            List<Debinfo> empList = new List<Debinfo>
            {
                new Debinfo{Id=101,Name="David",Location="Israel",Salary=12345},

                new Debinfo{Id=102,Name="Amir",Location="Israel",Salary=23456},

                new Debinfo{Id=103,Name="Elad",Location="Israel",Salary=34567},

                new Debinfo{Id=104,Name="Itamar",Location="Israel",Salary=45678},

                new Debinfo{Id=105,Name="Ron",Location="Israel",Salary=56789}
            };
            return empList;
     
        }
        public bool Post(Debinfo employee)
        {
            SqlConnection conn = new SqlConnection(@"server=DESKTOP-BRBTNVK\SQLEXPRESS;database=ReactAppDB;integrated security=true");
            string query = "insert into EmployeeInfo values(@Id,@Name,@Location,@Salary)";
            SqlCommand cmd = new SqlCommand(query, conn);
            cmd.Parameters.Add(new SqlParameter("@Id", employee.Id));
            cmd.Parameters.Add(new SqlParameter("@Name", employee.Name));
            cmd.Parameters.Add(new SqlParameter("@Location", employee.Location));
            cmd.Parameters.Add(new SqlParameter("@Salary", employee.Salary));
            conn.Open();
            int noOfRowsAffected = cmd.ExecuteNonQuery();
            conn.Close();
            return noOfRowsAffected > 0 ? true : false;
        }

    }
}
