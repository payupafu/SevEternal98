document.getElementById("back").onclick = function back(){
    document.getElementById("drive").hidden=false;
    this.hidden=true;
    document.getElementById("del").hidden = true;
    document.getElementById("forxim").hidden = true;
    document.getElementById("special").hidden = true;
}


$("#folder1").hover(
    function(){
        document.getElementById("folder1").hidden = true;
        document.getElementById("openfolder1").hidden = false;
    },
    function(){
        document.getElementById("folder1").hidden = false;
        document.getElementById("openfolder1").hidden = true;
})

document.getElementById("openfolder1").onclick = function openfolder(){
        document.getElementById("drive").hidden = true;
        document.getElementById("back").hidden = false;
        document.getElementById("forxim").hidden = false;
}


$("#folder2").hover(
    function(){
        document.getElementById("folder2").hidden = true;
        document.getElementById("openfolder2").hidden = false;
    },
    function(){
        document.getElementById("folder2").hidden = false;
        document.getElementById("openfolder2").hidden = true;
})

    document.getElementById("openfolder2").onclick = function openfolder(){
        document.getElementById("drive").hidden = true;
        document.getElementById("back").hidden = false;
        document.getElementById("special").hidden = false;
    }

$("#folder3").hover(
    function(){
        document.getElementById("folder3").hidden = true;
        document.getElementById("openfolder3").hidden = false;
    },
    function(){
        document.getElementById("folder3").hidden = false;
        document.getElementById("openfolder3").hidden = true;
})

document.getElementById("openfolder3").onclick = function openfolder(){
        document.getElementById("drive").hidden = true;
        document.getElementById("back").hidden = false;
        document.getElementById("del").hidden = false;
    }

$(".openimg").onclick = function openimg(){
    $(this).css("width: 1000px")
},
    function closeimg(){
    $(this.css("width:200px"))    
    }