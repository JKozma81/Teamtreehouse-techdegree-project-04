/* eslint-disable require-jsdoc */
/* eslint linebreak-style: ["error", "windows"]*/

class Player {
  constructor(name) {
    this.name = name;
    this.lives = 0;
    this.guesses = [];
    this.misses = 0;
  }
}
