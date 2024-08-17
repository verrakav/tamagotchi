//select the buttons
const btnFeed = document.getElementById("btn-feed");
const btnPlay = document.getElementById("btn-play");
const btnTrain = document.getElementById("btn-train");

//select indicators
let indHunger = document.getElementById("hunger-indicator");
let indEnergy = document.getElementById("energy-indicator");
let indSkill = document.getElementById("skills-indicator");
let indAge = document.getElementById("age-indicator");

//initial setup-related

class Pet {
  //used to be globals in main.js
  constructor() {
    this.hunger = 50;
    this.energy = 100;
    this.skill = 0;
    this.age = 0;
    this.feedCount = 0;
    this.currentButtons = null;
  }

  //define handlers triggered by buttons (handle team) | refactor into switch?
  handleFeed = () => {
    //expected response to the button
    this
      .hunger--; /*ASK: here and others if moved to innerHTML assignment skips the fitst click */
    this.hunger < 0 && (this.hunger = 0);
    indHunger.innerHTML = this.hunger;
    //side effects
    this.energy += 2;
    indEnergy.innerHTML = this.energy;
  };

  handlePlay = () => {
    //expected response to the button
    this.energy--;
    this.energy < 0 && (this.energy = 0);
    indEnergy.innerHTML = this.energy;
    //side effects
    this.hunger += 2;
    indHunger.innerHTML = this.hunger;
  };

  handleTrain = () => {
    //expected response to the button
    this.skill++;
    indSkill.innerHTML = this.skill;
    //side effects
    this.hunger += 2;
    indHunger.innerHTML = this.hunger;
    this.energy -= 2;
    indEnergy.innerHTML = this.energy;
  };

  //changeing indicators with time (interval team)
  //TODO: make them more random && refactor into a switch?
  intervalHunger = () => {
    setInterval(() => {
      this.hunger++;
      indHunger.innerHTML = this.hunger;
    }, 1000);
  };

  intervalEnergy = () => {
    setInterval(() => {
      this.energy--;
      this.energy < 0 && (this.energy = 0);
      indEnergy.innerHTML = this.energy;
    }, 1000);
  };

  intervalSkill = () => {
    setInterval(() => {
      this.skill--;
      this.skill < 0 && (this.skill = 0);
      indSkill.innerHTML = this.skill;
    }, 1000);
  };

  intervalAge = () => {
    setInterval(() => {
      this.age++;
      indAge.innerHTML = this.age + " y.o.";
    }, 5000);
  };

  //helper.js candidate
  fedTooMuch = () => {
    this.feedCount++;
    this.currentButton = "feed";
    if (this.feedCount % 3 == 0) {
      indSkill.innerHTML = this.skill--;
    }
  };
}

//instantiated Pet
const barbie = new Pet();
console.log(barbie);

//interval team called
barbie.intervalAge();
// barbie.intervalEnergy();
// barbie.intervalHunger();

//event listener team
btnFeed.addEventListener("click", e => {
  barbie.handleFeed();
  barbie.fedTooMuch();
});

btnPlay.addEventListener("click", e => barbie.handlePlay());

btnTrain.addEventListener("click", e => barbie.handleTrain());

//NOTE: till later?
//make the start page + logic/elms to choose pets

//NOTE: testing setup
// const sum = (a, b) => {
//   return a + b;
// };

// module.exports = sum;

//TODO:
//think through the logic of scoring
