//register user
let username=document.querySelector('#username');
let email=document.querySelector("#email");
let password=document.querySelector("#password");
let register_btn=document.querySelector("#sign_up");

register_btn.addEventListener("click",function(e){
    e.preventDefault();
    if (username.value=="" || password.value=="" || email.value=="") {
        
        alert('Please add all information')
    }
    else{
        localStorage.setItem('username',username.value);
        localStorage.setItem('email',email.value);
        localStorage.setItem('password',password.value);
        setTimeout(()=>{
            window.location='login.html';
        },1500)
        
    }





})