'use strict';

const todoForm = document.getElementsByClassName('todo')[0];
const todoInput = todoForm.getElementsByTagName('input')[0];
const todoList = document.getElementsByClassName('todoList')[0];

const TODOS_LS = 'todos';
let todoArray = [];

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(todoArray));
}

function paintTodo(text) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');
  const deleteImage = document.createElement('img');
  const span = document.createElement('span');
  const newID = todoArray.length + 1;

  // img
  deleteImage.src = '/images/deletebutton.png';
  deleteImage.alt = 'Success';

  // button
  deleteButton.appendChild(deleteImage);
  deleteButton.addEventListener('click', (event) => {
    const button = event.target.parentNode;
    // console.dir(button);
    const li = button.parentNode;
    const cleanTodos = todoArray.filter((todo) => {
      return todo.id !== parseInt(li.id);
    });
    todoList.removeChild(li);
    todoArray = cleanTodos;
    saveTodos();
  });

  // span
  span.innerText = text;

  // li
  li.id = newID;
  li.appendChild(span);
  li.appendChild(deleteButton);

  todoList.appendChild(li);

  // --Local Storage--
  const todoObj = {
    text: text,
    id: newID,
  };
  todoArray.push(todoObj);
  saveTodos();
}

function loadTodos() {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if (loadedTodos !== null) {
    const parsedTodos = JSON.parse(loadedTodos);
    parsedTodos.forEach((todo) => {
      paintTodo(todo.text);
    });
  }
}

export function initTodos() {
  loadTodos();
  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = '';
  });
}
