'use strict'

import { listaProdutos } from './produtos.js' 

function cardProduto (listaProdutos) {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${listaProdutos.imagem}`
    img.alt = `Foto do produto ${listaProdutos.nome}`

    const nomeProduto = document.createElement('h2')
    nomeProduto.textContent = listaProdutos.nome

    const precoProduto = document.createElement('span')
    precoProduto.textContent = `R$ ${listaProdutos.preco.toFixed(2)}`

    const descricaoProduto = document.createElement('p')
    descricaoProduto.textContent = listaProdutos.descricao

    const estrelasContainer = document.createElement('div')
    estrelasContainer.classList.add('estrelas-container')

    const estrelasPreenchidas = document.createElement('div')
    estrelasPreenchidas.classList.add('estrelas-preenchidas')
    
    // CORREÇÃO: Acessamos a propriedade .classificacao do objeto
    const porcentagem = listaProdutos.classificacao * 20; 
    estrelasPreenchidas.style.width = `${porcentagem}%`
    
    const spanPreenchido = document.createElement('span')
    spanPreenchido.textContent = '★★★★★'
    estrelasPreenchidas.appendChild(spanPreenchido)

    const estrelasVazias = document.createElement('div')
    estrelasVazias.classList.add('estrelas-vazias')
    
    const spanVazio = document.createElement('span')
    spanVazio.textContent = '★★★★★'
    estrelasVazias.appendChild(spanVazio)

    estrelasContainer.append(estrelasPreenchidas, estrelasVazias)


    card.append(img, nomeProduto, precoProduto, descricaoProduto, estrelasContainer)

    return card
}

const cards = listaProdutos.map(cardProduto)

document.getElementById('container').replaceChildren(...cards)