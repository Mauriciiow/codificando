var chave = document.getElementById("chave")
var selecionar = document.getElementById("forma-decifrar");

var divCesar = document.getElementById('escolherCesar')
var divBase = document.getElementById('escolherBase64')
var textoCifra = document.getElementById('textoCifra')
var resultadoCifra = document.getElementById('resultadoCifra')
var codificarCesar = document.getElementById('codificarCesar')
var decodificarCesar = document.getElementById('decodificarCesar')
var naoEscolheuCesar = document.getElementById('naoEscolheuCesar')

var textoBase = document.getElementById('textoBase')
var resultadoBase = document.getElementById('resultadoBase')
var codificarBase = document.getElementById('codificarBase')
var decodificarBase = document.getElementById('decodificarBase')
var naoEscolheu = document.getElementById('naoEscolheu')

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
    naoEscolheu.innerText = ''
  } else if (decodChecked) {
    resultadoBase.value = decodificaBase(textoBaseValor)
    naoEscolheu.innerText = ''
  } else {
    naoEscolheu.innerText = 'Escolha codificar ou decodificar!'
  }
  

})


var converterCifra = function(arr, chave) {
    var arrNovo = []
   for (let i = 0; i < arr.length; i++) {
    var letraCode  = arr[i].charCodeAt()
    if (letraCode >= 65 && letraCode <= 90) {
      arrNovo.push(String.fromCharCode((letraCode - 65  +  chave) % 26 + 65))
    } else if(letraCode >= 97 && letraCode <= 122) {
      arrNovo.push(String.fromCharCode((letraCode - 97  +  chave) % 26 + 97))
    } else {
       arrNovo.push(arr[i])
    }
    
       
         
      }
      return arrNovo.join('')
    }

var decodificaCifra = function(arr, chave) {
  var arrNovo = []
  for (let i = 0; i < arr.length; i++) {
    var letraCode  = arr[i].charCodeAt()
    if (letraCode >= 65 && letraCode <= 90) {
      arrNovo.push(String.fromCharCode((letraCode - 90 -  chave) % 26 + 90))
    } else if(letraCode >= 97 && letraCode <= 122) {
      arrNovo.push(String.fromCharCode((letraCode - 122  -  chave) % 26 + 122))
    } else {
       arrNovo.push(arr[i])
    }
      
   
     
  }
  return arrNovo.join('')
}

textoCifra.addEventListener('keyup', ()=>{
  var chaveValor = parseInt(chave.value)
  var textoCifraValor = textoCifra.value
  var textoArr = textoCifraValor.split('')
  var codificarChecked = codificarCesar.checked
  var decodificarChecked = decodificarCesar.checked

  if (codificarChecked) {
    resultadoCifra.value = converterCifra(textoArr, chaveValor)  
    naoEscolheuCesar.innerText = ''
  }else if(decodificarChecked){
    resultadoCifra.value = decodificaCifra(textoArr, chaveValor)
    naoEscolheuCesar.innerText = ''
  } else {
    naoEscolheuCesar.innerText = 'Escolha codificar ou decodificar!'
  }
 
  
})

