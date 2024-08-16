//select the buttons
const btnFeed = document.getElementById("btn-feed");
const btnPlay = document.getElementById("btn-play");
const btnTrain = document.getElementById("btn-train");

//select indicators
const indHunger = document.getElementById("hunger-indicator");
const indEnergy = document.getElementById("energy-indicator");
const indSkill = document.getElementById("skills-indicator");
const indAge = document.getElementById("age-indicator");
//hook em up to the indicators
btnFeed.addEventListener("click", e => handleFeed());

btnPlay.addEventListener("click", e => handlePlay());

btnTrain.addEventListener("click", e => handleTrain());
//separate file class Pet()

//NOTE: till later?
//make the start page + logic/elms to choose pets

//NOTE: testing setup
// const sum = (a, b) => {
//   return a + b;
// };

// module.exports = sum;

//TO DO:
//
