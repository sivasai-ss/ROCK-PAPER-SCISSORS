let score= {
wins: 0,
losses: 0,
ties:0
};
updateScoreElement();
        
function playGame(playermove){
    const computerMove=pickComputerMove();
    let result='';
if(playermove==='Rock'){
    if(computerMove==='Rock'){
        result='Tie.';
    }
    else if(computerMove==='Paper'){
        result='You Lose.';
    }
    else if(computerMove==='Scissors'){
        result='You Won.';
    }
}

else if(playermove==='Paper'){
    if(computerMove==='Rock'){
        result='You Won.';
    }
    else if(computerMove==='Paper'){
        result='Tie.';
    }
    else if(computerMove==='Scissors'){
        result='You Lose.';
    }
}

else if(playermove==='Scissors'){
    if(computerMove==='Rock'){
        result='You Lose.';
    }
    else if(computerMove==='Paper'){
        result='You Won.';
    }
    else if(computerMove==='Scissors'){
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

function pickComputerMove(){
    const randomNumber=Math.random();
        let computerMove='';
        if (randomNumber>=0 && randomNumber<1/3){
            computerMove='Rock';
        }
        else if(randomNumber>=1/3 && randomNumber<2/3){
            computerMove='Paper';

        }
        else if(randomNumber>=2/3 && randomNumber<1){
            computerMove='Scissors';
        }console.log(computerMove);
    
    return computerMove;
}