
document.getElementById("submit").onclick = function(){
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;
 if (password === "090787" && username === "Xtonish")
        window.location.href = 'ximinternal.html';

    else{
        alert("Invalid credentials.")
}}