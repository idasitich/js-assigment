
let numberOfRounds = 0; let userCounter = 0; let computerCounter= 0;


document.getElementById('start_button').addEventListener("click", () =>{
    document.querySelector('.to_play_hidden').className= 'to_play_show';
    document.querySelector('.to_play_show').className='hide';
 });

document.querySelectorAll('.play_button').forEach(button => {
    button.addEventListener('click', () => {
        const userPlay = button.value;
        numberOfRounds +=1;
        let stop = false;
        if(numberOfRounds < 6){
            const computer = computerPlay();
            let roundResult = playRound(userPlay, computer);
            let winner = roundResult.winner;
            userCounter += roundResult.userCounter;
            computerCounter+= roundResult.computerCounter;
            const userScore = document.querySelector('#user_score > ul');
            userScore.innerHTML += `<li class="${ winner == 'computer'? 'lost': 
                                    winner == 'tie'? 'tie': 
                                    'win'}">
                                    ${userPlay}</li>`;
            const computerScore = document.querySelector('#computer_score > ul');
            computerScore.innerHTML += `<li class="${ winner == 'user'? 'lost':
                                     winner == 'tie'? 'tie':
                                    'win'}">
                                    ${computer}</li>`;
            const computerScoreNumber = document.querySelector('#computer_score span');
            computerScoreNumber.innerHTML = `0${computerCounter}`;

            const userScoreNumber = document.querySelector('#user_score span');
            userScoreNumber.innerHTML = `0${userCounter}`;

            alert(`
                Round: ${numberOfRounds}
                Player game: ${button.value}, 
                Computer game: ${computer} 
                ${roundResult.result} 
                Player points: ${userCounter} | Computer points: ${computerCounter}`)

            if((userCounter == 3 || computerCounter == 3) && numberOfRounds < 5){
                stop = winnerInAdvance();
                if(stop) {
                    numberOfRounds = 5;
                };
            }
            if(numberOfRounds == 5) {finalMessage(userCounter, computerCounter);};    
        }
        
        console.log(userPlay);
    });
});
