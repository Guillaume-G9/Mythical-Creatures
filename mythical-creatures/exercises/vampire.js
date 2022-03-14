class Vampire{
  constructor(name, otherPet){
    this.name = name;
    this.pet = otherPet || 'bat bat';
    this.thirsty = false;
  } drink() {
    
  }
}

//all tests passing

module.exports = Vampire;