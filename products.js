
let products_container = document.querySelector(".products_container");

let cart = [];

document.querySelector(".headtext1").innerHTML="Everything your furry best friend needs";
document.querySelector(".headtext2").innerHTML="Products";

function displaypopular() {
    popularProducts.forEach((item,key) => {
        let div = document.createElement("div");
        div.classList.add("popularproducts");

        div.innerHTML = `
        <img src="images/${item.Image}" class="img" alt="local_ric_image">
        <div class="name">${item.Name}</div>
        <div class="price"> ${item.price}</div>
        `;

        products_container.appendChild(div);
    });
}
displaypopular();