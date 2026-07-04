const nome = document.getElementById('npt-1')
const valor = document.getElementById('npt-2')
const quantidade = document.getElementById('npt-3')
const btn1 = document.getElementById('btn-1')

class table  {
    constructor(nome,preco,quantidade){
        this.nome = nome,
        this.preco = preco,
        this.quantidade = quantidade
    }
}

const list = [];

btn1.addEventListener('click',envia)
function envia (){
    console.log(`Nome do Produto:${nome.value}`)
    const vA = new table(nome.value,valor.value,quantidade.value)
    list.push(vA)
    console.log(list)
}