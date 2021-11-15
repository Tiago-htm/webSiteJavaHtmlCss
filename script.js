var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click",() => {
  var sidebar =  document.querySelector(".container").classList.toggle("show-menu");
})