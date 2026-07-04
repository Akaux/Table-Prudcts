const nome = document.getElementById('npt-1')
const valor = document.getElementById('npt-2')
const quantidade = document.getElementById('npt-3')
const identificador = document.getElementById('npt-4')
const btn1 = document.getElementById('btn-1')
const tabela = document.querySelector('#oll')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')


class table  {
    constructor(nome,preco,quantidade, identificador){
        this.nome = nome,
        this.preco = preco,
        this.quantidade = quantidade,
        this.identificador = identificador
    }
}

const list = [];

btn1.addEventListener('click',envia)

function envia (){
    const vA = new table(nome.value,valor.value,quantidade.value, identificador.value)
    list.push(vA)
    console.log(list)
    renderiza()
}

function renderiza(){
        tabela.innerHTML = ""
        for(let i = 0; i < list.length; i++){
        const p1 = document.createElement('li');
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

btn3.addEventListener('click', function(){
    if(list.some(list => list.identificador == identificador.value)){
        console.log('este elemento pode ser excluido')
        list.splice(identificador)
        console.log(list)
        renderiza()
    } else {
        console.log('errror')
    }
})