/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint linebreak-style: ["error", "windows"]*/

let game;

// Selecting DOM elements for further use
const startOverlay = document.getElementById('overlay');
const startButton = document.querySelector('#overlay #btn__reset');
const phraseContainer = document.querySelector('#phrase ul');
const keys = document.querySelectorAll('.key');

// Adding an event listener to the "Start Game" button
// which calls the resetDisplay() function,
// creates a new Game object, and starts the game.
startButton.addEventListener('click', () => {
  resetGame();
  game = new Game();
  game.startGame(phraseContainer);
  resetDisplay();
  return game;
});

// Hiding the start overlay
function resetDisplay() {
  startOverlay.classList.value = 'start animated slideOutUp';
}

// This function is called when a player selects a letter.
// It disables the button on the onscreen keyboard
// and calls the handleInteraction() method of the Game class.
function markButton(target, key) {
  target.setAttribute('disabled', 'true');
  target.classList.value += ' chosen';
  game.handleInteraction(key);
}

// Adding event listeners for click and keypress events
keys.forEach((key) => {
  key.addEventListener('click', (event) => {
    if (game.started) {
      eventHandler(event.type, event.target);
    };
  }, false);
});
document.addEventListener('keypress', (event) => {
  if (game.started) {
    eventHandler(event.type, event);
  };
}, false);

// Event handler function for the click and keypress event
function eventHandler(eventType, targetOrObject) {
  switch (eventType) {
    case 'click': {
      if (targetOrObject.classList.contains('key')) {
        const letter = targetOrObject.textContent;
        markButton(targetOrObject, letter);
      }
      break;
    }

    case 'keypress': {
      const keycode = targetOrObject.key;
      const keyboardKey = [...keys];
      const keyToDisable = keyboardKey.filter((key) => key.textContent === keycode);
      markButton(...keyToDisable, keycode);
      break;
    }
  }
};

// Function to reset the game
function resetGame() {
  const letterBoxis = document.querySelectorAll('#phrase ul li');
  const hearts = document.querySelectorAll('#scoreboard ol li');

  letterBoxis.forEach((box) => phraseContainer.removeChild(box));
  hearts.forEach((heart) => heart.className= 'tries');

  startButton.textContent = '';

  keys.forEach((key) => {
    key.removeAttribute('disabled');
    key.classList.remove('chosen');
  });

  game = undefined;
}
