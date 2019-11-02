using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React_Login_Register_Redux.Entities
{
   public class DbUserRole : IdentityUserRole<int>
{
    public virtual DbUser User { get; set; }
    public virtual DbRole Role { get; set; }
}
}
