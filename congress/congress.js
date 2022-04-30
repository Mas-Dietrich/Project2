import { senators } from '../starWars/data/senators.js'
import { representatives } from '../starWars/data/representatives.js'
import { removeChildren } from '../utils/index.js'

const allCongressMembers = [...senators, ...representatives]

const header = document.querySelector('header')

const congressDiv = document.querySelector('.congressDiv')
const seniorityHeading = document.querySelector('.seniority')
const loyaltyList = document.querySelector('.loyaltyList')


function simplifiedSenators() {
    return senators.map(senator => {
        const middleName = senator.middle_name ? ` ${senator.middle_name} ` : `  `
        return{
            id: senator.id,
            name: `${senator.first_name}${middleName}${senator.last_name}`,
            party: senator.party,
            gender: senator.gender,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${senator.govtrack_id}-200px.jpeg`,
            seniority: +senator.seniority,
            missedVotesPct: senator.missed_votes_pct,
            loyaltyPct: senator.votes_with_party_pct,
            birthday: senator.date_of_birth,
        }
    })
}

function simplifiedRepresentatives() {
    return representatives.map(representative => {
        const middleName = representative.middle_name ? ` ${representative.middle_name} ` : `  `
        return{
            id: representative.id,
            name: `${representative.first_name}${middleName}${representative.last_name}`,
            party: representative.party,
            gender: representative.gender,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${representative.govtrack_id}-200px.jpeg`,
            seniority: +representative.seniority,
            missedVotesPct: representative.missed_votes_pct,
            loyaltyPct: representative.votes_with_party_pct,
            birthday: representative.date_of_birth,
        }
    })
}

const simpleRepresentatives = simplifiedRepresentatives()
const simpleSenators = simplifiedSenators()

const allSimplifiedCongress = [...simpleSenators, ...simpleRepresentatives]


function populateCongressDiv(congressArray) {
    removeChildren(congressDiv)
    congressArray.forEach(senator => {
        const senFigure = document.createElement('figure')
        const figImg = document.createElement('img')
        const figCaption = document.createElement('figcaption')

        figImg.src = senator.imgURL
        figCaption.textContent = `${senator.name} born ${senator.birthday}`

        senFigure.appendChild(figImg)
        senFigure.appendChild(figCaption)
        congressDiv.appendChild(senFigure)
    })
    congressArray.forEach(representative => {
        const repFigure = document.createElement('figure')
        const repImg = document.createElement('img')
        const repCaption = document.createElement('figcaption')

        repImg.src= representative.imgURL
        repCaption.textContent = `${representative.name} born ${representative.birthday}`
        repFigure.appendChild(repImg)
        repFigure.appendChild(repCaption)
        congressDiv.appendChild(repFigure)
    })
}

populateCongressDiv(allSimplifiedCongress);

const mostSeniorMember = simplifiedSenators().reduce((acc, senator) => {
    return acc.seniority > senator.seniority ? acc : senator
})

const biggestMissedVotesPct = simplifiedSenators().reduce((acc, senator) => acc.missedVotesPct > senator.missedVotesPct ? acc : senator)

const biggestVacationerList = simplifiedSenators().filter(senator => senator.missedVotesPct === biggestMissedVotesPct.missedVotesPct).map(senator => senator.name).join(' and ')


seniorityHeading.textContent = `The most senior senator is ${mostSeniorMember.name} and the biggest vacationers are ${biggestVacationerList}`

/*simplifiedSenators().forEach(senator => {
    if(senator.loyaltyPct === 100) {
        let listItem = document.createElement('li')
        listItem.textContent = senator.name
        loyaltyList.appendChild(listItem)

    }
})*/

const allCongress = document.createElement('button')
allCongress.textContent = 'All Congress'
allCongress.addEventListener('click', function() {
    populateCongressDiv(allSimplifiedCongress)
})

const allSenators = document.createElement('button')
allSenators.textContent = 'All Senators'
allSenators.addEventListener('click', () => populateCongressDiv(simpleSenators))

const allRepresentatives = document.createElement('button')
allRepresentatives.textContent = 'All Representatives'
allRepresentatives.addEventListener('click', () => populateCongressDiv(simpleRepresentatives))

const maleSenators = simpleSenators.filter(senators => senators.gender === 'M')
const maleSenatorsButton = document.createElement('button')
maleSenatorsButton.textContent = 'Male Senators'
maleSenatorsButton.addEventListener('click', () => populateCongressDiv(maleSenators))

const femaleSenators = simpleSenators.filter(senators => senators.gender === 'F')
const femaleSenatorsButton = document.createElement('button')
femaleSenatorsButton.textContent = 'Female Senators'
femaleSenatorsButton.addEventListener('click', () => populateCongressDiv(femaleSenators))

const maleRepresentatives = simpleRepresentatives.filter(representatives => representatives.gender === 'M')
const maleRepresentativesButton = document.createElement('button')
maleRepresentativesButton.textContent = 'Male Representatives'
maleRepresentativesButton.addEventListener('click', () => populateCongressDiv(maleRepresentatives))

const femaleRepresentatives = simpleRepresentatives.filter(representatives => representatives.gender === 'F')
const femaleRepresentativesButton = document.createElement('button')
femaleRepresentativesButton.textContent = 'Female Representatives'
femaleRepresentativesButton.addEventListener('click', () => populateCongressDiv(femaleRepresentatives))


header.appendChild(allCongress)
header.appendChild(allSenators)
header.appendChild(allRepresentatives)
header.appendChild(maleSenatorsButton)
header.appendChild(femaleSenatorsButton)
header.appendChild(maleRepresentativesButton)
header.appendChild(femaleRepresentativesButton)


// TODO suggestions for final project:
//Replace list of senator's and their loyalty percentage with a did you know section involving more data use
//More data with each congress member
//Add filter for oldest/youngest member


