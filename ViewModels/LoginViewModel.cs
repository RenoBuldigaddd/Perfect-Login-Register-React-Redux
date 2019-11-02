using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
namespace React_Login_Register_Redux.ViewModels
{
    public class LoginViewModel
    {
        [EmailAddress(ErrorMessage = "There should be your email!")]
        [Required(ErrorMessage = "Field sould not be empty!")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Field sould not be empty!")]
        public string Password { get; set; }
    }
    public class RegisterViewModel
    {
        [EmailAddress(ErrorMessage = "There should be your email!")]
        [Required(ErrorMessage = "Field sould not be empty!")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Field sould not be empty!")]
        public string Password { get; set; }
        [Required(ErrorMessage = "Field sould not be empty!")]
        public string PasswordConfirm { get; set; }
    }
}