import { planets } from '../data/planets.js'
import { getLastNumber, removeChildren } from '../utils/index.js'

const header= document.querySelector('header')
const main = document.querySelector('main')

const allPlanetsButton = document.createElement('button')
allPlanetsButton.textContent = 'All Planets'
allPlanetsButton.addEventListener('click', function () {
    populateDOM(planets)
})

const planetFilmsButton = document.createElement('button')
planetFilmsButton.textContent = 'As Seen On'
planetFilmsButton.addEventListener('click', () => populateDOM() )




header.appendChild(allPlanetsButton)
header.appendChild(planetFilmsButton)

function populateDOM(planets) {
    //loop through all the planets and make figure elements and insert them into DOM
    removeChildren(main)
    planets.forEach((planet) => { 
        const planetFig = document.createElement('figure')
        const planetImg = document.createElement('img')

        let planetNum = getLastNumber(planet.url)

        planetImg.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`
        const planetCap = document.createElement('figcaption')
        planetCap.textContent = planet.name

        planetFig.appendChild(planetImg)
        planetFig.appendChild(planetCap)
        main.appendChild(planetFig)
    })
   
}

populateDOM(planets)