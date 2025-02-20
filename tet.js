let landsectionOneBproductcon = document.querySelector(".landsectionOneBproductcon");

let cart = [];


document.querySelector(".landsectionOneAtextOne").innerHTML="Got a new puppy";
document.querySelector(".landsectionOneAtextTwo").innerHTML="The best products";
document.querySelector(".landsectionOneAtextThree").innerHTML="for your pup";
document.querySelector(".landsectionOneBtextconOne").innerHTML="Your pet's favourite";
document.querySelector(".landsectionOneBtextconTwo").innerHTML="Popular Products";

function displaypopular() {
    popularProducts.forEach((item,key) => {
        let div = document.createElement("div");
        div.classList.add("popularproducts");

        div.innerHTML = `
        <img src="images/${item.Image}" class="img" alt="local_ric_image">
        <div class="name">${item.Name}</div>
        <div class="price"> ${item.price}</div>
        `;

        landsectionOneBproductcon.appendChild(div);
    });
}
displaypopular();





