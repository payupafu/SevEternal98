
document.getElementById("submit").onclick = function(){
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;
 if (password === "love4mi" && username === "raspberryhoney")
        window.location.href = 'mystery.html';

    else{
        alert("Invalid credentials.")
}}