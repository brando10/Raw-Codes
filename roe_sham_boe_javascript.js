const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'c4 bomb') {
    return userInput;
  } else {
    console.log('Error!');
  }
};

const getComputerChoice = function() {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    default:
      return 'scissors'
  }
}

const determineWinner = function(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
      return 'Game was a tie'
  } else if (userChoice === 'c4 bomb') {
      return 'Panalo!!!'
  } else {
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    };
      
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    };
      
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'The computer won!';
        } else {
          return 'You won!';
        }
    };
    
  }
};

const playGame = () => {
   const userChoice = getUserChoice('c4 bomb');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw:' + computerChoice);
   console.log(determineWinner(userChoice, computerChoice));
};

playGame();