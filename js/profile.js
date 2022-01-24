//get data from localStorage 
let get_user=localStorage.getItem('username');
let get_email=localStorage.getItem("email");
let get_image_profile=localStorage.getItem("image_profile");
 let products=JSON.parse(localStorage.getItem('products')) || productsDB;
let myProducts=products.filter(i => i.isMe ==='Y');

//variables
let userDom2=document.getElementById('username');
let userEmailDom=document.getElementById("email");
let productsLength=document.querySelector("#productsLength span");

let profile_image_dom=document.querySelector(".profile_image_dom")

userDom2.innerHTML=get_user;
userEmailDom.innerHTML=get_email;
profile_image_dom.innerHTML=  "<img src='' alt=''>";
if(myProducts.length !=0){
productsLength.innerHTML=myProducts.length;}
else{
    productsLength.remove();
}
