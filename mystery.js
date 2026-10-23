$("#submit").on("click", function () {
    var password = $("#password").val();
    
        if (password ==="u&me"){
            window.location.href = "chat1.html";
        }
        else{
            alert("Invalid password.")
        }

})