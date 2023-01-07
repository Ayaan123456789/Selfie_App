function login() {
 var username = document.getElementById("login_name").value;
 
 localStorage.setItem("username", username);

 window.location = "index.html";
}