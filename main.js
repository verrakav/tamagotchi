//select the buttons
const btnFeed = document.getElementById("btn-feed");
const btnPlay = document.getElementById("btn-play");
const btnTrain = document.getElementById("btn-train");

//select indicators
let indHunger = document.getElementById("hunger-indicator");
let indEnergy = document.getElementById("energy-indicator");
let indSkill = document.getElementById("skills-indicator");
let indAge = document.getElementById("age-indicator");

//initial setup NOTE: should be in my pet object?
let hunger = 2;
let energy = 100;
let skill = 0;
let age = 0;

//define handlers
const handleFeed = () => {
  hunger--;
  hunger < 0 && (hunger = 0);
  indHunger.innerHTML = hunger;
};

const handlePlay = () => {
  energy--;
  energy < 0 && (energy = 0);
  indEnergy.innerHTML = energy;
};

const handleTrain = () => {
  skill++;
  indSkill.innerHTML = skill;
};

//hook em up to the indicators
btnFeed.addEventListener("click", e => handleFeed());

btnPlay.addEventListener("click", e => handlePlay());

btnTrain.addEventListener("click", e => handleTrain());

//handle age with an interval
const countAge = () => {
  setInterval(() => {
    age++;
    indAge.innerHTML = age + " y.o.";
    console.log(age);
  }, 5000);
};
countAge();

//separate file class Pet()?

//NOTE: till later?
//make the start page + logic/elms to choose pets

//NOTE: testing setup
// const sum = (a, b) => {
//   return a + b;
// };

// module.exports = sum;

//TO DO:
//think through the logic of scoring
