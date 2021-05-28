function go(){
    var x =  document.getElementById("frm").value;

    if(isNaN(x)==false){
        if(x.length==10){
            window.open("register.html","_self");
        }
        else{
            document.getElementById("err").innerHTML="*Enter a valid phone number";
        }
    }
    else{
        document.getElementById("err").innerHTML="*Enter a valid phone number";
    }
}
if(localStorage.getItem("val")==5){
    document.getElementById("hi").style.display = "block";
}
localStorage.removeItem("val");