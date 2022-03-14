class Wizard {
  constructor(wizObj) {
    this.name = wizObj.name;
    this.isRested = 'false';
    this.numSpells = 10;
    if (wizObj.bearded == undefined) {
      this.bearded = false;
    } else {
      this.bearded = wizObj.bearded;
    }
  }incantation(spells){
    return spells.toUpperCase();
  }cast(){
    this.numSpells++
    if(this.numSpells >= 3){
      this.isRested = false;
    
    }else{
    
    } 
  }
}

// all tests passed

module.exports = Wizard;