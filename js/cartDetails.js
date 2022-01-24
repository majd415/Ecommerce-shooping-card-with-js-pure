let products=JSON.parse(localStorage.getItem("products")) ||productsDB;
let productId=localStorage.getItem("productId");
let itemDom=document.querySelector(".item-details");
let productDetails=products.find((item)=> item.id == productId);

itemDom.innerHTML=`

<img src="${productDetails.imageUrl}" alt="">
<h2>${productDetails.title}</h2>
<p>Desc : ${productDetails.desc}</p>
<span>size : ${productDetails.size}</span><br>
<span>Quntatiy : ${productDetails.qty}</span><br>
<button onclick="editProduct(${productId})">Edit Product </button>


`
function editProduct(id){
    localStorage.setItem("editProduct",id);
    window.location="editProduct.html";
}