function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if(user == "admin" && pass == "1234") {
        document.getElementById("message").innerHTML = "Login Successful";
    } else {
        document.getElementById("message").innerHTML = "Login Failed";
    }
}
