/* eslint-disable max-len */
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
    this.player = new Player();
  }

  /*
    This getter method randomly retrieves one of the phrases,
    stored in the phrases array
  */
  get getRandomPhrase() {
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
    const phraseToDisplay = this.getRandomPhrase;
    this.phrase = this.newPhrase(phraseToDisplay);
    this.phrase.addPhraseToDisplay(target);
  }

  /*
    This method checks to see if the button clicked by the player
    matches a letter in the phrase. If it does not,
    then call the removeLife() method..
    If the selected letter matches,
    call the showMatchedLetter() method on the phrase
    and then call the checkForWin() method.
  */
  handleInteraction() {
    const lastGuess = this.player.guesses[this.player.guesses.length -1];
    if (!this.phrase.checkLetter(lastGuess)) {
      this.phrase.showMatchedLetter(lastGuess);
      this.checkForWin();
    } else {
      this.removeLife();
    }
  }

  /*
    this method removes a life, removes a heart from the board,
    and, if the player is out of lives, ends the game.
  */
  removeLife() {
    const hearts = document.querySelectorAll('#scoreboard ol li');
    hearts[this.player.lives -1].className= 'tries animated bounceOut delay-2s';
    this.player.lives -= 1;
    if (this.player.lives <= 0) {
      this.gameOver('lost');
    };
  }

  checkForWin() {
    const letters = [...this.phrase.letterLis];
    const selected = letters.filter((letter) => letter.classList.contains('show'));
    if (selected.length === letters.length) {
      this.gameOver('win');
    }
  }

  gameOver(condition) {
  // this method displays a message if the player wins
  // or a different message if they lose.
    const overlay = document.getElementById('overlay');
    const message = document.getElementById('game-over-message');
    const button = document.getElementById('btn__reset');
    button.textContent = 'Play again!';

    console.log(this.phrase.letterLis);

    this.phrase.letterLis.forEach((element) => {
      element.classList.remove('show');
      element.className += ' hide';
    });

    switch (condition) {
      case 'win': {
        overlay.classList.value = 'win animated zoomIn delay-4s';
        message.textContent = 'Congrats! You Win!';
        console.log('You win');
        break;
      };
      case 'lost': {
        overlay.classList.value = 'lose animated zoomIn';
        message.textContent = 'Sorry you lost!';
        console.log('You lost');
        break;
      }
    }
  }
}
