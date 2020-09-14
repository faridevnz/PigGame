/*

    PIG GAME RULES:
        - The game has 2 players, playing in rounds
        - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
        - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
        - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
        - The first player to reach 100 points on GLOBAL score wins the game

*/

var score, tempScore, activePlayer, dice;
//inizializzazione delle variabili
score = [0, 0];
tempScore = 0;
activePlayer = 0; // 0 = firstPlayer, 1 = secondPrlayer

// nascondiamo il dado
var diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'none';

// funzione che passa il turno al prossimo player
function changePlayer() {
    tempScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = tempScore;
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    activePlayer = ( activePlayer == 0 ) ? 1 : 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    diceDOM.style.display = 'none';
}
// funzione che controlla se il player corrente sia arrivato almeno a 100 punti
function checkWinner() {
    if ( score[activePlayer] >= 100 ) {
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    } 
}
// pressione del btn roll per lanciare il dado
document.querySelector('.btn-roll').addEventListener('click', () => {
    // 1. lancio il dado
    dice = Math.floor(Math.random() * 6) + 1;
    // 2. update grafica
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // 3. update score
    tempScore += dice;
    // 4. se esce il numero 1 passo il turno altrimenti update dei punti sulla UI
    if ( dice != 1 ) {
        // update dei punti temporanei
        document.querySelector('#current-' + activePlayer).textContent = tempScore;
    } else {
        // passare il turno
        changePlayer();
    }

});
// pressione del btn per passare il turno
document.querySelector('.btn-hold').addEventListener('click', () => {
    // 1. update di score
    score[activePlayer] += tempScore;
    // 2. update del punteggio sulla UI
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    // 3. controllo se il player corrente ha vinto
    checkWinner();
    // 4. altrimenti passo il turno
    changePlayer();
});
// pressione del pulsante nuova partita
document.querySelector('.btn-new').addEventListener('click', () => {
    // 1. reset score e UI
    score = [0, 0];
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    // 2. reset temp scores e UI
    tempScore = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    // rimettiamo l'utente attivo a 0
    if ( activePlayer ) changePlayer();
    // nascondiamo nuovamente il dado
    diceDOM.style.display = 'none';
});