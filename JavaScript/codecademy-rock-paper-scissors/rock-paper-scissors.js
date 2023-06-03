//https://www.youtube.com/watch?v=cKbN6-1ZQ3A

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error, please type: rock, paper or scissors.');
    }
}

console.log(getUserChoice('rock'));
console.log(getUserChoice('stone'));

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}
console.log(getComputerChoice());


const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }
    if (userChoice === 'bomb') {
        return 'YOU WOOOOON!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Sorry, computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Sorry, computer won!';
        } else {
            return 'You won!'
        }
    }
    if (userChoice === 'scissors') {
        if (computerInput === 'rock') {
            return 'Sorry, computer won!';
        } else {
            return 'You won!'
        }
    }
};

console.log(determineWinner('rock', 'rock'));
console.log(determineWinner('rock', 'paper'));
console.log(determineWinner('rock', 'scissors'));

console.log('*************')

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));

};

console.log(playGame())  