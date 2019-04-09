class Spell {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
  execute(targets){
    for(var i = 0; i < targets.length; i++){
      return `Success! The ${targets[i]} is levitating.`
    }
  }

}

module.exports = Spell;