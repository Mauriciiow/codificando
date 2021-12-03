








// console.log(codificado);



// var palavra = 'NAO sei'
// var palavraC = palavra.split(" ")

// var chavinha = 3

// for (let i = 0; i < palavra.length; i++) {
//     var numeroLetra = palavra[i].charCodeAt()
//     var numerosRodado = numeroLetra + chavinha
//     var codificado = String.fromCharCode(numerosRodado)
//     console.log(codificado);
// }



var palavra = 'nao sei'
var palavraC = palavra.split(" ")

var chavinha = 3

for (let i = 0; i < palavra.length; i++) {
    var numeroLetra = palavra[i].charCodeAt()
    var numerosRodado = numeroLetra + chavinha
    var codificado = String.fromCharCode(numerosRodado)
    var novoCod = codificado.replace('#', '')
    console.log(novoCod);
}
