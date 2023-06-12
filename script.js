    function check(){
        var uname = "alakh";
        var pass = "namdev";
        var un = document.getElementById("un").value;
        var ps = document.getElementById("ps").value;
        if(un==uname && pass==ps){
            document.getElementById("main").style.display = "none";
            document.getElementById("container").style.display = "block";
        }
        else{
            alert("incorrect password");
            // document.getElementById("seg4").innerHTML = "incorrect username or password";
        }
    }
    function AcademicsON(){
        document.getElementById("section2").style.display = "flex";
        document.getElementById("section1").style.display = "none";
        document.getElementById("btnACof").style.display = "block";
        document.getElementById("btnACon").style.display = "none";
    }
    function AcademicsOF(){
        document.getElementById("section2").style.display = "none";
        document.getElementById("btnACof").style.display = "none";
        document.getElementById("btnACon").style.display = "block";
    }
    function UpdationON(){
        document.getElementById("section1").style.display = "flex";
        document.getElementById("section2").style.display = "none";
        document.getElementById("btnUPof").style.display = "block";
        document.getElementById("btnUPon").style.display = "none";
    }
    function UpdationOF(){
        document.getElementById("section1").style.display = "none";
        document.getElementById("btnUPof").style.display = "none";
        document.getElementById("btnUPon").style.display = "block";
    }
    document.getElementById("update").onclick = function(){
        var eng;
        var mat;
        var phy;
        var chem;
        var edu;
        var com;
        eng = document.getElementById("engv").value;
        document.getElementById("eng").innerHTML = eng;
        
        mat = document.getElementById("matv").value;
        document.getElementById("mat").innerHTML = mat;
        
        phy = document.getElementById("phyv").value;
        document.getElementById("phy").innerHTML = phy;
        
        chem = document.getElementById("chemv").value;
        document.getElementById("chem").innerHTML = chem;
        
        edu = document.getElementById("eduv").value;
        document.getElementById("edu").innerHTML = edu;
        
        com = document.getElementById("comv").value;
        document.getElementById("com").innerHTML = com;}
