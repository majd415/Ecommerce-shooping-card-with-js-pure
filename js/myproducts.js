let products=JSON.parse(localStorage.getItem('products'))||productsDB;

let productesDom=document.querySelector('.products .cards div');
let noProductsDom=document.querySelector('.noproducts');
 //display products
let  drawProductsUI;
(drawProductsUI =function (products=[]){
    let myProducts=products.filter(item=> item.isMe==='Y');
    if(myProducts.length != 0){
 

    let productsUI=myProducts.map((item)=>{
        console.log("eee",item);





        return `
     
        


        <div class="card" style=" box-shadow:${item.isMe=='Y'?'  5px 20px 20px 5px rgba(52, 207, 65, 0.8);':'  5px 20px 20px 5px rgba(51, 49, 50,0.8);'}">
        <div class="card-body">
          <div class="title">
           <img src="${item.imageUrl}" alt="">
           
           
          </div>
          
          <p class="card-text"> 
          <a onclick="saveItemData(${item.id})">${item.title}</a>
     <br>
           ${item.desc} <br>
          
          <span>size : ${item.size}</span> <br>

        
          ${item.isMe=='Y' ? "<button class='edit-product' onclick='editProduct("+item.id+")'> Edit Product</button>" :''} <br>
          <i class=" favorite fa fa-heart" style="color:${item.liked===true?'red':""}"  " ></i>
          
          </p>
          
          <div class="pricing">
          <h1>${item.price}</h1>
       
            <a href="#" class="btn btn-dark px-5 py-2 mb-5" onclick="deleteProduct(${item.id})">remove from cart</a>
       


          </div>
        </div>


      </div>
        
        
           
        `;
    
    });
    productesDom.innerHTML=productsUI.join("");}
    else{
       noProductsDom.innerHTML="No Products";
    }
}
)(JSON.parse(localStorage.getItem('products'))||productsDB);
// drawProductsUI();

//Edit Product
function editProduct(id){
    localStorage.setItem("editProduct",id);
    window.location="editProduct.html";
}
//delete products
function deleteProduct(id){
    let products=JSON.parse(localStorage.getItem('products')) ||productsDB;
    let myProducts=products.filter(item=> item.isMe==='Y');
    let filtered=myProducts.filter(i=> i.id !==id);

   
    let clickedItem=myProducts.find(i=>i.id==id);
    products=products.filter(i=> i.id!== clickedItem.id);
   localStorage.setItem("products",JSON.stringify(products));
   drawProductsUI(filtered);
}