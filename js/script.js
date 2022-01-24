let productsDom=document.querySelector(".products .cards div");
let products=productsDB;

shoppingCartIcon.addEventListener("click",openCartMenu);
//display products
let drawProductsUI;
(drawProductsUI=function(productsDB=[]){
    let productsUI=productsDB.map((item)=>{
        return `
     
        


        <div class="card" style=" box-shadow:${item.isMe=='Y'?'  5px 20px 20px 5px rgba(52, 207, 65, 0.8);':'  5px 20px 20px 5px rgba(51, 49, 50,0.8);'}">
        <div class="card-body">
          <div class="title">
           <img src="${item.imageUrl}" alt="">
           
           
          </div>
          
          <p class="card-text"> 
          <a onclick="saveItemData(${item.id})">${item.title}</a><br>
           ${item.desc} <br>
          
          <span>size : ${item.size}</span> <br>

        
          ${item.isMe=='Y' ? "<button class='edit-product' onclick='editProduct("+item.id+")'> Edit Product</button>" :''} <br>
          <i class=" favorite fa fa-heart" style="color:${item.liked===true?'red':""}"  onclick="addedToFavorite(${item.id}) " ></i>
          
          </p>
          
          <div class="pricing">
          <h1>${item.price}</h1>
       
            <a href="#" class="btn btn-dark px-5 py-2 mb-5" onclick="addedToCart(${item.id})">Add TO cart</a>


          </div>
        </div>


      </div>
        
        
           
        `;

   
    });
productsDom.innerHTML=productsUI.join('');
}



)(JSON.parse(localStorage.getItem('products'))|| products)



function addedToCart(id){

    if (localStorage.getItem('username')){
        let products=JSON.parse(localStorage.getItem('products')) || productsDB ;
        let product=products.find((item)=>item.id===id);
       let isProductInCart=addedItem.some((i) => i.id ===product.id);
        if(isProductInCart){
            console.log("majd")
            // console.log("dffdfdfd",p.qty ); 
            product.qty+=1;

        //    addedItem=addedItem.map(p=>{
        //        if(p.id === product)p.qty+=1 ;
        //        return p
        //    });
        }else{
            addedItem.push(product);
        }
        //UI
        cartProductDivDom.innerHTML="";
        addedItem.forEach((item) =>{
            cartProductDivDom.innerHTML += `<p>${item.title} : ${item.qty}</p>`;
        });




       //
       
//save data
        localStorage.setItem('productsInCart',JSON.stringify(addedItem));
        //Add counter of items
        let cartProductItems=document.querySelectorAll(" .carts-products div p ");
        badgeDom.style.display="block";
        badgeDom.innerHTML=cartProductItems.length;
    }else{
        window.location="login.html";
    }



}
function getUniqueArr(arr,filterType){
   //[1,1,1] //vedio part 5
    let unique=arr.map((item)=> item[filterType]).map((item,i,final)=> final.indexOf(item)===i&& i).filter((item)=>arr[item]).map(item=>arr[item]);//return element without false
   return unique;
}


// add to localStorage
function saveItemData(id){
    localStorage.setItem('productId',id);
    window.location='cartDetails.html';

}
//search function
let input=document.getElementById("search");
input.addEventListener('keyup',function(e){

    search( e.target.value,JSON.parse(localStorage.getItem("products"))||productsDB);

if(e.target.value.trim()===""){
    drawProductsUI(JSON.parse(localStorage.getItem('products'))||productsDB);
}

})
function search(title,myArray){

    let arr= myArray.filter(item => item.title.toLowerCase().indexOf(title.toLowerCase())!== -1);
    drawProductsUI(arr);

}


let favoriteItems=localStorage.getItem('productsFavorite') ? JSON.parse( localStorage.getItem('productsFavorite')) : [];

function addedToFavorite(id){

    if (localStorage.getItem('username')){
        let choosenItem=products.find((item)=>item.id==id);
        choosenItem.liked=true;
        favoriteItems=[...favoriteItems,choosenItem];
        let uniqueProducts=  getUniqueArr(favoriteItems,"id");

      

       //
       
           
       localStorage.setItem('productsFavorite',JSON.stringify(uniqueProducts));
        products.map((item)=>{
            if(item.id===choosenItem.id){
               item.liked=true; 
            }
        })
        localStorage.setItem("products",JSON.stringify(products));
       drawProductsUI(products);
    }else{
        window.location="login.html";
    }



}
//filter products by size
let sizeFilter=document.getElementById('size-filter');
sizeFilter.addEventListener('change',getProductsFilteredBySize);
function getProductsFilteredBySize(e){
    let val=e.target.value;
    let products=JSON.parse(localStorage.getItem('products')) || productsDB;
    if(val=== 'all'){
        drawProductsUI(products);
    }else{
        products=products.filter(i=> i.size==val);
        drawProductsUI(products);
    }
}
//Edit Product

function editProduct(id){
    localStorage.setItem("editProduct",id);
    window.location="editProduct.html";
}
