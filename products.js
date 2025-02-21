let body = document.querySelector("body");
let products_container = document.querySelector(".products_container");
let cartnumcon = document.querySelector(".cartnumcon");
let productList = document.querySelector(".productlist");
let total = document.querySelector(".total");
let Clearcart = document.querySelector(".Clearcart");
let Totalamount = document.querySelector(".Amount");
let favcartContainer = document.querySelector(".favcartContainer");
let closeCart = document.querySelector(".closecart");

let checkoutList = [];

document.querySelector(".headtext1").innerHTML="Everything your furry best friend needs";
document.querySelector(".headtext2").innerHTML="Products";

favcartContainer.addEventListener("click",function showcart() {
    body.classList.add("active");
})

closeCart.addEventListener("click",function showcart() {
    body.classList.remove("active");
})

function displaypopular() {
    popularProducts.forEach((item,key) => {
        let div = document.createElement("div");
        div.classList.add("popularproducts");

        div.innerHTML = `
        <img src="images/${item.Image}" class="img" alt="local_ric_image">
        <div class="name" onclick="prodPage()">${item.Name}</div>
        <div class="price" onclick="prodPage()">$${item.price}</div>
        <button onclick="Addtocart(${key})"><i class="fa-solid fa-cart-shopping fa-xxl" style="color: #161718;"></i>Add To Cart</button>
        `;

        products_container.appendChild(div);
    });
}
displaypopular();

function Addtocart(id) {
    
    if (checkoutList[id] == null) {
        checkoutList[id] = popularProducts[id];
    
        checkoutList[id].cartnumcon = 1;
        alert("Item added to cart");
    }
    else{
        checkoutList[id].cartnumcon += 1;
        
    }
    
  reloadCart()  
}

function reloadCart() {
    productList.innerHTML = "" ;
    let count = 0;
    let totalprice = 0;


    checkoutList.forEach((item, key) => {
        let li = document.createElement("li");
        totalprice+=parseInt(item.price*item.cartnumcon);
        count += item.cartnumcon;
        li.innerHTML = `
        <img src="images/${item.Image}">
        <div>${item.Name}</div>
        <div>$${item.price}</div>
        <div>
        <button onclick="changeQuantity(${key},${item.cartnumcon-1})">-</button>
        <div class="nuzzz">${item.cartnumcon}</div>
        <button onclick="changeQuantity(${key},${item.cartnumcon+1})">+</button>
        </div>
        `;
        productList.appendChild(li);
    }); 

    total.innerHTML = `<span>Checkout (${count} items)$ ${totalprice}</span>`;
    cartnumcon.innerHTML = count;  
    Totalamount.innerHTML = `<span>₦ ${totalprice}</span>`;
}



function changeQuantity(key, cartnumcon) {
    if (cartnumcon == 0) {
        delete checkoutList[key];
    }
    else{
        checkoutList[key].cartnumcon=cartnumcon;
    }
    reloadCart();
}