//Create variable
//Manipulate

let scores,roundScores,activeplayer,gameVariable;
function init()
{
    scores = [0,0];
    roundScores = 0;
    activeplayer = 0;
    gameVariable = true;
    //let score_Val = document.getElementById('score-'+activeplayer).textContent
//console.log(score_Val);

    document.querySelector('.dice').style.display="none"
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.querySelector('#name-0').textContent = "Player 1"
    document.querySelector('#name-1').textContent = "Player 2"
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')


}
init();
//Math . floor - integer part

//console.log(dice);

//Using as getter





// let abc = document.getElementById('score-0');
// console.log(abc);

document.querySelector('.btn-roll').addEventListener('click',function () {
    //1) generate a random number
   if(gameVariable) {
       let dice = Math.floor(Math.random() * 6) + 1;

       //2)Show the image corresponding to that number ;

       let dicedom_obj = document.querySelector('.dice');
       dicedom_obj.style.display = "block"
       dicedom_obj.src = "dice-" + dice + ".png";

       //3) Game logic
       //if the dice is != 1
       //add the score to
       if (dice !== 1) {
           //Add the score to the current score
           roundScores += dice;
           let currscore = document.querySelector('#current-' + activeplayer);
           currscore.innerHTML = `<em>` + roundScores + `</em>`;
       }
       else {

           nextPlayer();

       }
   }
   else
   {
       alert('Game has Ended')
   }
})

document.querySelector('.btn-hold').addEventListener('click',function () {

    if(gameVariable)
    // 1)Hold the scores
    //adding current score to global score
    {
        scores[activeplayer] += roundScores;
        //2)Update the UI
        document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer]
        if (scores[activeplayer] >= 10) {
            //declare the winner-
            document.querySelector('#name-' + activeplayer).textContent = "Winner!"
            document.querySelector('.dice').style.display = "none"
            document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active')
            document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner')
            gameVariable = false;
        }
        else {
            nextPlayer();
        }
    }
    else{
        alert("Game has Ended")
    }
})

document.querySelector('.btn-new').addEventListener('click',init
    // scores = [0,0]
    // roundScores =0;
    // activeplayer =0;
    )

function nextPlayer() {
    document.getElementById('current-0').innerText = '0'
    document.getElementById('current-1').innerText = '0'
    activeplayer = (activeplayer === 1) ? 0:1;
    roundScores = 0;
    //Selecting the element and removing the active player class
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
    document.querySelector('.dice').style.display = "none"

}