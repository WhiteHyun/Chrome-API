"use strict";

const todoForm = document.getElementsByClassName("todo")[0];
const todoInput = todoForm.getElementsByTagName("input")[0];
const todoList = document.getElementsByClassName("todoList")[0];

const TODOS_LS = "todos";
const todoArray = [];

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(todoArray));
}

function paintTodo(text) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  const deleteImage = document.createElement("img");
  const span = document.createElement("span");
  const newID = todoArray.length + 1;

  deleteImage.src = "/images/deletebutton.png";
  deleteImage.alt = "Success";
  span.innerText = text;
  deleteButton.appendChild(deleteImage);
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

(() => {
  loadTodos();
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";
  });
})();
