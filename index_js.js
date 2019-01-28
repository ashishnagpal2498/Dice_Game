//Create variable
//Manipulate

let scores,roundScores,activeplayer;

scores = [0,0];
roundScores = 0;
activeplayer = 0;

//Math . floor - integer part

//console.log(dice);

//Using as getter


//let score_Val = document.getElementById('score-'+activeplayer).textContent
//console.log(score_Val);

document.querySelector('.dice').style.display="none"
document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-0').textContent = '0'


// let abc = document.getElementById('score-0');
// console.log(abc);

document.querySelector('.btn-roll').addEventListener('click',function () {
    //1) generate a random number
   let dice = Math.floor(Math.random()*6) +1;

   //2)Show the image corresponding to that number ;

    let dicedom_obj = document.querySelector('.dice');
   dicedom_obj.style.display = "block"
    dicedom_obj.src = "dice-"+ dice +".png";

   //3) Game logic
    //if the dice is != 1
    //add the score to
    if(dice!==1)
    {
        //Add the score to the current score
        roundScores+=dice;
        let currscore = document.querySelector('#current-'+activeplayer);
        currscore.innerHTML = `<em>`+ roundScores +`</em>`;
    }
    else
    {
        activeplayer = (activeplayer === 1) ? 0:1;
        roundScores = 0;
        nextPlayer();

    }

})

document.querySelector('.btn-hold').addEventListener('click',function () {
    // 1)Hold the scores
    //adding current score to global score
        scores[activeplayer] += roundScores;
        roundScores = 0;
    //2)Update the UI
    document.querySelector('#score-'+activeplayer).textContent = scores[activeplayer]
    nextPlayer();

})

function nextPlayer() {
    document.getElementById('current-0').innerText = '0'
    document.getElementById('current-1').innerText = '0'

    //Selecting the element and removing the active player class
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
    document.querySelector('.dice').style.display = "none"
}