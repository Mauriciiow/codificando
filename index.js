var cesar = document.getElementById("cesar");
var base = document.getElementById("base");
var divCifra = document.getElementById("divCifra");
var chave = document.getElementById("chave");
var valorChave = chave.value;
var sumir = document.querySelectorAll(".sumir");
var selecionar = document.getElementById("forma-decifrar");

selecionar.addEventListener("change", () => {
  for (var i = 0; i < sumir.length; i++) {
    if (selecionar.value == "CifraCesar") {
      sumir[i].style.display = "flex";
      divCifra.style.flexDirection = "column";
    } else {
      sumir[i].style.display = "none";
    }
  }
});
