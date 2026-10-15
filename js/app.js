let contadorPerguntas = 1
let contadorSim = 0
let contadorNao = 0

const botaoSim = document.getElementById('sim')
botaoSim.onclick = () => {
    contadorSim += 1
    contadorPerguntas += 1
    window[`pergunta0${contadorPerguntas}`]()
}

const botaoNao = document.getElementById('nao')
botaoNao.onclick = () => {
    contadorNao += 1
    contadorPerguntas += 1
    window[`pergunta0${contadorPerguntas}`]()
}


function mostrarResultado(){
    const container = document.getElementById("container")
    container.replaceChildren()

    const titulo = document.createElement('h1')
    titulo.textContent("ANÁLISE DOS DADOS")

    
}

function pergunta01() {
    const caixaTitulo = document.getElementById('titulo')
    const caixaTexto = document.getElementById('texto')
    
    caixaTitulo.replaceChildren()
    caixaTexto.replaceChildren()
    
    const titulo = document.createElement("h1")
    titulo.className = "titulo"
    titulo.textContent = `Pergunta 0${contadorPerguntas}`

    const texto = document.createElement("p")
    texto.className = "texto"
    texto.textContent = "Você estava presente na hora que o crime ocorreu?"

    caixaTitulo.append(titulo)
    caixaTexto.append(texto)
}

function pergunta02() {
    const caixaTitulo = document.getElementById('titulo')
    const caixaTexto = document.getElementById('texto')
    
    caixaTitulo.replaceChildren()
    caixaTexto.replaceChildren()
    
    const titulo = document.createElement("h1")
    titulo.className = "titulo"
    titulo.textContent = `Pergunta 0${contadorPerguntas}`

    const texto = document.createElement("p")
    texto.className = "texto"
    texto.textContent = "Você conhecia a vítima?"

    caixaTitulo.append(titulo)
    caixaTexto.append(texto)
}

function pergunta03() {
    const caixaTitulo = document.getElementById('titulo')
    const caixaTexto = document.getElementById('texto')
    
    caixaTitulo.replaceChildren()
    caixaTexto.replaceChildren()
    
    const titulo = document.createElement("h1")
    titulo.className = "titulo"
    titulo.textContent = `Pergunta 0${contadorPerguntas}`

    const texto = document.createElement("p")
    texto.className = "texto"
    texto.textContent = "A arma do crime encontrada na cena pertence a você?"

    caixaTitulo.append(titulo)
    caixaTexto.append(texto)
}

function pergunta04() {
    const caixaTitulo = document.getElementById('titulo')
    const caixaTexto = document.getElementById('texto')
    
    caixaTitulo.replaceChildren()
    caixaTexto.replaceChildren()
    
    const titulo = document.createElement("h1")
    titulo.className = "titulo"
    titulo.textContent = `Pergunta 0${contadorPerguntas}`

    const texto = document.createElement("p")
    texto.className = "texto"
    texto.textContent = "Você tentou apagar ou ocultar alguma pista após o crime?"

    caixaTitulo.append(titulo)
    caixaTexto.append(texto)
}

function pergunta05() {
    const caixaTitulo = document.getElementById('titulo')
    const caixaTexto = document.getElementById('texto')
    
    caixaTitulo.replaceChildren()
    caixaTexto.replaceChildren()
    
    const titulo = document.createElement("h1")
    titulo.className = "titulo"
    titulo.textContent = `Pergunta 0${contadorPerguntas}`

    const texto = document.createElement("p")
    texto.className = "texto"
    texto.textContent = "Você tem algum álibi que comprove onde estava às 22h?"

    caixaTitulo.append(titulo)
    caixaTexto.append(texto)
}

function pergunta06() {
    const caixaTitulo = document.getElementById('titulo')
    const caixaTexto = document.getElementById('texto')
    
    caixaTitulo.replaceChildren()
    caixaTexto.replaceChildren()
    
    const titulo = document.createElement("h1")
    titulo.className = "titulo"
    titulo.textContent = `Pergunta 0${contadorPerguntas}`

    const texto = document.createElement("p")
    texto.className = "texto"
    texto.textContent = "Alguém viu você discutindo com a vítima recentemente?"

    caixaTitulo.append(titulo)
    caixaTexto.append(texto)
}

function pergunta07() {
    const caixaTitulo = document.getElementById('titulo')
    const caixaTexto = document.getElementById('texto')
    
    caixaTitulo.replaceChildren()
    caixaTexto.replaceChildren()
    
    const titulo = document.createElement("h1")
    titulo.className = "titulo"
    titulo.textContent = `Pergunta 0${contadorPerguntas}`

    const texto = document.createElement("p")
    texto.className = "texto"
    texto.textContent = "Você possui alguma dívida ou motivo financeiro relacionado à vítima?"

    caixaTitulo.append(titulo)
    caixaTexto.append(texto)
}

function pergunta08() {
    const caixaTitulo = document.getElementById('titulo')
    const caixaTexto = document.getElementById('texto')
    
    caixaTitulo.replaceChildren()
    caixaTexto.replaceChildren()
    
    const titulo = document.createElement("h1")
    titulo.className = "titulo"
    titulo.textContent = `Pergunta 0${contadorPerguntas}`

    const texto = document.createElement("p")
    texto.className = "texto"
    texto.textContent = "Você já foi investigado por algum outro crime no passado?"

    caixaTitulo.append(titulo)
    caixaTexto.append(texto)
}

function pergunta09() {
    const caixaTitulo = document.getElementById('titulo')
    const caixaTexto = document.getElementById('texto')
    
    caixaTitulo.replaceChildren()
    caixaTexto.replaceChildren()
    
    const titulo = document.createElement("h1")
    titulo.className = "titulo"
    titulo.textContent = `Pergunta 0${contadorPerguntas}`

    const texto = document.createElement("p")
    texto.className = "texto"
    texto.textContent = "Você mentiu em alguma das respostas anteriores deste teste?"

    caixaTitulo.append(titulo)
    caixaTexto.append(texto)
}

function pergunta010() {
    const caixaTitulo = document.getElementById('titulo')
    const caixaTexto = document.getElementById('texto')
    
    caixaTitulo.replaceChildren()
    caixaTexto.replaceChildren()
    
    const titulo = document.createElement("h1")
    titulo.className = "titulo"
    titulo.textContent = `Pergunta 10`

    const texto = document.createElement("p")
    texto.className = "texto"
    texto.textContent = "Você é realmente inocente de todas as acusações?"

    caixaTitulo.append(titulo)
    caixaTexto.append(texto)
}

if (contadorPerguntas > 10){
    mostrarResultado()
}

pergunta01()