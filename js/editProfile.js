//get data from localStorage
let get_user=localStorage.getItem('username');
let get_email=localStorage.getItem("email");
 
//variables

let userImage=document.getElementById('upload-image-ph');
let userInput=document.getElementById('changeName');
let userEmailInput=document.getElementById("changeEmail");
let editForm=document.getElementById('edit-profile-form');

//setting value of input
userInput.value=get_user;
userEmailInput.value=get_email;



//events
editForm.addEventListener("submit",editProfileData);
userImage.addEventListener("change",uploadImage);

function editProfileData(e){
    e.preventDefault();
    localStorage.setItem("username",userInput.value);
    localStorage.setItem("email",userEmailInput.value);
  
    setTimeout(()=>{
        window.location="prfile.html";

    },500)
}


let preview;
function uploadImage(){
    let file=this.files[0];
   
    let types=["image/jpeg","image/png"];
    if(types.indexOf(file.type) == -1){
        alert("tipe not supported")
        return;
    }
    if(file.size > 2 * 1024 * 1024){
        alert("image not exced 2mb")
        return;
    }
    getImageBase64(file);
  
     productImage=URL.createObjectURL(file);
     localStorage.setItem("image_profile",userImage.value);
}
function getImageBase64(file){
    let reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=function(){
        productImage=reader.result;
    };
    reader.onerror=function(){
        alert("Error !!");
    }
}