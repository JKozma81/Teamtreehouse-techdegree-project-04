/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint linebreak-style: ["error", "windows"]*/
// eslint-disable-next-line no-unused-vars
class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
    this.letters = [...this.phrase];
    this.letterBoxis = [];
  }

  // This method adds letter placeholders to the display when the game starts.
  addPhraseToDisplay(target) {
    this.letters.forEach((element) => {
      const letterLi = document.createElement('li');
      letterLi.textContent = element;
      letterLi.style.zIndex = -1;
      if (element === ' ') {
        letterLi.className = 'hide space';
      } else {
        letterLi.className = `hide letter ${element}`;
      }
      this.letterBoxis.push(letterLi);
      target.appendChild(letterLi);
    });

    this.letterBoxis.forEach((box) => {
      if (box.classList.contains('letter')) {
        box.classList.remove('hide');
        box.className += ' animated zoomIn';
      }
    });
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
    const lettersToShow = this.letterBoxis.filter((letter) => letter.classList.contains(target));

    lettersToShow.forEach((letter) => {
      letter.classList.remove('hide');
      letter.classList.add('show');
    });
  }
}
