let uScr = 0;
let cScr = 0;
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#play');
const uScrpara = document.querySelector('#uScr');
const cScrpara = document.querySelector('#cScr');

const comAuto = () => {
    const options = ['rock', 'paper', 'scissor'];
    const ranidx = Math.floor(Math.random() * 3);
    return options[ranidx];
}

drawGame = () => {

    msg.innerText = 'Game Draw!: Play Again';
    msg.style.backgroundColor = 'black'
};

const showWin = (userWin, id, comChoice) => {
    if (userWin) {
        uScr++;
        uScrpara.innerText = uScr;
        msg.innerText = `You Win ${id} beats ${comChoice}`;
        msg.style.backgroundColor = 'Green';
    } else {
        cScr++;
        cScrpara.innerText = cScr;

        msg.innerText = `You lose ${comChoice} beats ${id}`;
        msg.style.backgroundColor = 'red';
    }
}

const playGame = (id) => {

    const comChoice = comAuto();

    if (id === comChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (id === 'rock') {
            userWin = comChoice === 'paper' ? false : true;
        } else if (id === 'paper') {
            userWin = comChoice === 'scissor' ? false : true;
        } else {
            userWin = comChoice === 'rock' ? false : true;
        }
        showWin(userWin, id, comChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const id = choice.getAttribute('id');
        playGame(id);
    });
});