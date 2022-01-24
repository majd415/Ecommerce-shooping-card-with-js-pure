 //variable
let products=JSON.parse(localStorage.getItem('products'))||productsDB;
let productId=JSON.parse(localStorage.getItem('editProduct'));
let getProduct=products.find(i=>i.id=== productId);



let productName=document.getElementById("product-name");
let productDesc=document.getElementById("product-desc");
let productSizeSelect=document.getElementById("product-size");
let updateForm=document.getElementById("update-form");
let product_price=document.getElementById("product-price");
let inputFile=document.getElementById("upload-image-file");
let productSizeValue;
let productImage;



productName.value=getProduct.title;
productDesc.value=getProduct.desc;
productSizeSelect.value=getProduct.size;
productImage=getProduct.imageUrl;
product_price.value=getProduct.price;



// //Events   price  :product_price.value,
productSizeSelect.addEventListener('change',getProductsSizeValue);
updateForm.addEventListener('submit',updateProductFunction);
inputFile.addEventListener("change",uploadImage);
// //functions
function getProductsSizeValue(e){
    productSizeValue=e.target.value;
}
function updateProductFunction(e){
    e.preventDefault();//refresh page
    getProduct.title=productName.value;
    getProduct.desc=productDesc.value;
    
    getProduct.size=productSizeSelect.value;
    getProduct.imageUrl=productImage;
    getProduct.price=product_price.value;
    localStorage.setItem('products',JSON.stringify(products));
    
    setTimeout(()=>{
        window.location="index.html";
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