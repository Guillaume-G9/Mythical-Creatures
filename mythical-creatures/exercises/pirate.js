class Pirate{
  constructor(name, job){
    this.name = name;
    this.job = job || 'trololo';
    this.cursed = 10;
    this.karmaHits = 0;
    this.booty = 0;
  }commitHeinousAct(){
    
    if(this.karmaHits >= 3){
      this.cursed = false;
    }
  }robShip(){
    this.booty = 100;
    return 'YAARRRR!';
  }
}

// all tests passed

module.exports = Pirate;