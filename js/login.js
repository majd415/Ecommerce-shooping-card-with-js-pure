

let username=document.querySelector('#username');

let password=document.querySelector("#password");
let loginbtn=document.querySelector("#sign_in");
let getUser=localStorage.getItem('username');
let getpassword=localStorage.getItem("password");
loginbtn.addEventListener('click',function(e){
    e.preventDefault();
    if (username.value=="" || password=="") {
        alert('Please add all information')
        
    }
    else{
        if( (getUser && getUser.trim()=== username.value)&&(getpassword && getpassword.trim()===password.value)) {
            setTimeout(()=>{
                window.location='index_main.html';
            },1500)
         
            
        }
        else{
            console.log("wrong");
        }
       
    }

})
