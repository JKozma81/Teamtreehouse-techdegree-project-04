/* eslint-disable require-jsdoc */
/* eslint linebreak-style: ["error", "windows"]*/

// perform basic DOM selection, add event handlers,
// and to reset the game when it ends
/*
This file creates a new instance of the Game class,
adds event listeners for the onscreen keyboard
and a function to display the game:
resetDisplay(): this function hides the start screen overlay.
markButton(): this function is called when a player selects a letter.
It disables the button on the onscreen keyboard
and calls the handleInteraction() method of the Game class.
Add an event listener to the "Start Game" button
which calls the resetDisplay() function,
creates a new Game object, and starts the game.
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

document.getElementById('overlay').style.display = 'none';

const phrase1 = new Phrase('practice makes perfect');
const game = new Game(0);
game.settingPhrases('arbeit mach frei');

console.log(game.phrases);

const phraseUl = document.querySelector('#phrase ul');

phrase1.addPhraseToDisplay(phraseUl);

console.log(phrase1);

