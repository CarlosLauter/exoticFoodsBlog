const foods = [
{
    nome: 'Takis Azul',
    id: 0,
    tags: ['doritos', 'salgadinho', 'snack', 'takis', 'azul', 'salgado', 'salgados', 'salgada', 'salgadas'],
    img: 'assets/images/blueTakis.jpg',
    link: 'posts/blueTakis.html'
},
{
    nome: 'Baly Caipirinha',
    id: 1,
    tags: ['baly', 'bebida', 'bebidas', 'energetico', 'verde'],
    img: 'assets/images/balyCaipirinha.jpg',
    link: 'posts/balyCaipirinha.html'
},
{
    nome: 'Bubble Mix',
    id: 2,
    tags: ['bubble', 'mix', 'cha', 'bebida', 'bebidas', 'rosa'],
    img: 'assets/images/bubbleMix.jpg',
    link: 'posts/bubbleMix.html'
},
{
    nome: 'Devi Frutas Vermelhas',
    id: 3,
    tags: ['refri', 'refrigerante', 'gas', 'bebida', 'bebidas', 'frutas', 'vermelhas', 'devi', 'vermelho'],
    img: 'assets/images/deviRefrigeranteFrutasVermelhas.jpg',
    link: 'posts/deviFrutasVermelhas.html'
}
]

document.addEventListener('DOMContentLoaded', () => {
    renderFoods(foods)
})

function renderFoods(lista) {
    const ul = document.getElementById('lista')
    ul.innerHTML = ''

    lista.forEach(food => {
        const li = document.createElement('li')

        const img = document.createElement('img')
        img.src = food.img
        img.id = 'imgIndex'

        const a = document.createElement('a')
        a.href = food.link
        a.innerText = food.nome

        li.appendChild(img)
        li.appendChild(a)

        ul.appendChild(li)
    })
}

function salgadas() {
    const results = foods.filter(food =>
        food.tags.includes('salgado')
    )

    renderFoods(results)
}

function doces() {
    const results = foods.filter(food => 
        food.tags.includes('doce')
    )

    renderFoods(results)
}

function bebidas() {
    const results = foods.filter(food => 
        food.tags.includes('bebida')
    )

    renderFoods(results)
}

function mostrarTudo() {
    renderFoods(foods)
}

function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize('NFD') 
        .replace(/[\u0300-\u036f]/g, '') 
}

function buscar() {
    const input = normalizar(
        document.getElementById('input').value.trim()
    )

    if (input === '') {
        renderFoods(foods)
        return
    }

    const resultados = foods.filter(food => {
        const nome = normalizar(food.nome)
        const tags = normalizar(food.tags.join(' '))

        return nome.includes(input) || tags.includes(input)
    })

    renderFoods(resultados)
}

function verificarEnter(event) {
    if (event.key === 'Enter') {
        buscar()

        document.getElementById('input').value = ''
    }
}