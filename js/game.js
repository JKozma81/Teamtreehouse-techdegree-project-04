/* eslint-disable require-jsdoc */
/* eslint linebreak-style: ["error", "windows"]*/
// create a Game class with methods for starting and ending the game,
// handling interactions, getting random phrases,
// checking for a win, and removing a life counter.
/*
The class should include a constructor with the following properties:
missed: used to track the number of missed guesses by the player.
phrases: an array of phrases to use with the game
(you'll use a method to create new instances of the Phrase class).
A phrase should only include letters and spaces — no numbers,
punctuation or other special characters.
*/

class Game {
  constructor(missed) {
    this.missed = missed;
    this.phrases = ['practice makes perfect', '', '', ''];
  }

  settingPhrases(phrase) {
    this.phrases.push(new Phrase(phrase));
  }

  getRandomPhrase() {
  // this method randomly retrieves one of the phrases
  // stored in the phrases array
  }

  handleInteraction() {
  // this method checks to see if the button clicked by the player
  // matches a letter in the phrase.
  // If it does not, then call the removeLife() method..
  // If the selected letter matches,
  // call the showMatchedLetter() method on the phrase
  // and then call the checkForWin() method.
  }

  removeLife() {
  // this method removes a life,
  // removes a heart from the board,
  // and, if the player is out of lives, ends the game.
  }

  checkForWin() {
  // this method checks to see if the player has selected all of the letters.
  }

  gameOver() {
  // this method displays a message if the player wins
  // or a different message if they lose.
  }

  startGame() {
  // calls the getRandomPhrase() method,
  // and adds that phrase to the board
  // by calling the Phrase class' addPhraseToDisplay() method.
  }
}
