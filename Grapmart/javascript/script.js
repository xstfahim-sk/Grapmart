// Login validation

// var email = document.forms['form']['email'];
// var password = document.forms['form']['password'];

// var email_error = document.getElementById('email_error');
// var pass_error = document.getElementById('pass_error');

// email.addEventListener( 'textInput', email_Verify);
// password.addEventListener( 'textInput', pass_Verify);



// function validation(){
//     if(email.value.length < 9){
//         email.style.border = "1px solid red"
//         email_error.style.display = "block"
//         email.focus();
//         return false;
//     }
//     if(password.value.length < 6){
//         password.style.border = "1px solid red"
//         pass_error.style.display = "block"
//         password.focus();
//         return false;
//     }
// }

// function email_Verify(){
//     if(email.value.length >=8){
//         email.style.border = "1px solid red"
//         email_error.style.display = "block"
//         return true;
//     }
// }

// function pass_Verify(){
//     if(passwordl.value.length >=5){
//         password.style.border = "1px solid red"
//         pass_error.style.display = "block"
//         return true;
//     }
// }

function auth(){
    var email = document.getElementById("email").ariaValueMax;
    var password = document.getElementById("password").value;
    if( email=="user@gmail.com && password==user123"){
        window.location.assign("index.html");
        alert("Login Successfully");
    }
    else {
        alert("Invalid Info");
        return;
    }
}