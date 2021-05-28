function check(){
    var correct;
    if(isNaN(document.getElementById('name').value)==false || document.getElementById('name').value==""){
        document.getElementById('nameErr').style.display = "block"
    }
    else{
        document.getElementById('nameErr').style.display = "none" ;
        correct = 1
    }
    if(isNaN(document.getElementById('age').value)==true || document.getElementById('age').value=="" || document.getElementById('age').value>100){
        document.getElementById('ageErr').style.display = "block";
        
    }
    else{
        document.getElementById('ageErr').style.display = "none";
        correct=correct+1
    }
    if(isNaN(document.getElementById('id').value)==true || document.getElementById('id').value==""){
        document.getElementById('idErr').innerHTML = "*Enter a valid ID";
        document.getElementById('idErr').style.display = "block";
    }
    else if(document.getElementById('id').value.length < 16 || document.getElementById('id').value.length > 16){
        document.getElementById('idErr').innerHTML = "*Enter a 16 digit ID";
        document.getElementById('idErr').style.display = "block";
    }
    else{
        document.getElementById('idErr').style.display = "none";
        correct=correct+1
    }
    if(isNaN(document.getElementById('add').value)==false || document.getElementById('add').value==""){
        document.getElementById('addErr').style.display = "block";
    }
    else{
        document.getElementById('addErr').style.display = "none";
        correct=correct+1
    }
    if(isNaN(document.getElementById('pin').value)==true || document.getElementById('pin').value==""){
        document.getElementById('pinErr').innerHTML = "*Enter a valid Pincode";
        document.getElementById('pinErr').style.display = "block";
    }
    else if(document.getElementById('pin').value.length < 6  || document.getElementById('pin').value.length > 6){
        
        document.getElementById('pinErr').innerHTML = "*Enter a 6 digit Pincode";
        document.getElementById('pinErr').style.display = "block";
    }
    else{
        document.getElementById('pinErr').style.display = "none";
        correct=correct+1
        console.log(correct);
    }
    if(correct==5){
        localStorage.setItem("val",correct);
        window.open('index.html',"_self");
        
    }
    
    

}