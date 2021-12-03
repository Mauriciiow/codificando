// var selecionar = document.querySelectorAll('#escolherModo [name=modo]')

// for (let i = 0; i < selecionar.length; i++) {
//         if (selecionar[i].checked == true) {
//             console.log('salve');
//         } else {
//             console.log('oi');
//         }

// }

var cesar = document.getElementById("cesar");
var base = document.getElementById("base");
var textoChave = document.getElementById("textoChave");
var divCifra = document.getElementById("divCifra");
var chave = document.getElementById("chave");
var valorChave = chave.value;
var sumir = document.querySelectorAll(".sumir");

cesar.addEventListener("click", () => {
  for (let i = 0; i < sumir.length; i++) {
    sumir[i].style.display = "flex";
  }

  divCifra.style.flexDirection = "column";
});

base.addEventListener("click", () => {
  for (let i = 0; i < sumir.length; i++) {
    sumir[i].style.display = "none";
  }
});
