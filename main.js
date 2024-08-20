//TODO:
//think through the logic of indicators
import {
  btnFeed,
  btnPlay,
  btnTrain,
  btnClean,
  btnAnotherPet,
  indAge,
  indHunger,
  indEnergy,
  indSkill,
  oopsTop,
  oopsBottom,
  oopsLeft,
  oopsRight,
  goodDog,
  petScreen,
  getPet
} from "./helpers/selectors.js";
import {randomizePet, randomInterval} from "./helpers/helperFunc.js";
//initial setup class
import barbie from "./helpers/Pet.js";

getPet.addEventListener("click", e => {
  goodDog.style.opacity = "0";
  petScreen.style.opacity = "1";
  petScreen.style.zIndex = "1";
  randomizePet();
});

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

//getting another pet
btnAnotherPet.addEventListener("click", e => {
  //TODO: refactor
  //cleanup if there are any oppsies
  oopsTop.style.opacity = "0";
  oopsBottom.style.opacity = "0";
  oopsRight.style.opacity = "0";
  oopsLeft.style.opacity = "0";
  //random new pet
  randomizePet();
  //reset the old indicators
  barbie.resetPet();
  //resetting the indicators
  indHunger.innerHTML = barbie.hunger;
  indEnergy.innerHTML = barbie.energy;
  indSkill.innerHTML = barbie.skill;
  indAge.innerHTML = "your digital friend is " + 0 + " y.o. ❤️";
});

btnPlay.addEventListener("click", e => barbie.handlePlay());
btnTrain.addEventListener("click", e => barbie.handleTrain());
btnClean.addEventListener("click", e => handleClean());
