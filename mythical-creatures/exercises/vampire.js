class Vampire{
  constructor(name, otherPet){
    this.name = name;
    this.pet = otherPet || 'bat';
    this.thirsty = true;
  } drink() {
    this.thirsty = false;
  }
}

module.exports = Vampire;