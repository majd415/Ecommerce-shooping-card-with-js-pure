//variable
let productName=document.getElementById("product-name");
let productDesc=document.getElementById("product-desc");
let productSizeSelect=document.getElementById("product-size");
let product_price=document.getElementById("product-price");
let createForm=document.getElementById("create-form");
let inputFile=document.getElementById("upload-image-file");
let productSizeValue;
let productImage;

//Events
productSizeSelect.addEventListener('change',getProductsSizeValue);
createForm.addEventListener('submit',createProductFunction);
inputFile.addEventListener("change",uploadImage);
//functions   <h1>${item.price}</h1>
function getProductsSizeValue(e){
    productSizeValue=e.target.value;
}
function createProductFunction(e){
    e.preventDefault();//refresh page
    let allProducts=JSON.parse( localStorage.getItem("products")) || productsDB;
    let nameValue=productName.value;
    let descValue=productDesc.value;
 
    if(nameValue && descValue){
    let obj={
        id: allProducts ? allProducts.length +1 : 1,
        qty:1,
        imageUrl:productImage,
        size:productSizeValue,
        title:nameValue,
        price  :product_price.value,
        desc:descValue,
        isMe:'Y'

    };
    let newProducts=allProducts?[... allProducts,obj]:[obj];
    localStorage.setItem('products',JSON.stringify(newProducts));
    productName.value="";
    productDesc.value="";
    productSizeSelect.value="";

setTimeout(()=>{
 window.location="index_main.html" ;  
},500)
}else{
        alert("enter data ")
    }
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
     //productImage=URL.createObjectURL(file);
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