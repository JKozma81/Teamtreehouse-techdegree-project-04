/* eslint-disable require-jsdoc */
/* eslint linebreak-style: ["error", "windows"]*/
// create a Phrase class to handle the creation of phrases

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
    this.letters = [...this.phrase];
  }

  addPhraseToDisplay(target) {
    /*  this adds letter placeholders to the display when the game starts.
    Each letter is presented by an empty box, one list item for each letter.
    See the example_phrase_html.txt file for an example
    of what the render HTML for a phrase should look like when the game starts.
    When the player correctly guesses a letter, the empty box is replaced
    with a the matched letter (see the showMatchedLetter() method below.
    Make sure the phrase displayed on the screen doesn't include spaces. */

    this.letters.forEach((element) => {
      const letter = document.createElement('li');
      letter.textContent = element;
      if (element === ' ') {
        letter.className = 'space';
      } else {
        // letter.classList.add('letter');
        letter.className = `letter ${element}`;
      }
      target.appendChild(letter);
    });
  }

  checkLetter() {
    // checks to see if letter selected
    // by player matches a letter in the phrase.
  }

  showMatchedLetter() {
    // reveals the letter(s) on the board that matches player's selection.
  }
}
