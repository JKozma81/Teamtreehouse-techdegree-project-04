/* eslint-disable require-jsdoc */
/* eslint linebreak-style: ["error", "windows"]*/

// perform basic DOM selection, add event handlers,
// and to reset the game when it ends
/*
This file creates a new instance of the Game class,
adds event listeners for the onscreen keyboard
and a function to display the game:

Add event listeners to each of the keyboard buttons,
so that clicking a button calls the markButton() function.
NOTE: Keyboard functionality

Only the keys of the onscreen keyboard should be clickable.
Clicking the space between and around
the keys should not trigger the click event.
*/

/*
Add keyboard functionality
Let players use the computer keyboard to enter guesses.
You'll need to use the keypress event.
Reset the Game
Add a button to the “success” and “failure” screens that resets the game.
You’ll have to reset the buttons in the keyboard, generate a new random phrase,
and set the number of misses to zero.
Double check that your app properly and completely resets for subsequent games.
Everything should work correctly
and without errors every time a new games tarts.
*/

//
let game;

// Selecting DOM elements for further use
const startOverlay = document.getElementById('overlay');
const startButton = document.querySelector('#overlay #btn__reset');
const phraseContainer = document.querySelector('#phrase ul');
const keys = document.querySelectorAll('.key');

// Adding event listeners

// Adding an event listener to the "Start Game" button
// which calls the resetDisplay() function,
// creates a new Game object, and starts the game.
startButton.addEventListener('click', resetDisplay);

// Hiding the start overlay and calling the beginGame function to start the game
function resetDisplay() {
  startOverlay.className = 'start animated slideOutUp delay-4s';
  beginGame();
}

// This function is called when a player selects a letter.
// It disables the button on the onscreen keyboard
// and calls the handleInteraction() method of the Game class.
function markButton(target) {
  target.setAttribute('disabled', 'true');
  target.className = 'chosen';
  game.handleInteraction();
}

// Function for starting the game
const beginGame = () => {
  game = new Game(0);
  game.startGame(phraseContainer);
  keys.forEach((key) => {
    key.addEventListener('click', (e) => eventHandler(e));
  });
  document.addEventListener('keypress', (e) => eventHandler(e));
  console.log(game);
  return game;
};

// Event handler function for the click and keypress event
function eventHandler(e) {
  if (e.target.tagName === 'BUTTON') {
    const letter = e.target.textContent;
    game.player.guesses.push(letter);
    markButton(e.target);
  } else {
    const keycode = e.key;
    const keyboardKey = [...keys];
    const keyToDisable = keyboardKey.filter((key) => key.textContent === keycode);
    game.player.guesses.push(keycode);
    markButton(...keyToDisable);
  }
};
