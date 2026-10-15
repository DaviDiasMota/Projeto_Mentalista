let contadorPerguntas = 1
let contadorSim = 0
let contadorNao = 0

function proximaPergunta() {
    if (contadorPerguntas > 10) {
        mostrarResultado()
    } else {
        const numFormatado = contadorPerguntas < 10 ? `0${contadorPerguntas}` : contadorPerguntas
        const nomeFuncao = `pergunta${numFormatado}`
        
        if (typeof window[nomeFuncao] === "function") {
            window[nomeFuncao]()
        }
    }
}

const botaoSim = document.getElementById('sim')
botaoSim.onclick = () => {
    contadorSim += 1
    contadorPerguntas += 1
    proximaPergunta()
}

const botaoNao = document.getElementById('nao')
botaoNao.onclick = () => {
    contadorNao += 1
    contadorPerguntas += 1
    proximaPergunta()
}

function mostrarResultado() {
    const header = document.getElementById("header")
    const container = document.getElementById("container")
    container.replaceChildren(header)


    const caixaTitulo = document.createElement("div")
    caixaTitulo.className = "titulo"
    const caixaDados = document.createElement("div")
    caixaDados.className = "dados"
    const caixaTexto = document.createElement("div")
    caixaTexto.className = "caixa-texto"

    const titulo = document.createElement('h1')
    titulo.className = "analise"
    titulo.textContent = "ANÁLISE DOS DADOS" 

    const dadosSim = document.createElement("h2")
    dadosSim.id = "yes"
    dadosSim.textContent = contadorSim < 10 ? `0${contadorSim} SIM` : `${contadorSim} SIM`

    const dadosNao = document.createElement("h2")
    dadosNao.textContent = contadorNao < 10 ? `0${contadorNao} NÃO` : `${contadorNao} NÃO` 

    const resultado = document.createElement("span")
    resultado.className = "resultado"

    if (contadorSim < 5) {
        resultado.textContent = "INOCENTE"
    } else if (contadorSim === 5) {
        resultado.textContent = "SUSPEITO"
    } else if (contadorSim >= 6 && contadorSim <= 8) {
        resultado.textContent = "CÚMPLICE"
    } else if (contadorSim > 8) {
        resultado.textContent = "CULPADO"
    }

    const texto = document.createElement("p")
    texto.textContent = " Depois de avaliar o seu teste chegamos à conclusão de que você é:"

    caixaTitulo.append(titulo)
    caixaDados.append(dadosSim, dadosNao)
    caixaTexto.append(texto, resultado)
    container.append(caixaTitulo, caixaDados, caixaTexto)
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

function pergunta10() {
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


pergunta01()