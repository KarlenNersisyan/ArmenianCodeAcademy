class Shi_ri_tori {
  constructor() {
    this.words = [];
    this.game_over = false;
  }

  play(anotherWord) {
    if (this.game_over === false) {
      const word = anotherWord.trim().toLowerCase();

      if (this.words.length === 0) {
        this.words.push(word);
        return this.words;
      }

      const lastWord = this.words[this.words.length - 1];
      const lastWorld_LastMember = lastWord[lastWord.length - 1];
      const firstMember = word[0];

      for (const elem of this.words) {
        if (elem === word) {
          this.game_over = true;
          return `Game Over!,"${word}" has already been said.`;
        }
      }

      if (firstMember !== lastWorld_LastMember) {
        this.game_over = true;
        return `Game Over!,"${word}" does not start with an "${lastWorld_LastMember}".`;
      }

      this.words.push(word);
      return this.words;
    } else {
      return `Game is Over! ,Please, reset the game!`;
    }
  }

  restart() {
    this.words = [];
    this.game_over = false;
    return "game restarted";
  }
}

const myPun = new Shi_ri_tori();

console.log(myPun.play("apple")); // [ 'apple' ]
console.log(myPun.play("ear")); // [ 'apple', 'ear' ]
console.log(myPun.play("rhino")); // [ 'apple', 'ear', 'rhino' ]
console.log(myPun.play("corn")); // "game over" -> Corn does not start with an "o".

console.log(myPun.words); // [ 'apple', 'ear', 'rhino' ]
console.log(myPun.restart()); // "game restarted"
console.log(myPun.words); // [] -> Words array should be set back to empty.

console.log(myPun.play("hostess")); // [ 'hostess' ]
console.log(myPun.play("stash")); // [ 'hostess', 'stash' ]
console.log(myPun.play("hostess")); // invalid! - "hostess" has already been said
