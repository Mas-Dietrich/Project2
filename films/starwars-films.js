import { films } from '../data/films.js'


function getLastNumber(url) {

    const secondToLastLetter = url[url.length - 2]
    return secondToLastLetter
}

let filmList = document.querySelector('#filmList')

for (let i = 0; i < films.length; i++) {
    console.log(films[i].url);


let figure = document.createElement('figure')
let figImage = document.createElement('img')
let figcaption = document.createElement('figcaption')

let filmNum = getLastNumber(films[i].url)

figImage.src = `https://starwars-visualguide.com/assets/img/films/${filmNum}.jpg`

figcaption.textContent = films[i].title

figure.appendChild(figImage)
figure.appendChild(figcaption)
filmList.appendChild(figure)
}