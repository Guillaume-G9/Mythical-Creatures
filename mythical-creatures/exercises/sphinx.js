class Sphinx{
  constructor(){
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
  } 
  collectRiddle(riddle){
    this.riddles.push(riddle);
    if(this.riddles.length > 3){
    this.riddles.shift();
    } 
  } 
  attemptAnswer(attempted) {
      for (let i = 0; i < this.riddles.length; i++) {
        if(attempted === this.riddles[i].answer){
          this.riddles.splice(i,1)
        }
        this.response()
      }
  }
  response(){
    return `That wasn't that hard, I bet you don't get the next one`;
  }
  rage(answer){
    return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS ${answer}`;
  }
}

module.exports = Sphinx;