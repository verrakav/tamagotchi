import {petName, petImage} from "./selectors.js";

export const randomizePet = () => {
  //creates a new pet name
  const petNames = [
    "Barbie",
    "Bob",
    "Hewie",
    "Johnny",
    "Kelly",
    "Molly",
    "Ollie",
    "Stephen",
    "Tracy"
  ];
  const randomIdx = Math.floor(Math.random() * petNames.length);

  const newName = petNames[randomIdx];
  console.log(newName, randomIdx);

  //assign the new name
  petName.innerHTML = petNames[randomIdx];

  //changes pet image
  petImage.innerHTML = petImage.setAttribute(
    "src",
    `./src/pixel_art_pets/${newName}.png`
  );
};

//helper.js candidate
const randomInterval = () => {
  return Math.floor(Math.random() * 901) + 100;
};

export {petImage, petName, randomInterval};
