const actors = [
    { 
        name: 'meryl',
        fullName: 'Meryl Streep',
        image: 'oscar-pics/meryl.png',
        number: 21
    },
    { 
        name: 'jack',
        fullName: 'Jack Nicholson',
        image: 'oscar-pics/jack.png',
        number: 12
    },
    { 
        name: 'laurence',
        fullName: 'Laurence Olivier',
        image: 'oscar-pics/laurence.png',
        number: 10
    },
    { 
        name: 'alpacino',
        fullName: 'Al Pacino',
        image: 'oscar-pics/al.png',
        number: 9
    },
    { 
        name: 'denzel',
        fullName: 'Denzel Washington',
        image: 'oscar-pics/denzel.png',
        number: 8
    },
    { 
        name: 'kate',
        fullName: 'Kate Winslet',
        image: 'oscar-pics/kate.png',
        number: 7
    }, { 
        name: 'leonardo',
        fullName: 'Leonardo DiCaprio',
        image: 'oscar-pics/leonardo.png',
        number: 6
    },
    { 
        name: 'audrey',
        fullName: 'Audrey Hepburn',
        image: 'oscar-pics/audrey.png',
        number: 5
    },
    { 
        name: 'saoirse',
        fullName: 'Saoirse Ronan',
        image: 'oscar-pics/saoirse.png',
        number: 4
    }, { 
        name: 'javier',
        fullName: 'Javier Bardem',
        image: 'oscar-pics/javier.png',
        number: 3
    },
    { 
        name: 'margot',
        fullName: 'Margot Robbie',
        image: 'oscar-pics/margot.png',
        number: 2
    },
    { 
        name: 'timothee',
        fullName: 'Timothée Chalamet',
        image: 'oscar-pics/timothee.png',
        number: 1
    }
]

let box1 = document.querySelector('.boxOne');
let box1name = document.querySelector('.box1name');
let box1number = document.querySelector('.box1number');
let firstPic = document.createElement('img');
let box2 = document.querySelector('.boxTwo');
let box2name = document.querySelector('.box2name');
let box2number = document.querySelector('.box2number');
let secondPic = document.createElement('img');

const startButton = document.querySelector('.start');
const instruct = document.querySelector('.instruct');
const playAgainButton = document.querySelector('.playAgain')
const higherButton = document.querySelector('.higher');
const lowerButton = document.querySelector('.lower')
let score = document.querySelector('.score')

let scoreTitle = document.querySelector('.scoreTitle')
const rightside = document.querySelector('.rightside')
const winner = document.querySelector('.winner')
const winnergiphy = document.querySelector('.winnergiphy')
const losergiphy = document.querySelector('.losergiphy')
let crowdsound = new Audio("mixkit-audience-light-applause-354.wav"); 

let clonedArray = []

function shuffle(array) {
    let shuffled = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    clonedArray = [...shuffled]
    return shuffled
}

function startGame() {
    document.body.style.backgroundImage = "url('oscar-pics/mainbackground.png')";
    startButton.style.display = 'none';
    instruct.style.display = 'none';
    higherButton.style.display = 'block';
    lowerButton.style.display = 'block';
    score.style.display = 'block';
    scoreTitle.style.display = 'block';

    const shuffled = shuffle(actors);
    box1name.style.display = 'block';
    box1number.style.display = 'block';
    box2name.style.display = 'block';
    box2number.style.display = 'block';

    box1name.textContent = shuffled[0].fullName
    box1number.textContent = shuffled[0].number
    firstPic.src = shuffled[0].image;
    box1.appendChild(firstPic)

    box2name.textContent = shuffled[1].fullName
    box2number.textContent = shuffled[1].number
    box2number.style.visibility = 'hidden';
    secondPic.src = shuffled[1].image;
    box2.appendChild(secondPic)
}


function newBox() {
    let i = Number(score.innerHTML)
    box1name.textContent = clonedArray[i].fullName
    box1number.textContent = clonedArray[i].number 
    firstPic.src = clonedArray[i].image;
    box2name.textContent = clonedArray[i+1].fullName;
    box2number.textContent = clonedArray[i+1].number;
    secondPic.src = clonedArray[i+1].image;
}


function correct() {
        score.innerHTML = Number(score.innerHTML) +1
        if (score.innerHTML === '11') {setTimeout(playerWins, 500)}
        else {newBox()}
}

function playerLoses() {
    higherButton.style.display = 'none';
    lowerButton.style.display = 'none';
    box1.style.display = 'none';
    box2.style.display = 'none';
    box1name.style.display = 'none';
    box1number.style.display = 'none';
    box2name.style.display = 'none';
    box2number.style.display = 'none';
    scoreTitle.style.display = 'none';
    score.style.display = 'none';
    playAgainButton.style.display = 'block';
    losergiphy.style.display = 'block'
}


function incorrect() {
    {setTimeout(playerLoses, 500)}
}

function playerWins() {
    higherButton.style.display = 'none';
    lowerButton.style.display = 'none';
    playAgainButton.style.display = 'block';
    box1.style.display = 'none';
    box2.style.display = 'none';
    box1name.style.display = 'none';
    box1number.style.display = 'none';
    box2name.style.display = 'none';
    box2number.style.display = 'none';
    score.style.display = 'none';
    scoreTitle.style.display = 'none';
    winnergiphy.style.display = 'block';
    winner.style.display = 'block';
    crowdsound.play();
}

function playAgain() {
    scoreTitle.innerHTML = 'Score';
    startButton.style.display = 'none';
    higherButton.style.display = 'block';
    lowerButton.style.display = 'block';
    playAgainButton.style.display = 'none';
    score.style.display = 'block';
    scoreTitle.style.display = 'block';
    score.innerHTML = 0;
    winner.style.display = 'none';
    winnergiphy.style.display = 'none';
    losergiphy.style.display = 'none';

    const shuffled = shuffle(actors);
    box1name.style.display = 'block';
    box1number.style.display = 'block';
    box1.style.display = 'block';
    box2name.style.display = 'block';
    box2number.style.display = 'block';
    box2.style.display = 'block';

    box1name.textContent = shuffled[0].fullName
    box1number.textContent = shuffled[0].number
    firstPic.src = shuffled[0].image;
    box1.appendChild(firstPic)

    box2name.textContent = shuffled[1].fullName
    box2number.textContent = shuffled[1].number
    box2number.style.visibility = 'hidden';
    secondPic.src = shuffled[1].image;
    box2.appendChild(secondPic)
}

startButton.addEventListener('click', () => {
    setTimeout(startGame, 600)})

playAgainButton.addEventListener('click', () => {
    setTimeout(playAgain, 500)})

higherButton.addEventListener('click', () => {
    if (Number(box2number.textContent) > Number(box1number.textContent)) {setTimeout(correct, 300)}
    if (Number(box2number.textContent) < Number(box1number.textContent)) {incorrect()}
})

lowerButton.addEventListener('click', () => {
    if (Number(box2number.textContent) < Number(box1number.textContent)) {setTimeout(correct, 300)}
    if (Number(box2number.textContent) > Number(box1number.textContent)) {incorrect()}
});