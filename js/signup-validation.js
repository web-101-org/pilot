
function signupValidation(){
    var uname=document.getElementById('username');
    var pw=document.getElementById('password');
    var email=document.getElementById('email');
    if(!validate_username(uname)){
        return false;
    }
    if(!validate_password(pw,8,12)){
        return false;
    }
    if(!validate_email(email)){
        return false;
    }
    return true;
}


function validate_username(uname){
    var letters = /^[0-9a-zA-Z]+$/;  
if(uname.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('Username must have alphanumeric characters only');  
uname.focus();  
return false;  
}  
    
}

function validate_email(email){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(email.value.match(mailformat))  
    {  
        return true;  
    }  
    else  
    {  
        alert("You have entered an invalid email address!");  
        email.focus();  
        return false;  
    }  
}

function validate_password(pw,mx,mn){
      var pw_len = pw.value.length;  
    if (pw_len == 0 ||pw_len >= mn || pw_len < mx)  
    {  
        alert("Password should not be empty / length be between "+mx+" to "+mn);  
        pw.focus();  
        return false;  
    }  
    return true;  
}
