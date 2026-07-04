const nome = document.getElementById('npt-1')
const valor = document.getElementById('npt-2')
const quantidade = document.getElementById('npt-3')
const btn1 = document.getElementById('btn-1')
const tabela = document.querySelector('#table')
const btn2 = document.getElementById('btn-2')

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
    tabela.innerHTML = ""
    for(let i = 0; i < list.length; i++){
        const p1 = document.createElement('p');
        p1.textContent = `Nome: ${list[i].nome} Preco: ${list[i].preco} Quantidade: ${list[i].quantidade}`
        tabela.appendChild(p1)
    }
}
btn2.addEventListener('click', removeList)
function removeList(){
    if(tabela.lastElementChild){
        list.splice(-1,1)
        tabela.lastElementChild.remove();
    } else{
        alert('Vazio !')
    }
}

