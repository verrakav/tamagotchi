class Pet {
  //used to be globals in main.js
  constructor() {
    this.hunger = 50;
    this.energy = 100;
    this.skill = 3;
    this.age = 0;
    this.feedCount = 0;
    this.currentButtons = null;
  }

  //select indicators
  indHunger = document.getElementById("hunger-indicator");
  indEnergy = document.getElementById("energy-indicator");
  indSkill = document.getElementById("skills-indicator");
  indAge = document.getElementById("age-indicator");
  //define handlers triggered by buttons (handle team)
  handleFeed = () => {
    //expected response to the button
    this
      .hunger--; /*FIXME: here and others if moved to innerHTML assignment skips the fitst click */
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
  //TODO: make them more random?? refactor into a switch?
  intervalHunger = () => {
    setInterval(() => {
      this.hunger++;
      indHunger.innerHTML = this.hunger;
    }, 10000);
  };

  intervalEnergy = () => {
    setInterval(() => {
      this.energy--;
      this.energy < 0 && (this.energy = 0);
      indEnergy.innerHTML = this.energy;
    }, 10000);
  };

  intervalSkill = () => {
    setInterval(() => {
      this.skill--;
      this.skill < 0 && (this.skill = 0);
      indSkill.innerHTML = this.skill;
    }, 10000);
  };

  intervalAge = () => {
    setInterval(() => {
      this.age++;
      indAge.innerHTML = "your digital friend is " + this.age + " y.o. ❤️";
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

  resetPet = () => {
    this.hunger = 50;
    this.energy = 100;
    this.skill = 3;
    this.age = 0;
    this.feedCount = 0;
    this.currentButtons = null;
  };
}

const pet = new Pet();
console.log(pet);
