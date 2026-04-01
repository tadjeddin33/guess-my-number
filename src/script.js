/**
 * Guess My Number — Game Logic
 * Author: Your Name
 * Description: A number guessing game with state management,
 *              streak tracking, and animated feedback.
 */

// ─── State ────────────────────────────────────────────────────────────────────

const state = {
  secretNumber: generateSecret(),
  score: 20,
  highscore: 0,
  streak: 0,
  gameOver: false,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function generateSecret() {
  return Math.trunc(Math.random() * 20) + 1;
}

const $ = (selector) => document.querySelector(selector);

function setText(selector, value) {
  $(selector).textContent = value;
}

function displayMessage(msg, type = 'info') {
  const el = $('.message');
  el.textContent = msg;
  el.className = `message message--${type}`;
}

function shakeElement(selector) {
  const el = $(selector);
  el.classList.add('shake');
  el.addEventListener('animationend', () => el.classList.remove('shake'), { once: true });
}

function pulseElement(selector) {
  const el = document.querySelector(selector);
  el.classList.add('pop');
  el.addEventListener('animationend', () => el.classList.remove('pop'), { once: true });
}

// ─── Core Game Logic ──────────────────────────────────────────────────────────

function handleGuess() {
  if (state.gameOver) return;

  const guess = Number($('.guess').value);

  if (!guess || guess < 1 || guess > 20) {
    displayMessage('⚠ Enter a number between 1–20', 'warn');
    shakeElement('.guess');
    return;
  }

  if (guess === state.secretNumber) {
    handleWin();
  } else if (state.score > 1) {
    handleWrongGuess(guess);
  } else {
    handleLoss();
  }
}

function handleWin() {
  state.gameOver = true;
  state.streak++;

  setText('.number', state.secretNumber);
  displayMessage('🎉 Correct! You nailed it!', 'success');
  document.body.classList.add('winner-mode');
  pulseElement('.number');

  if (state.score > state.highscore) {
    state.highscore = state.score;
    setText('.highscore', state.highscore);
    displayMessage('🏆 New High Score!', 'success');
  }

  setText('.streak', state.streak);
}

function handleWrongGuess(guess) {
  state.score--;
  setText('.score', state.score);

  const hint = guess > state.secretNumber ? '📉 Too High!' : '📈 Too Low!';
  displayMessage(hint, 'hint');
  shakeElement('.guess');
}

function handleLoss() {
  state.score = 0;
  state.streak = 0;
  state.gameOver = true;

  setText('.score', 0);
  setText('.streak', 0);
  displayMessage('💀 Game over! Try again.', 'error');
  document.body.classList.add('loser-mode');
}

function resetGame() {
  Object.assign(state, {
    secretNumber: generateSecret(),
    score: 20,
    gameOver: false,
  });

  setText('.score', state.score);
  setText('.number', '?');
  $('.guess').value = '';

  displayMessage('Start guessing…', 'info');
  document.body.classList.remove('winner-mode', 'loser-mode');
}

// ─── Event Listeners ──────────────────────────────────────────────────────────

$('.check').addEventListener('click', handleGuess);

$('.guess').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleGuess();
});

$('.again').addEventListener('click', resetGame);
