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
    console.log('clinword', cleanWord);
    while(cleanWord != 'rock' && cleanWord != 'scissors' &&  cleanWord != 'paper'){
        let wordy = prompt("Don't mess with me (enter only Rock, Paper or Scissors)");
        console.log('wordy', wordy)
        cleanWord = wordy.trim().toLowerCase();
    }
    console.log('user', cleanWord);
    return cleanWord;
};

const singleRound = (playerSelection, computerSelection) => {
    let result = 'Skynet wins, looser';
    let userCounter = 0;
    let computerCounter = 1;

    if( playerSelection == 'rock' && computerSelection=='scissors') {
        result = 'Rock breaks Scissors, you win this round';
        userCounter = 1;
        computerCounter = 0;
    } 
    if ( playerSelection == 'scissors' && computerSelection=='paper' ) {
        result = 'Scissors cut paper, you win this round';
        userCounter = 1;
        computerCounter = 0;
    } 
    if (playerSelection == 'paper' && computerSelection=='rock') {
        result = 'Paper wraps the rock, you win this round';
        userCounter = 1;
        computerCounter = 0;
    } 
    if ((playerSelection == 'paper' && computerSelection=='paper') ||
        (playerSelection == 'rock' && computerSelection=='rock') || 
        (playerSelection == 'scissors' && computerSelection=='scissors')) {
        result = 'It is a tie';
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

    for(let i=0; i < 5; i++){
        if(computerCounter < 3 && userCounter < 3) {
            let computer = computerPlay();
            let user = userPlay();
            console.log('user & computer at game', user, computer)
            let roundResult = singleRound(user, computer);
            console.log('roundresult', roundResult);
            userCounter += roundResult.userCounter;
            computerCounter+= roundResult.computerCounter;
            window.alert(`You played ${user}, 
            I played ${computer} 
            ${roundResult.result} 
            your points: ${userCounter} 
            my points: ${computerCounter}`)
        } else if (computerCounter == 3) {
            window.alert(`The winner is me, so you can bite the dust, 
            hahahahahahah`)
            break;
        } else if (userCounter == 3) {
            window.alert(`The winner are you, wait, no, it was just an error `);
            break;
        }
    }
};

game();