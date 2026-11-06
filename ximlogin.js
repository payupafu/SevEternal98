
document.getElementById("submit").onclick = function(){
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var password3 = document.getElementById("password3").value;
 if (password1 === "101487" && password2 === "Dickey" && password3 === "Castro")
        window.location.href = 'ximinternal.html';

    else{
        alert("Invalid credentials.")
}}