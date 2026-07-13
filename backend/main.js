const nome = document.getElementById('npt-1')
const valor = document.getElementById('npt-2')
const quantidade = document.getElementById('npt-3')
const identificador = document.getElementById('npt-4')
const btn1 = document.getElementById('btn-1')
const tabela = document.querySelector('#oll')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')
const btn4 = document.getElementById('btn-4')


class table  {
    constructor(nome,preco,quantidade, identificador){
        this.nome = nome,
        this.preco = preco,
        this.quantidade = quantidade,
        this.identificador = identificador
    }
}

const list = [];


function envia (){
    const vA = new table(nome.value,valor.value,quantidade.value, identificador.value)
    list.push(vA)
    console.log(list)
    renderiza()
}



function renderiza(){
    tabela.innerHTML = ""
    for(let i = 0; i < list.length; i++){
    
    const tr = document.createElement('tr')

    const p1 = document.createElement('td');

    const p2 = document.createElement('td');

    const p3 = document.createElement('td');

    const p4 = document.createElement('td');
        p1.textContent = `${list[i].nome}`
        p2.textContent = `${list[i].preco}`
        p3.textContent = `${list[i].quantidade}`
        p4.textContent = `${list[i].identificador}`
        tabela.appendChild(p1)
        tabela.appendChild(p2)
        tabela.appendChild(p3)
        tabela.appendChild(p4)

        tabela.appendChild(tr)
    }
}


function removeList(){
    if(tabela.lastElementChild){
        list.splice(-1,1)
        tabela.lastElementChild.remove();
    } else{
        alert('Vazio !')
    }
}




function editaList(){
    const vAchar = list.findIndex(item => item.identificador == identificador.value)
    if(vAchar !== -1 ){
        const addV = new table(
            nome.value,
            valor.value,
            quantidade.value,
            identificador.value
        )
        list.splice(vAchar, 1, addV) //Corrigir o porque dele nao esta removendo o elemento
    renderiza()
    } else {
        console.log('identificador invalido')
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

btn1.addEventListener('click',envia)
btn2.addEventListener('click', removeList)
btn4.addEventListener('click', editaList)