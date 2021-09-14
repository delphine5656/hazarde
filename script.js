//menu responsive

const toggleButton = document.getElementById('toggle-button');
const navbar = document.getElementById('nav-bar');
toggleButton.addEventListener('click', show);

function show() {
    navbar.classList.toggle('active');
}

//fin menu


// play 

let scores;
let roundScore;
let gamePlaying;
let de = document.getElementById('scorede');
let ajoutPoint = document.querySelector('.btn-hold');

init();



document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        let resultLanceDe =parseInt( Math.floor(Math.random() *6) +1);
        document.getElementById('photo').src = `images/${resultLanceDe}.png`
        de.textContent = resultLanceDe;


        //3. Update the round score IF the rolled number was NOT a 1
        if (resultLanceDe !== 1) {
            //Add score
            roundScore += resultLanceDe;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
             roundScore = 0;
            nextPlayer();
        }
    }    
});

    
        ajoutPoint.addEventListener('click', function() {
        if (gamePlaying) {
            // Add CURRENT score to GLOBAL score
            scores[activePlayer] += roundScore;
            roundScore= 0;
    
            // Update the UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
            // Check if player won the game
            if (scores[activePlayer] >= 100) {
                document.querySelector('#name-' + activePlayer).innerHTML ='<p><strong>Vous êtes le vainqueur!';
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlaying = false;
            } else {
                //Next player
                nextPlayer();
            }
        }
    });





function nextPlayer(){  
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    resultLanceDe = 0;  
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

 
    
}



function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}













