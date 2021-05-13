'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

//displays different messages based on diferent numbers
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

// handles the click event of the .check button
function playGame() {
  let guess = Number(document.querySelector('.guess').value);

  //input check
  if (!guess || typeof guess !== 'number') {
    displayMessage('⛔ Enter a number!');

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🏆 Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? '📉 Too low!' : '📈 Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // console.log(secretNumber);
}

//handles the click event of the .again button
function resetGame() {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  displayMessage('start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
}

//click event handler to play game
document.querySelector('.check').addEventListener('click', playGame);

//click event handler to reset game after winning
document.querySelector('.again').addEventListener('click', resetGame);
