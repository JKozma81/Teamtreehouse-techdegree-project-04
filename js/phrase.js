/* eslint-disable require-jsdoc */
/* eslint linebreak-style: ["error", "windows"]*/

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
    this.letters = [...this.phrase];
  }

  // This method adds letter placeholders to the display when the game starts.
  addPhraseToDisplay(target) {
    this.letters.forEach((element) => {
      const letter = document.createElement('li');
      letter.textContent = element;
      if (element === ' ') {
        letter.className = 'hide space';
      } else {
        letter.className = `hide letter ${element}`;
      }
      target.appendChild(letter);
    });
    this.letterLis = document.querySelectorAll('#phrase ul li.letter');
    this.letterBoxis = document.querySelectorAll('#phrase ul li');

    this.letterBoxis.forEach((box) => {
      setTimeout(() => {
        if (box.classList.contains('letter')) {
          box.classList.remove('hide');
          box.className += ' animated zoomIn delay-3s';
        }
      }, 2000);
    });
    // animated zoomIn delay-2s
  }

  /*
    This method checks to see if letter selected
    by player matches a letter in the phrase.
  */
  checkLetter(target) {
    return this.letters.indexOf(target) === -1 ? true : false;
  }

  /*
    This method reveals the letter(s) on the board
    that matches player's selection.
  */
  showMatchedLetter(target) {
    const matchedLetters = [...this.letterLis];
    const lettersToShow = matchedLetters.filter((letter) => {
      const list = letter.classList;
      return list.contains(target);
    });
    lettersToShow.forEach((letter) => {
      letter.classList.remove('hide');
      letter.classList.add('show');
    });
  }
}
