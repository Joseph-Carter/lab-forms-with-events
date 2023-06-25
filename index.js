const h1 = document.querySelector("h1");

let input = document.createElement("input");

let body = document.querySelector("body");

let errorMessage = document.createElement("p");
errorMessage.style.color = "red";

h1.textContent = "My To-Dos";
let ul = document.createElement("ul");
let form = document.createElement("form");

form.append(input);
input.type = "text";
input.placeholder = "Type a todo";
input.name = "todo";

body.appendChild(form);
body.appendChild(errorMessage);

let button = document.createElement("button");
button.type = "submit";
button.textContent = "Submit";
form.append(button);

function generateTodo(todo) {
  let li = document.createElement("li");
  li.style.cursor = "pointer";
  li.innerText = todo;
  ul.appendChild(li);
  li.addEventListener("click", (event) => {
    if (li.style.textDecoration == "line-through") {
      li.style.textDecoration = null;
    } else {
      li.style.textDecoration = "line-through";
    }
    if (li.style.color === "green") {
      li.style.color = "black";
    } else {
      li.style.color = "green";
    }
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let todo = event.target.todo.value;
  if (!todo) {
    errorMessage.textContent = "Error. Todo cannot be empty";
  } else {
    errorMessage.textContent = "";
    generateTodo(todo);
  }

  form.reset();
});

body.appendChild(ul);