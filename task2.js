const game = confirm('Do you want to play a game?');

let attempts = 3,
    totalPrize = 0,
    currentPrize = 100,
    maxNumber = 8,
    chooseNumber = null,
    winGame = null;

const createRandomNumber = (max) => Math.floor(Math.random() * (max - 0));

function showStats() {
  chooseNumber = +prompt(
    `
        Choose a roulette pocket number from 0 to ${maxNumber}
        Attempts left: ${attempts}
        Total prize: ${totalPrize} $
        Possible prize on current attempt: ${currentPrize} $
    `
  );
}

function showPrize() {
  winGame = confirm(
    `
        Congratulation, you won!   
        Your prize is: ${totalPrize} $. 
        Do you want to continue?
    `
  );
}


const nextLevel = () => {
  attempts = 3;
  maxNumber += 4;
  totalPrize = currentPrize + totalPrize;
  currentPrize *= 2 
  showPrize()
  if (winGame) {
    startGame();
  } else {
    alert(`
        Thank you for your participation. 
        Your prize is: ${totalPrize} $ 
      `)
  }
};

const tryAgain = () => {
  attempts--;
  currentPrize *= 0.5;
  if (attempts > 0) {
    startGame();
  } else {
    alert(`
        Thank you for your participation. 
        Your prize is: ${totalPrize} $ 
      `)
  }
};

function startGame() {
  showStats();
  let randomNumber = createRandomNumber(maxNumber);
  // let randomNumber = 1;
  if (chooseNumber === randomNumber) {
    nextLevel();
  } else {
    tryAgain();
  }
}

if (game) {
  startGame();
} else {
  alert('You did not become a billionaire, but can.');
}
