class Werewolf{
  constructor(name, location){
    this.name = name
    this.location = location
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  change(){
    if(this.human === true) {
      this.human = false;
      this.wolf = true
      this.hungry = true
    } else {
      this.human = true;
      this.wolf = false
      this.hungry = false
    }
  }
  eat(victim){
    if(this.human === false){
      victim.alive = false;
      this.change();
    } else{
      return;
    }
  }
}

// all tests passed

module.exports = Werewolf;














































// class Werewolf{
//   constructor(name, location){
//     this.name = name;
//     this.location = location;
//     this.human = true;
//     this.wolf = false;
//     this.hungry = false;
//     } change() {
//     this.human = !this.human;
//     this.wolf = !this.wolf;
//     this.hungry = !this.hungry;
//   }
// } if(Werewolf.hungry == true){
//   eat(victim)
//   }



// module.exports = Werewolf;














































