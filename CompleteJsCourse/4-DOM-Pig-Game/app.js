/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gamePlaying;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

function nextPlayer() {
    activePlayer = activePlayer === 1 ? 0 : 1;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
};

function rollDice() {

    if (!gamePlaying) return;

    var dice = Math.floor(Math.random() * 6) + 1;
    showDice(dice);

    updateRoundScore(dice);

    if (dice === 1) {
        updateRoundScore(0);
        nextPlayer();
    }
};

function updateRoundScore(count) {
    roundScore += count;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
};

function celebrate() {
    hideDice();
    document.getElementById('name-' + activePlayer).textContent = 'Winner';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
};

function putOnHold() {
    if (!gamePlaying) return;

    updateScore();
    hideDice();

    if (scores[activePlayer] >= 100) {
        gamePlaying = false;
        celebrate();
    } else nextPlayer();
};

function hideDice() {
    document.querySelector('.dice').style.display = 'none';
};

function showDice(dice) {
    document.querySelector('.dice').src = 'dice-' + dice + '.png';
    document.querySelector('.dice').style.display = 'block';
};

function updateScore() {
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
};

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};

document.querySelector('.btn-new').addEventListener('click', init);
document.querySelector('.btn-roll').addEventListener('click', rollDice);
document.querySelector('.btn-hold').addEventListener('click', putOnHold);

hideDice();
init();