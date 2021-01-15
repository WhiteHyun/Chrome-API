"use strict";

const todoForm = document.getElementsByClassName("todo")[0];
const todoInput = todoForm.getElementsByTagName("input")[0];
const todoList = document.getElementsByClassName("todoList")[0];

const TODOS_LS = "todos";

function paintTodo(text) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  const deleteImage = document.createElement("img");
  deleteImage.src = "/images/deletebutton.png";
  deleteImage.alt = "Success";
  const span = document.createElement("span");
  span.innerText = text;
  deleteButton.appendChild(deleteImage);
  li.appendChild(span);
  li.appendChild(deleteButton);
  todoList.appendChild(li);
}

function loadTodos() {
  const todos = localStorage.getItem(TODOS_LS);
  if (todos !== null) {
    //   Show Todos..
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
