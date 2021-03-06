import { people } from '../data/people.js'
import { getLastNumber, removeChildren } from '../../utils/index.js'

const header = document.querySelector('header')
const main = document.querySelector('main')

const allCharsButton = document.createElement('button')
allCharsButton.textContent = 'All Characters'
allCharsButton.addEventListener('click', function () {
  populateDOM(people)
})

const maleCharacters = people.filter(person => person.gender === 'male')

// TODO: make a filter for female characters
const femaleCharacters = people.filter(person => person.gender === 'female')

// TODO: make a filter for other characters
const otherCharacters = people.filter(person => person.gender != 'male' && person.gender != 'female')

const maleCharsButton = document.createElement('button')
maleCharsButton.textContent = 'Male Characters'
maleCharsButton.addEventListener('click', () => populateDOM(maleCharacters))

// TODO: create a female characters button and add it to the DOM
const femaleCharsButton = document.createElement('button')
femaleCharsButton.textContent = 'Female Characters'
femaleCharsButton.addEventListener('click', () => populateDOM(femaleCharacters))
// TODO: create a other characters button and add it to the DOM
const otherCharsButton = document.createElement('button')
otherCharsButton.textContent = 'Other Characters'
otherCharsButton.addEventListener('click', () => populateDOM(otherCharacters))

header.appendChild(allCharsButton)
header.appendChild(maleCharsButton)
header.appendChild(femaleCharsButton)
header.appendChild(otherCharsButton)

function populateDOM(characters) {
  // loop through all the characters and make figure elements and insert them into DOM
  removeChildren(main)
  characters.forEach((person) => {
    const personFig = document.createElement('figure')
    const personImg = document.createElement('img')

    // Set the new image's source property to a valid URL or path
    let charNum = getLastNumber(person.url)

    personImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
    const personCap = document.createElement('figcaption')
    personCap.textContent = person.name

    personFig.appendChild(personImg)
    personFig.appendChild(personCap)
    main.appendChild(personFig)
  })
}

//Split text into letters
const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const element = document.querySelectorAll('span');
for (let i=0; i<element.length; i++){
  element[i].style.animationDelay = i*0.07 + 's';
}