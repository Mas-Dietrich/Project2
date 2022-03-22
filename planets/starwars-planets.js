import { planets } from '../data/planets.js'

const header= document.querySelector('header')
const main = document.querySelector('main')

const allPlanetsButton = document.createElement('button')
allPlanetsButton.textContent = 'All Planets'
allPlanetsButton.addEventListener('click', function (event) {
    console.log('Thanks for clicking!',)
    populateDOM()
})
header.appendChild(allPlanetsButton)

function populateDOM() {
    //loop through all the planets and make figure elements and insert them into DOM
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

function getLastNumber(url) {
    const secondToLastLetter = url[url.length - 2]
    return secondToLastLetter
}