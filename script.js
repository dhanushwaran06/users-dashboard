const form = document.querySelector('#form')

form.addEventListener("submit",(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
    
})

function validateInputs(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error1");
    if(email == "tracker@gmail.com" && password == "tracker"){
        window.location.assign("dashbord.html");
        error.textContent="";
        return false;
    }
    else{
        error.textContent="Invlaid crendiential";
        return false;
    }

}