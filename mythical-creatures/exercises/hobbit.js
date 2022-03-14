class Hobbit{
  constructor(name){
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.hasRing = false;
    if(this.name ==='yoooo'){
      this.hasRing = true;
    }
  } celebrateBirthday(){
    this.age++
    if(this.age == 33){
      this.adult = false;
    } 
    
  }
}

// passes all tests

module.exports = Hobbit;