let body = document.querySelector("body");
let favcartContainer = document.querySelector(".favcartContainer");
let closeCart = document.querySelector(".closecart");
window.onload = function() {
    Formio.createForm(document.getElementById('formio'), 'https://lgzfwufwptyahju.form.io/flexiintern');
  };

  document.querySelector(".conheadtextone").innerHTML="Reach out to us";
  document.querySelector(".conheadtexttwo").innerHTML="Contact Us";

  favcartContainer.addEventListener("click",function showcart() {
    body.classList.add("active");
})

closeCart.addEventListener("click",function showcart() {
    body.classList.remove("active");
})