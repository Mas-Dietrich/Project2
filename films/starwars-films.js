import { films } from '../data/films.js'
import { getLastNumber } from '../utils/index.js'



let filmList = document.querySelector('#filmList')

for (let i = 0; i < films.length; i++) {

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