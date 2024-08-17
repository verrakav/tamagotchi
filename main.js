//select the buttons
const btnFeed = document.getElementById("btn-feed");
const btnPlay = document.getElementById("btn-play");
const btnTrain = document.getElementById("btn-train");

//select indicators
let indHunger = document.getElementById("hunger-indicator");
let indEnergy = document.getElementById("energy-indicator");
let indSkill = document.getElementById("skills-indicator");
let indAge = document.getElementById("age-indicator");

//initial setup
//TODO: global let vars need to move - object?
let hunger = 50;
let energy = 100;
let skill = 0;
let age = 0;
let fedCount = 0;
let currentButton = null;

//helper.js candidates
const fedTooMuch = () => {
  fedCount++;
  currentButton = "feed";
  if (fedCount % 3 == 0) {
    indSkill.innerHTML = skill--;
  }
};

//define handlers triggered by buttons (handle team)
//refactor into switch?
const handleFeed = () => {
  //expected response to the button
  hunger--;
  hunger < 0 && (hunger = 0);
  indHunger.innerHTML = hunger;
  //side effects
  energy += 2;
  indEnergy.innerHTML = energy;
};

const handlePlay = () => {
  //expected response to the button
  energy--;
  energy < 0 && (energy = 0);
  indEnergy.innerHTML = energy;
  //side effects
  hunger += 2;
  indHunger.innerHTML = hunger;
};

const handleTrain = () => {
  //expected response to the button
  skill++;
  indSkill.innerHTML = skill;
  //side effects
  hunger += 2;
  indHunger.innerHTML = hunger;
  energy -= 2;
  indEnergy.innerHTML = energy;
};

//hook em up to the indicators
btnFeed.addEventListener("click", e => {
  handleFeed();
  fedTooMuch();
});

btnPlay.addEventListener("click", e => handlePlay());

btnTrain.addEventListener("click", e => handleTrain());

//change indicators with time (interval team)
//TODO: make them more random && refactor into a switch?
const intervalHunger = () => {
  setInterval(() => {
    hunger++;
    indHunger.innerHTML = hunger;
  }, 1000);
};
// intervalHunger();

const intervalEnergy = () => {
  setInterval(() => {
    energy--;
    energy < 0 && (energy = 0);
    indEnergy.innerHTML = energy;
  }, 1000);
};
// intervalEnergy();

const intervalSkill = () => {
  setInterval(() => {
    skill--;
    skill < 0 && (skill = 0);
    indSkill.innerHTML = skill;
  }, 1000);
};

const intervalAge = () => {
  setInterval(() => {
    age++;
    indAge.innerHTML = age + " y.o.";
    console.log(age);
  }, 5000);
};
// intervalAge();

//NOTE: till later?
//make the start page + logic/elms to choose pets

//NOTE: testing setup
// const sum = (a, b) => {
//   return a + b;
// };

// module.exports = sum;

//TO DO:
//think through the logic of scoring
