
document.getElementById("submit").onclick = function(){
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;
 if (password === "admin" && username === "SevEternal98@airmail.com")
        window.location.href = 'email.html';

    else{
        alert("Invalid credentials.")
}}