var loginfom = document.getElementById("loginfom")
var loginemail = document.getElementById("loginemail")
var loginpassword = document.getElementById("loginpassword")

loginfom.addEventListener('submit',function(e){
      e.preventDefault()
      var  savedUser = JSON.parse(localStorage.getItem("user"))
      if(loginemail.value==savedUser.email && loginpassword.value==savedUser.password){
         alert("login successful!")
         loginfom.reset()
      window.location.href="home.html"
      } else{
        alert("Invalid Email or Password!")
      }
})