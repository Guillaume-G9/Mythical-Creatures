class Spell {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
  execute(target){
    for(var i = 0; i < target.length; i++)
    return `Success! The ${target} is levitating.`

  }
}

module.exports = Spell;