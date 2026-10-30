document.getElementById("subject1").onclick = function openfolder(){
        document.getElementById("mail1").hidden = false;
        document.getElementById("mail2").hidden = true;
        document.getElementById("mail3").hidden = true;
        document.getElementById("mail4").hidden = true;
        document.getElementById("mail5").hidden = true;
    };

document.getElementById("subject2").onclick = function openfolder(){
        document.getElementById("mail1").hidden = true;
        document.getElementById("mail2").hidden = false;
        document.getElementById("mail3").hidden = true;
        document.getElementById("mail4").hidden = true;
        document.getElementById("mail5").hidden = true;
    };

document.getElementById("subject3").onclick = function openfolder(){
        document.getElementById("mail1").hidden = true;
        document.getElementById("mail2").hidden = true;
        document.getElementById("mail3").hidden = false;
        document.getElementById("mail4").hidden = true;
        document.getElementById("mail5").hidden = true;
    };

document.getElementById("subject4").onclick = function openfolder(){
        document.getElementById("mail1").hidden = true;
        document.getElementById("mail2").hidden = true;
        document.getElementById("mail3").hidden = true;
        document.getElementById("mail4").hidden = false;
        document.getElementById("mail5").hidden = true;
    };

document.getElementById("subject5").onclick = function openfolder(){
        document.getElementById("mail1").hidden = true;
        document.getElementById("mail2").hidden = true;
        document.getElementById("mail3").hidden = true;
        document.getElementById("mail4").hidden = true;
        document.getElementById("mail5").hidden = false;
    };