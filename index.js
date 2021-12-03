// var selecionar = document.querySelectorAll('#escolherModo [name=modo]')

// for (let i = 0; i < selecionar.length; i++) {
//         if (selecionar[i].checked == true) {
//             console.log('salve');
//         } else {
//             console.log('oi');
//         }
    
// }


var cesar = document.getElementById('cesar')
var base = document.getElementById('base')
var textoChave = document.getElementById('textoChave')
var h3 = document.createElement('h3')


cesar.addEventListener('click', ()=>{
    console.log('clicou');
    divCifra.append(h3)
    h3.innerText = 'Escolha a chave:'
    
})


base.addEventListener('click', ()=>{
    console.log('clicou');
    h3.remove()

})






