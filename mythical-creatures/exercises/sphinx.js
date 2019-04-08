class Sphinx{
  constructor(){
    this.name = null;
    this.riddles = [];
  } collectRiddle(riddle){
    this.riddles.push(riddle);
    if(this.riddles.length > 3){
    this.riddles.shift();
    } 
  } attemptAnswer(attempt) {
    riddles.array.forEach(element => {
    
    });
    if (attempt === this.riddles[attempt].answer){
      this.riddles.splice(attempt,1)
    }
  }
}

module.exports = Sphinx;