const computerPlay = () => {
    const value = Math.random();
    let word= "paper";
    if(value < 0.33) {
        word = "scissors";
    } else if ( 0.33 <= value && value < 0.66 ) {
        word = "rock";
    }; 
    console.log('computer', word);
    return word;
};

const userPlay = () => {
    let word = prompt("Enter your choice and prepare to die :D")
    console.log('word', word);
    let cleanWord = word.trim().toLowerCase();
    console.log('cleanword', cleanWord);
    while(cleanWord != 'rock' && cleanWord != 'scissors' &&  cleanWord != 'paper'){
        let wordy = prompt("Don't mess with me (enter only Rock, Paper or Scissors)");
        console.log('wordy', wordy)
        cleanWord = wordy.trim().toLowerCase();
    }
    console.log('user', cleanWord);
    return cleanWord;
};

const playRound = (playerSelection, computerSelection) => {
    let result = 'Skynet wins, looser !!!';
    let userCounter = 0;
    let computerCounter = 1;

    if( playerSelection == 'rock' && computerSelection=='scissors') {
        result = 'Rock breaks Scissors, you win this round !';
        userCounter = 1;
        computerCounter = 0;
    } 
    if ( playerSelection == 'scissors' && computerSelection=='paper' ) {
        result = 'Scissors cut paper, you win this round !';
        userCounter = 1;
        computerCounter = 0;
    } 
    if (playerSelection == 'paper' && computerSelection=='rock') {
        result = 'Paper wraps the rock, you win this round !';
        userCounter = 1;
        computerCounter = 0;
    } 
    if ((playerSelection == 'paper' && computerSelection=='paper') ||
        (playerSelection == 'rock' && computerSelection=='rock') || 
        (playerSelection == 'scissors' && computerSelection=='scissors')) {
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
    let computerCounter = 0;
    let userCounter = 0;
    let winner = () => { for(let i=0; i<5; i++){
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
    }
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
            Computer : ${computerCounter} | layer : ${userCounter}
        
            YOU WIN ! CONGRATULATION.`
            )
        }else{
            window.alert("You both are a tie, Play again ! FIGHTING !!!")
        }
};

game();