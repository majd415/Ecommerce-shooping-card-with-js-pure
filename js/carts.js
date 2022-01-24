
let productesDom=document.querySelector('.products .cards div');
let noProductsDom=document.querySelector('.noproducts');
function drawCartProductsUI(allproducts=[]){
  
     if (JSON.parse(localStorage.getItem("productsInCart")).length === 0) 
     noProductsDom.innerHTML="there is no pro";
  


    let products=JSON.parse(localStorage.getItem('productsInCart')) || allproducts;
    let productsUI=products.map((item)=>{
        return `
     
        


        <div class="card" style=" box-shadow:${item.isMe=='Y'?'  5px 20px 20px 5px rgba(52, 207, 65, 0.8);':'  5px 20px 20px 5px rgba(51, 49, 50,0.8);'}">
        <div class="card-body">
          <div class="title">
           <img src="${item.imageUrl}" alt="">
           
           
          </div>
          
          <p class="card-text"> 
          <a >${item.title}</a><br>
           ${item.desc} <br>
          
          <span>size : ${item.size}</span> <br>

        
          ${item.isMe=='Y' ? "<button class='edit-product' onclick='editProduct("+item.id+")'> Edit Product</button>" :''} <br>
          <i class=" favorite fa fa-heart" style="color:${item.liked===true?'red':""}"  " ></i>
          
          </p>
          
          <div class="pricing">
          <h1>${item.price}</h1>
       
            <a href="#" class="btn btn-dark px-5 py-2 mb-5" onclick="removeItemFromCart(${item.id})">remove from cart</a>


          </div>
        </div>


      </div>
        
        
           
        `;

    });
    productesDom.innerHTML=productsUI.join("");
}
drawCartProductsUI();
   function removeItemFromCart(id){
    let productsInCart=localStorage.getItem('productsInCart');
    if (productsInCart){
        let items=JSON.parse(productsInCart);
   let filteredItems=     items.filter((item)=> item.id!==id);
   
        localStorage.setItem('productsInCart',JSON.stringify( filteredItems));
        drawCartProductsUI(filteredItems);
    }


   }