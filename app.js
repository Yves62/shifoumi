const form = document.querySelector('form');
const choice = document.querySelector('#choice');
const result = document.querySelector('.result');
const button = document.querySelector('button')
let listResponseComputer = ['pierre', 'feuille', 'ciseau'];
let number;
let responseComputer;

const randomNumber = (numberMin, numberMax) => {
    return Math.floor(Math.random() * (numberMax - numberMin) + numberMin);
}

number = randomNumber(0, 3);

function generateResponseRandom() {
    responseComputer = listResponseComputer[number];
}
generateResponseRandom()

function shifumiGame() {
    if (choice.value.toLowerCase() === responseComputer) {
        result.textContent = 'Egalité 😝 !! Retentez votre chance 😀'
    } else {
        switch (choice.value.toLowerCase()) {
            case 'pierre':
                if (responseComputer === 'ciseau') {
                    result.innerHTML = `Bravo !! vous avez gagné 😀 </br> L'ordinateur avait choisi ${responseComputer}`;
                } else {
                    result.innerHTML = `Vous avez perdu 😢  </br> L'ordinateur avais choisi ${responseComputer}`
                }
                break;
            case 'ciseau':
                if (responseComputer === 'feuille') {
                    result.innerHTML = `Bravo !! vous avez gagné 😀 </br> L'ordinateur avait choisi ${responseComputer}`;
                }
                else {
                    result.innerHTML = `Vous avez perdu 😢 </br> L'ordinateur avais choisi ${responseComputer}`
                }
                break;
            case 'feuille':
                if (responseComputer === 'pierre') {
                    result.innerHTML = `Bravo !! vous avez gagné 😀 </br> L'ordinateur avait choisi ${responseComputer}`;
                }
                else {
                    result.innerHTML = `Vous avez perdu 😢 </br> L'ordinateur avait choisi ${responseComputer}`
                }
                break;
            default:
                result.innerHTML = `Choix non compris 🤔`
                break;
        }
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    shifumiGame();
    choice.value = "";
})