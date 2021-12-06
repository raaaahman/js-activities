const questions = [
    {
        text: "Tu es nouveau dans l'école des sorciers, quelle est la première chose que tu fais?",
        tigruby: "Tu vas voir les autres nouveaux et cherche à te faire des amis.",
        lezargente: "Tu trouves une farce potache pour piéger ton professeur et impressionner tes camarades.",
        becDeCorbin: "Tu vas à la bibliothèque emprunter les livres qui te donneront une avance sur le programme de l'année.",
        ratonifiant: "Tu cherches un coin tranquille où personne ne viendra t'embêter."
    }
]

const answers = {
    tigruby: 0, 
    lezargente: 0,
    becDeCorbin: 0,
    ratonifiant: 0
}

document.getElementById('question').innerText = questions[0].text

const choices = document.getElementsByClassName('answer-choice')
choices[0].setAttribute('value', 'tigruby')
document.querySelector('[for="answer-0"]').innerText = questions[0].tigruby

choices[1].setAttribute('value', 'lezargente')
document.querySelector('[for="answer-1"]').innerText = questions[0].lezargente

choices[2].setAttribute('value', 'becDeCorbin')
document.querySelector('[for="answer-2"]').innerText = questions[0].becDeCorbin

choices[3].setAttribute('value', 'ratonifiant')
document.querySelector('[for="answer-3"]').innerText = questions[0].ratonifiant
