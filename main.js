//mostra quantidadade de vots para cada candidato
let aletar = document.querySelector('#aletar')
let ul = document.querySelector('#ul')
let cpf = document.querySelector('#cpf')
let candidato = document.querySelector('#candidato')
let btn = document.querySelector('#btn')

let placas = [
    {
        nome:'geraldo',
        placa: 1
    },
    {
        nome:'mateus',
        placa: 2
    }
]

function listaPlaca() {
    for(x in placas){
        let li = document.createElement('li')
        li.innerHTML = `${placas[x].nome}: ${placas[x].placa}`
        ul.appendChild(li)
    }
}

function save(event) {
    event.preventDefault()

    if(cpf.value === '' || cpf.value === undefined){

        let aviso = document.createElement('h2')
        aviso.style.color = 'red'
        aviso.innerHTML = 'preencha todos os campos'
        aletar.appendChild(aviso)

        setTimeout(()=>{ aletar.innerHTML = ''},2000)
        return 
    }

    switch (candidato) {
        case candidato === '00':
            placas['mario'] += 1 
            break;
    
        case candidato === '01':
            
            break;
    
        case candidato === '02':
            
            break;
    
        case candidato === '03':
            
            break;
    
        default:
            break;
    }
    console.log(cpf.value)
    console.log(candidato.value)
}

btn.addEventListener('click', save, false)

listaPlaca()