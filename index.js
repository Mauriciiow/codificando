var chave = document.getElementById("chave")
var selecionar = document.getElementById("forma-decifrar");

var divCesar = document.getElementById('escolherCesar')
var divBase = document.getElementById('escolherBase64')
var textoCifra = document.getElementById('textoCifra')
var resultadoCifra = document.getElementById('resultadoCifra')
var codificarCesar = document.getElementById('codificarCesar')
var decodificarCesar = document.getElementById('decodificarCesar')

var textoBase = document.getElementById('textoBase')
var resultadoBase = document.getElementById('resultadoBase')
var codificarBase = document.getElementById('codificarBase')
var decodificarBase = document.getElementById('decodificarBase')

var esconderCesar = function () {
  divCesar.style.display = 'none'
  divBase.style.display = 'flex'
}

var esconderBase = function () {
  divBase.style.display = 'none'
  divCesar.style.display = 'flex'
}

selecionar.addEventListener("change", () => {
  if (selecionar.value == 'Base64') {
    esconderCesar()
  } else {
    esconderBase()
  }
});

window.onload = function () {
  divCesar.style.display = 'none'
  divBase.style.display = 'none'
}



var converterBase = function(texto) {
  var resb64 = btoa(texto)
  return resb64
}
var decodificaBase = function (texto) {
  var decb64 = atob(texto)
  return decb64
}

textoBase.addEventListener('keyup', ()=>{
  var textoBaseValor = textoBase.value
  var codChecked =  codificarBase.checked
  var decodChecked = decodificarBase.checked
  if (codChecked) {
    resultadoBase.value = converterBase(textoBaseValor)
  } else if (decodChecked) {
    resultadoBase.value = decodificaBase(textoBaseValor)
  } 
  

})

textoCifra.addEventListener('keyup', ()=>{
  var chaveValor = chave.value
  var textoCifraValor = textoCifra.value
  var codificarChecked = codificarCesar.checked
  var decodificarChecked = decodificarCesar.checked
  
})
