using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React_Login_Register_Redux.Entities
{
     public class DbRole : IdentityRole<int>
{
    public ICollection<DbUserRole> UserRoles { get; set; }
}
}
