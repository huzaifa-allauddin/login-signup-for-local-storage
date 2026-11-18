var Username = document.getElementById("Username")
var email = document.getElementById("email")
var password = document.getElementById("password")
var form = document.getElementById("form")

form . addEventListener('submit',function(e){
    e.preventDefault()
    var user  ={
       Username:Username.value,
       email:email.value,
       password:password.value,
    }
    localStorage.setItem("user", JSON.stringify(user))
    alert("Registration Successful!")
    form.reset()
    window.location.href="login.html"
})



// var loginfom = document.getElementById("loginfom")
// var loginemail = document.getElementById("loginemail")
// var loginpassword = document.getElementById("loginpassword")

// loginfom.addEventListener('submit',function(e){
//       e.preventDefault()
//       var  savedUser = JSON.parse(localStorage.getItem("user"))
//       if(loginemail.value==savedUser.email && loginpassword.value==savedUser.password){
//          alert("login successful!")
//          loginfom.reset()
//       window.location.href="home.html"
//       } else{
//         alert("Invalid Email or Password!")
//       }
// })
