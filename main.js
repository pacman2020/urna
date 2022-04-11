//mostra quantidadade de vots para cada candidato
let aletar = document.querySelector('#aletar')
let ul = document.querySelector('#ul')
let cpf = document.querySelector('#cpf')
let candidato = document.querySelector('#candidato')
let btn = document.querySelector('#btn')

let placas = [
    {
        nome:'branco',
        placa: 0
    },
    {
        nome:'mario',
        placa: 0
    },
    {
        nome:'alberto',
        placa: 0
    },
    {
        nome:'tales',
        placa: 0
    }
]

function listaPlaca() {
    ul.innerHTML = ''
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

    switch (candidato.value) {
        case 'branco':
            placas[0].placa += 1
            break;
    
        case 'mario':
            placas[1].placa += 1 
            break;
    
        case 'alberto':
            placas[2].placa += 1 
            break;
            
        case 'tales':    
            placas[3].placa += 1 
            break;
    
        default:
            break;
    }
    listaPlaca()
}

btn.addEventListener('click', save, false)