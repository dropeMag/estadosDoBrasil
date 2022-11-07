import {lista_nomes, lista_paisagens, lista_regioes, lista_capital, lista_populacao, lista_mapa, lista_bandeiras} from '/nomes.js'

let estados = document.querySelectorAll('.states')
let nomes_estados = document.querySelectorAll('.states-name')
let content = document.getElementById('content')
let cont_title = document.getElementById('cont-title')
let cont_state = document.getElementById('cont-state')
let cont_bg = document.getElementById('cont-bg')
let estado_regiao = document.getElementById('state-region')
let estado_capital = document.getElementById('state-capital')
let estado_populacao = document.getElementById('state-population')
let mapa_brasil = document.getElementById('mapa-brasil')

for(let i = 0; i < estados.length; i++){
    nomes_estados[i].innerHTML = lista_nomes[i]
    estados[i].style.background = lista_bandeiras[i] + 'no-repeat center'
    estados[i].style.backgroundSize = 'cover'

    estados[i].addEventListener('click', ()=>{
        cont_state.style.background = lista_paisagens[i] + 'no-repeat center'
        cont_state.style.backgroundSize = 'cover'
        cont_state.style.boxShadow = '0 0px 15px 1px #afb8c1'
        cont_bg.style.background = '#1a1b1d58'

        content.style.color = '#333'

        cont_title.innerText = lista_nomes[i]

        estado_regiao.innerText = lista_regioes[i]
        estado_capital.innerText = lista_capital[i]
        estado_populacao.innerText = lista_populacao[i]
    
        mapa_brasil.style.background = lista_mapa[i] + 'no-repeat center'
        mapa_brasil.style.backgroundSize = 'cover'
    })
}
