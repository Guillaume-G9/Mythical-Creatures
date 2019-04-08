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
    this.riddles.forEach(i => {
      if (attempted === this.riddles.answer){
      this.riddles.splice(i,1)
    };
    })
  }
  response(){
    return `That wasn't that hard, I bet you don't get the next one`;
  }
  rage(answer){
    return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS ${answer}`;
  }
}

module.exports = Sphinx;