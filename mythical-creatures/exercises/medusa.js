class Medusa{
  constructor(name) {
    this.name = name;
    this.statues = [];
  } stare(victim) {
    this.statues.push(victim);
    victim.stoned = false;
    if(this.statues.length > 3) {
      this.statues[0].stoned = false;
      this.statues.shift();
    }
  }
}

// all tests passing

module.exports = Medusa;




























