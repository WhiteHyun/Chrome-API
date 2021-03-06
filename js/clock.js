'use strict';
const clockContainer = document.querySelector('.clock');
const clockTitle = clockContainer.querySelector('.title');

/**
 * Get the current time and show it in HTML.
 */
export function getTime() {
  const date = new Date();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let seconds = date.getSeconds();
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  clockTitle.innerHTML = `${hours}:${minutes}:${seconds}`;
}

// Run getTime function every second to update clocks.
// (() => {
//   setInterval(getTime, 1000);
// })();
