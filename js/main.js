const controle = document.querySelectorAll("[data-controle]") 
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento)=> {
            manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
            atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if (operacao === "+") {
        peca.value = parseInt(peca.value) + 1
    } else {
        peca.value = parseInt(peca.value) - 1
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica] // valor a ser atualizado //dataset.estatistica = nome da data-estatistica
    })
}

//alterando cor do robo
let btnTrocaCor = document.getElementById("btn-cor");
let cores = ["amarelo", "vermelho", "branco", "preto", "azul", "rosa"];
let i = -1;

btnTrocaCor.addEventListener("click", (event) => {
    event.preventDefault()
    i = (i+1)%cores.length
    let imagem = document.querySelector(".robo")
    imagem.src = `./img/${cores[i]}.png`
})



// ainda percorre todo o array e fica rosa
// let btnTrocaCor = document.getElementById("btn-cor")

// function trocaCor() {
//     let imagem = document.querySelector(".robo")
//     let cores = ["amarelo", "vermelho", "branco", "preto", "azul", "rosa"]
//     for (i = 0; i < cores.length; i++) {
//         var cor = cores.at(i)
//         imagem.src = `./img/${cor}.png`
//     }
// }

// btnTrocaCor.addEventListener("click", () => {
//     event.preventDefault()
//     trocaCor()

// })


// dessa forma cor retorna como undefined
// let btnTrocaCor = document.getElementById("btn-cor")

// function trocaCor() {
//     const cores = ["amarelo", "vermelho", "branco", "preto", "azul", "rosa"]
//     cores.forEach((cor) => {
//     return cor
//     })
// }

// btnTrocaCor.addEventListener("click", () => {
//     event.preventDefault()
//     let imagem = document.querySelector(".robo")
//     imagem.src = `./img/${trocaCor()}.png`
// })


// segunda tentativa vai direto para ultima cor rosa
// let btnTrocaCor = document.getElementById("btn-cor")

// function trocaCor() {
//     let imagem = document.querySelector(".robo")
//     let cores = ["amarelo", "vermelho", "branco", "preto", "azul", "rosa"]
//     cores.forEach((cor) => {
//     imagem.setAttribute('src', 'img/' + cor + '.png')
//     })
// }

// btnTrocaCor.addEventListener("click", () => {
//     event.preventDefault()
//     trocaCor()
// })


// primeira tentativa
// const imagem = document.querySelector(".robo")
// const btnTrocaCor = document.getElementById("btn-cor")
// const cores = ["amarelo", "vermelho", "branco", "preto", "azul", "rosa"]

// btnTrocaCor.addEventListener("click", () => {
//     event.preventDefault()
//     cores.forEach((cor) => {
//         imagem.setAttribute('src', 'img/' + cor + '.png')
//     })
    
// })