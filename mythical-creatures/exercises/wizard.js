class Wizard {
  constructor(wizObj, incantation) {
    this.name = wizObj.name;
    if (wizObj.bearded == undefined) {
      this.bearded = true;
    } else {
      this.bearded = wizObj.bearded;
    }
  }incantation(spell){
    var ucSpell = incantation.toUppercase(spell)
    return ucSpell;
  }
}

module.exports = Wizard;