class Vampire{
  constructor(name, otherPet){
    this.name = name
    this.pet = otherPet || 'bat';
    this.thirsty = true;
    // if (this.thirsty = true) {return true}
  } drink() {
    this.thirsty = false;
  }
}

//all tests passing
module.exports = Vampire;