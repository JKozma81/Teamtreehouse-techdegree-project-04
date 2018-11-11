/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint linebreak-style: ["error", "windows"]*/
// eslint-disable-next-line no-unused-vars
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      'a bunch of fives',
      'a nest of vipers',
      'act of god',
      'barking up the wrong tree',
      'beyond belief',
      'chip off the old block',
      'cut to the chase',
      'top notch',
      'elvis has left the building',
      'flesh and blood',
      'good man is hard to find',
      'hell or high water',
      'jobs for the boys',
      'knight in shining armour',
      'life begins at forty',
      'make my day',
      'wish you were here',
      'on cloud nine',
      'pie in the sky',
      'word for word'];
    this.phrase = {};
    this.started = false;
  }

  /*
    This method randomly retrieves one of the phrases,
    stored in the phrases array
  */
  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  /*
    This method creates a new Phrase class
    from the randomly chosen phrase
  */
  newPhrase(phrase) {
    return new Phrase(phrase);
  }

  /*
    This method calls the getRandomPhrase() method,
    and adds that phrase to the board
    by calling the Phrase class' addPhraseToDisplay() method.
  */
  startGame(target) {
    const randomPhrase = this.getRandomPhrase();
    this.phrase = this.newPhrase(randomPhrase);
    this.phrase.addPhraseToDisplay(target);
    this.started = true;
  }

  /*
    This method checks to see if the button clicked by the player
    matches a letter in the phrase. If it does not,
    then call the removeLife() method..
    If the selected letter matches,
    call the showMatchedLetter() method on the phrase
    and then call the checkForWin() method.
  */
  handleInteraction(guessedLetter) {
    if (!this.phrase.checkLetter(guessedLetter)) {
      this.phrase.showMatchedLetter(guessedLetter);
      if (this.checkForWin()) {
        this.gameOver('win');
      };
    } else {
      this.missed = this.missed + 1;
      this.removeLife();
    }
  }

  /*
    This method removes a life, removes a heart from the board,
    and, if the player is out of lives, ends the game.
  */
  removeLife() {
    const hearts = document.querySelectorAll('#scoreboard ol li');
    hearts[hearts.length - this.missed].className = 'tries animated bounceOutDown';
    if (this.missed === 5) {
      this.gameOver('lost');
    };
  }

  // This method checks to see if the player has selected all of the letters.
  checkForWin() {
    const letters = this.phrase.letterBoxis.filter((box) => box.classList.contains('letter'));
    const selected = letters.filter((letter) => letter.classList.contains('show'));
    return selected.length === letters.length ? true : false;
  }

  /*
   This method displays a message if the player wins
   or a different message if they lose.
  */
  gameOver(condition) {
    const overlay = document.getElementById('overlay');
    const message = document.getElementById('game-over-message');
    const button = document.getElementById('btn__reset');
    button.textContent = 'Play again!';
    this.started = false;

    switch (condition) {
      case 'win': {
        overlay.classList.value = 'win animated zoomIn';
        message.textContent = 'Congrats! You Win!';
        break;
      };
      case 'lost': {
        overlay.classList.value = 'lose animated zoomIn';
        message.textContent = 'Sorry you lost!';
        break;
      }
    }
  }
}
