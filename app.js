/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scoreOne = 0, scoreTwo = 0, nextPlayer, dice;

// produzione casuale del turno di inizio
nextPlayer = Math.floor(Math.random() * 2); // 0 = firstPlayer, 1 = secondPrlayer

switch(nextPlayer) {
    case 0:
        document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        break;
    case 1:
        document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.player-0-panel').classList.remove('active');
}

function rollDice() {
    dice = Math.floor(Math.random() * 6) + 1;
}

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', () => {
    rollDice();
    document.querySelector('.dice').src = 'dice-'+dice+'.png';
    console.log('dice-' + dice + '.png');
})
