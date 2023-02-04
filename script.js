const computerPlay = () => {
    const value = Math.random();
    let word = value < 0.33? "Scissors": (0.33 <= value && value < 0.66 )? "Rock": "Paper";
    return word;
};

const wordCapitalized = (str) => {
    const strConverted = str.trim().toLowerCase();
    const firstLetter = strConverted.charAt(0).toUpperCase();
    const remainingLetters = strConverted.substring(1,);
    const capitalizedWord = firstLetter + remainingLetters;
    return capitalizedWord;
};

const userPlay = () => {
    let rawWord = prompt("Enter your choice and prepare to die :D");
    let word = wordCapitalized(rawWord); 
    while(word != 'Rock' && word != 'Scissors' &&  word != 'Paper'){
        let newWord = prompt("Don't mess with me (enter only Rock, Paper or Scissors)");
        word = wordCapitalized(newWord);
    }
    return word;
};

const playRound = (playerSelection, computerSelection) => {
    let result = 'Skynet wins, looser !!!';
    let userCounter = 0;
    let computerCounter = 1;

    if( playerSelection == 'Rock' && computerSelection=='Scissors') {
        result = 'Rock breaks Scissors, you win this round !';
        userCounter = 1;
        computerCounter = 0;
    } 
    if ( playerSelection == 'Scissors' && computerSelection=='Paper' ) {
        result = 'Scissors cut Paper, you win this round !';
        userCounter = 1;
        computerCounter = 0;
    } 
    if (playerSelection == 'Paper' && computerSelection=='Rock') {
        result = 'Paper wraps the Rock, you win this round !';
        userCounter = 1;
        computerCounter = 0;
    } 
    if ((playerSelection == 'Paper' && computerSelection=='Paper') ||
        (playerSelection == 'Rock' && computerSelection=='Rock') || 
        (playerSelection == 'Scissors' && computerSelection=='Scissors')) {
        result = 'It is a tie !';
        userCounter = 0;
        computerCounter = 0;
    } 
    return {
        result,
        userCounter,
        computerCounter
    }
};

const game = () => {
    alert("Welcome to Rock, Scissors, and Paper game !!!")
    let computerCounter = 0;
    let userCounter = 0;
    const winner = () => { 
        for(let i=0; i<5; i++){
            let computer = computerPlay();
            let user = userPlay();
            let roundResult = playRound(user, computer);
            userCounter += roundResult.userCounter;
            computerCounter+= roundResult.computerCounter;
            window.alert(`
            Player : ${user}, 
            Computer : ${computer} 
            ${roundResult.result} 
            Player points: ${userCounter} | Computer points: ${computerCounter}`)
        }
    };

    winner();
    
    if (computerCounter > userCounter) {
        window.alert(`
        Final Score: 
        Computer : ${computerCounter} |  Player : ${userCounter}
    
        YOU LOSE ! TRY AGAIN HAHAHA 
        so you can bite the dust hahahahahahah`
        )
    } else if (computerCounter < userCounter){
        window.alert(`
        Final Score: 
        Computer : ${computerCounter} | Player : ${userCounter}
    
        YOU WIN ! CONGRATULATION.`
        )
    }else{
        window.alert("You both are a tie, Play again ! FIGHTING !!!")
    }
};

game();