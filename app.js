'use strict'

const disciplinas = [
    {nome: 'Azul', icon: 'azul.png', cor: 'blue'},
    {nome:'Amarelo', icon: 'amarelo.png', cor: 'yellow'},
    {nome:'Roxa', icon: 'roxo.png', cor: 'plum'},
    {nome:'Laranja', icon: 'laranja.png', cor: 'orange'},
    {nome:'Preta', icon: 'preta.png', cor: 'white'}
]

function criarMenu(disciplina) {
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novaImagem.src = `./img/${disciplina.icon}`
    novoSpan.textContent = disciplina.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover:${disciplina.cor}`

    lista.appendChild(novoItem)
}

disciplinas.forEach(criarMenu)

const produtos = [
    {
        nome: "Camisa Amarela",
        descricao: "Camisa de Goleiro Nike Corinthians 2024/25",
        imagem: "./img/camisa-amarela.png",
        preco: "R$ 256,49",
        cor: "#fedb2e",
        classe: "card2"
    },
    {
        nome: "Camisa Laranja",
        descricao: "Camisa de Goleiro Nike Corinthians 2024/25",
        imagem: "./img/camisa-laranja.png",
        preco: "R$ 256,49",
        cor: "#fe812e",
        classe: "card2"
    },
    {
        nome: "Camisa Azul",
        descricao: "Camisa de Goleiro Nike Corinthians 2024/25",
        imagem: "./img/camisa-azul.png",
        preco: "R$ 256,49",
        cor: "#48d5e7",
        classe: "card3"
    },
    {
        nome: "Camisa Roxa",
        descricao: "Camisa de Treino Nike Corinthians 2025",
        imagem: "./img/camisa-roxa.png",
        preco: "R$ 265,99",
        cor: "#8155e7",
        classe: "card4"
    },
    {
        nome: "Camisa Preta",
        descricao: "Camisa Nike Corinthians II 2024/25",
        imagem: "./img/camisa-preta.png",
        preco: "R$ 664,99",
        cor: "#000000",
        classe: "card5"
    }
]

const container = document.getElementById("cards-container")

produtos.forEach(produto => {
    const card = document.createElement("li")
    card.classList.add("card", produto.classe)

    card.innerHTML = `
        <div class="card-border" style="background-color: ${produto.cor};"></div>
        <h3 style="color: ${produto.cor};">${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <img src="${produto.imagem}" alt="${produto.descricao}">
        <p class="price" style="color: #333;">${produto.preco}</p>
        <div class="sizes">
            <span>P</span>
            <span>M</span>
            <span>G</span>
            <span>GG</span>
        </div>
        <button class="buy-button" style="background-color: ${produto.cor}; color: #fff;">Adicionar ao Carrinho</button>
    `

    container.appendChild(card)
})

