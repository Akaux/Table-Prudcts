const nome = document.getElementById('npt-1')
const valor = document.getElementById('npt-2')
const quantidade = document.getElementById('npt-3')
const btn1 = document.getElementById('btn-1')

btn1.addEventListener('click',envia)

function envia (){
    console.log(`Nome do Produto:${nome.value}`)
    if(valor.value >0){
        console.log(`seu produto custa ${valor.value}`)
    } else {
        console.log('Seu valor é invalido !')
    }

    if(quantidade.value >0) console.log(`Sua quantidade é valida`)
}