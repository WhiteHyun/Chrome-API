'use strict';
const body = document.getElementsByTagName('body')[0];
const IMG_NUMBER = 9;
// TODO: User can pick INU images or landscape images to button

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `/images/INU/INU (${imgNumber}).jpg`;
  image.classList.add('backgroundImage');
  body.appendChild(image);
}

function generateRandom() {
  const number = Math.ceil(Math.random() * IMG_NUMBER);
  return number;
}

// (() => {
//   const randomNumber = generateRandom();
//   paintImage(randomNumber);
// })();

export function getBackground() {
  const randomNumber = generateRandom();
  paintImage(randomNumber);
}
