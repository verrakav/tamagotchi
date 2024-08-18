//FIXME: had trouble importing
import pet from "./helpers/Pet.js";

//initial setup class
// class Pet {
//   //used to be globals in main.js
//   constructor() {
//     this.hunger = 50;
//     this.energy = 100;
//     this.skill = 3;
//     this.age = 0;
//     this.feedCount = 0;
//     this.currentButtons = null;
//   }

//   //define handlers triggered by buttons (handle team)
//   handleFeed = () => {
//     //expected response to the button
//     this
//       .hunger--; /*FIXME: here and others if moved to innerHTML assignment skips the fitst click */
//     this.hunger < 0 && (this.hunger = 0);
//     indHunger.innerHTML = this.hunger;
//     //side effects
//     this.energy += 2;
//     indEnergy.innerHTML = this.energy;
//   };

//   handlePlay = () => {
//     //expected response to the button
//     this.energy--;
//     this.energy < 0 && (this.energy = 0);
//     indEnergy.innerHTML = this.energy;
//     //side effects
//     this.hunger += 2;
//     indHunger.innerHTML = this.hunger;
//   };

//   handleTrain = () => {
//     //expected response to the button
//     this.skill++;
//     indSkill.innerHTML = this.skill;
//     //side effects
//     this.hunger += 2;
//     indHunger.innerHTML = this.hunger;
//     this.energy -= 2;
//     indEnergy.innerHTML = this.energy;
//   };

//   //changeing indicators with time (interval team)
//   //TODO: make them more random?? refactor into a switch?
//   intervalHunger = () => {
//     setInterval(() => {
//       this.hunger++;
//       indHunger.innerHTML = this.hunger;
//     }, 10000);
//   };

//   intervalEnergy = () => {
//     setInterval(() => {
//       this.energy--;
//       this.energy < 0 && (this.energy = 0);
//       indEnergy.innerHTML = this.energy;
//     }, 10000);
//   };

//   intervalSkill = () => {
//     setInterval(() => {
//       this.skill--;
//       this.skill < 0 && (this.skill = 0);
//       indSkill.innerHTML = this.skill;
//     }, 10000);
//   };

//   intervalAge = () => {
//     setInterval(() => {
//       this.age++;
//       indAge.innerHTML = "your digital friend is " + this.age + " y.o. ❤️";
//     }, 5000);
//   };

//   //helper.js candidate
//   fedTooMuch = () => {
//     this.feedCount++;
//     this.currentButton = "feed";
//     if (this.feedCount % 3 == 0) {
//       indSkill.innerHTML = this.skill--;
//     }
//   };
// }

//instantiated Pet
const barbie = pet;

//select pet screen
const petScreen = document.getElementById("pet-screen");

//select good-dog
const goodDog = document.getElementById("good-dog");
//select btn to get-a-pet
const getPet = document.getElementById("get-a-pet");

//good-dog div disappears onclick
getPet.addEventListener("click", () => {
  console.log("click");
  goodDog.style.opacity = "0";
  petScreen.style.opacity = "1";
});

//select the buttons
const btnFeed = document.getElementById("btn-feed");
const btnPlay = document.getElementById("btn-play");
const btnTrain = document.getElementById("btn-train");
const btnClean = document.getElementById("btn-clean");

//select indicators
let indHunger = document.getElementById("hunger-indicator");
let indEnergy = document.getElementById("energy-indicator");
let indSkill = document.getElementById("skills-indicator");
let indAge = document.getElementById("age-indicator");

//select mess
const oopsTop = document.getElementById("oops-top");
const oopsBottom = document.getElementById("oops-bottom");
const oopsRight = document.getElementById("oops-right");
const oopsLeft = document.getElementById("oops-left");

//interval team called
barbie.intervalAge();
// barbie.intervalEnergy();
// barbie.intervalHunger();

//event listener team
btnFeed.addEventListener("click", e => {
  barbie.handleFeed();
  barbie.fedTooMuch();
  setTimeout(() => createOpps(), randomInterval());
});

//helper.js candidate
const randomInterval = () => {
  return Math.floor(Math.random() * 901) + 100;
};

//mess factory
const createOpps = () => {
  const randomMess = Math.floor(Math.random() * 4) + 1;
  switch (randomMess) {
    case 1:
      oopsTop.style.opacity = "1";
      break;
    case 2:
      oopsBottom.style.opacity = "1";
      break;
    case 3:
      oopsRight.style.opacity = "1";
      break;
    case 4:
      oopsLeft.style.opacity = "1";
      break;
    default:
      throw new Error("Unexpected mess!");
  }
};

//cleaning the mess
const handleClean = () => {
  if (oopsTop.style.opacity == "1") {
    oopsTop.style.opacity = "0";
  } else if (oopsBottom.style.opacity == "1") {
    oopsBottom.style.opacity = "0";
  } else if (oopsRight.style.opacity == "1") {
    oopsRight.style.opacity = "0";
  } else if (oopsLeft.style.opacity == "1") {
    oopsLeft.style.opacity = "0";
  }
};

btnPlay.addEventListener("click", e => barbie.handlePlay());
btnTrain.addEventListener("click", e => barbie.handleTrain());
btnClean.addEventListener("click", e => handleClean());

//NOTE: till later?
//make the start page + logic/elms to choose pets

//TODO:
//think through the logic of indicators
