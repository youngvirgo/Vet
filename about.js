let body = document.querySelector("body");
let favcartContainer = document.querySelector(".favcartContainer");
let closeCart = document.querySelector(".closecart");

document.querySelector(".headtextone").innerHTML="The best for your pets";
document.querySelector(".headtexttwo").innerHTML="About Us";

favcartContainer.addEventListener("click",function showcart() {
    body.classList.add("active");
})

closeCart.addEventListener("click",function showcart() {
    body.classList.remove("active");
})