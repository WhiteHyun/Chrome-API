'use strict';
const form = document.getElementsByClassName('form')[0];
const input = form.getElementsByTagName('input')[0];
const greeting = document.getElementsByClassName('greetings')[0];
const USER_LS = 'currentUser'; //LS: Local Storage
const SHOWING_CN = 'showing'; // CN: Class Name

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
  });
}

export function loadName() {
  const currentuser = localStorage.getItem(USER_LS);
  if (currentuser === null) {
    askForName();
  } else {
    paintGreeting(currentuser);
  }
}
