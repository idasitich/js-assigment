const computerPlay = () => {
    const value = Math.random();
    let word = value < 0.33? "Scissors": 
    (0.33 <= value && value < 0.66 )? "Rock": 
    "Paper";
    console.log(word);
    return word;
};

//WE HAVE COMMENTED ALL THOSE FUNCTIONS WE NEEDED FOR THE FIRST VERSION AND WE LET ASIDE USING UX
// const wordCapitalizer = (str) => {
//     str.trim().toLowerCase();
//     const firstLetter = str.charAt(0).toUpperCase();
//     const remainingLetters = str.substring(1,);
//     return firstLetter + remainingLetters;
// };

// const userPlay = () => {
//     let rawWord = prompt("Enter your choice and prepare to die >:D");
//     let word = wordCapitalizer(rawWord); 
//     while(word != 'Rock' && word != 'Scissors' &&  word != 'Paper'){
//         let newWord = prompt("Don't mess with me (enter only Rock, Paper or Scissors)");
//         word = wordCapitalizer(newWord);
//     }
//     return word;
// };

const playRound = (playerSelection, computerSelection) => {
    let result = 'Skynet wins, looser !!!';
    let userCounter = 0;
    let computerCounter = 0;
    let winner = 'computer';

    return (playerSelection == 'Rock' && computerSelection=='Scissors')?{
        result: 'Rock breaks Scissors, you win this round !',
        userCounter: 1,
        computerCounter,
        winner: 'user'
    }:( playerSelection == 'Rock' && computerSelection=='Scissors')?{
        result : 'Rock breaks Scissors, you win this round !',
        userCounter: 1,
        computerCounter,
        winner: 'user'
    }:( playerSelection == 'Scissors' && computerSelection=='Paper')?{
        result : 'Scissors cut Paper, you win this round !',
        userCounter: 1,
        computerCounter,
        winner: 'user'
    }:(playerSelection == 'Paper' && computerSelection=='Rock')?{
        result: 'Paper wraps the Rock, you win this round !',
        userCounter: 1,
        computerCounter,
        winner: 'user'
    }:((playerSelection == 'Paper' && computerSelection=='Paper') ||
       (playerSelection == 'Rock' && computerSelection=='Rock') || 
       (playerSelection == 'Scissors' && computerSelection=='Scissors')) ? {
        result: 'It is a tie !',
        userCounter: 0,
        computerCounter,
        winner: 'tie'
    }:{
        result,
        userCounter,
        computerCounter: 1,
        winner
    }
};

const finalMessage = (userCounter, computerCounter) => {
    const looseMessage = `The winner is me, so you can lunch, dinner, take tea or whatever you want with the dust, hohoho`;
    const winMessage = `It's not a matter of points, it's a matter of charm, so I say the winner is me. Bye`;
    const tieMessage = `I could say it's a tie, but I prefer to declare myself the winner, LoL`;

    const message = (computerCounter < userCounter)? winMessage:
        (userCounter < computerCounter)? looseMessage: 
        tieMessage;

    window.alert(`
    Final Score: 
    Player points: ${userCounter} | Computer points: ${computerCounter}
    ${message}`);
};

const winnerInAdvance = () => {
    const message = confirm(`It's not the fifth round yet, but with 3 points, we can stop now because we have a winner.
    Would you like to stop this now?`);
    return message? true: false;
};

//WE HAVE COMMENTED ALL THOSE FUNCTIONS WE NEEDED FOR THE FIRST VERSION AND WE LET ASIDE USING UX
// const doGame = (userCounter, computerCounter) => { 
//     let stop = false;
//     for(let i=0; i<5; i++){
//         let computer = computerPlay();
//         let user = userPlay();
//         let roundResult = playRound(user, computer);
//         userCounter += roundResult.userCounter;
//         computerCounter+= roundResult.computerCounter;
//         alert(`
//         Player game: ${user}, 
//         Computer game: ${computer} 
//         ${roundResult.result} 
//         Player points: ${userCounter} | Computer points: ${computerCounter}`)
//         if((userCounter == 3 || computerCounter == 3) && i < 4){
//             stop = winnerInAdvance();
//         }
//         if(stop) {
//             finalMessage(userCounter, computerCounter);
//             break;
//         };
//     }
//     if(!stop){finalMessage(userCounter, computerCounter);};
// };

// const game = () => {
//     alert("🔫🤖Welcome to my rock-paper-scissors game. We have 5 rounds to set myself up as the absolute victor 🤖🔫")
//     let computerCounter = 0;
//     let userCounter = 0;
//     doGame(userCounter, computerCounter);
// };

//game();

