let score= {
wins: 0,
losses: 0,
ties:0
};
updateScoreElement();
        
function playGame(playermove){
    const computerMove=pickComputerMove();
    let result='';
if(playermove==='rock'){
    if(computerMove==='rock'){
        result='Tie.';
    }
    else if(computerMove==='paper'){
        result='You Lose.';
    }
    else if(computerMove==='scissors'){
        result='You Won.';
    }
}

else if(playermove==='paper'){
    if(computerMove==='rock'){
        result='You Won.';
    }
    else if(computerMove==='paper'){
        result='Tie.';
    }
    else if(computerMove==='scissors'){
        result='You Lose.';
    }
}

else if(playermove==='scissors'){
    if(computerMove==='rock'){
        result='You Lose.';
    }
    else if(computerMove==='paper'){
        result='You Won.';
    }
    else if(computerMove==='scissors'){
        result='Tie.';                        
    }
}

if(result==='You Won.'){
    score.wins+=1
}else if(result==='You Lose.'){
    score.losses+=1
}
else if(result==='Tie.'){
    score.ties+=1
}



    updateScoreElement();

    document.querySelector('.js-result').innerHTML= result;
    document.querySelector('.js-moves').innerHTML=`You <img src="Images/${playermove}.webp" class="move-mini-icon"> <img src="Images/${computerMove}.webp" class="move-mini-icon"> Computer`;

} 

function updateScoreElement(){
    document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}
    Losses: ${score.losses}
    Ties: ${score.ties}`;
}
console.log(`playermove = ${playermove}, computerMove = ${computerMove}`);

function pickComputerMove(){
    const randomNumber=Math.random();
        let computerMove='';
        if (randomNumber>=0 && randomNumber<1/3){
            computerMove='rock';
        }
        else if(randomNumber>=1/3 && randomNumber<2/3){
            computerMove='paper';

        }
        else if(randomNumber>=2/3 && randomNumber<1){
            computerMove='scissors';
        }console.log(computerMove);
    
    return computerMove;
}
