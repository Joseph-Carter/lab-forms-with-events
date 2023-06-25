const h1 = document.querySelector("h1")

let ul = document.createElement("ul")

let form = document.createElement("from")

let input = document.createElement("input")

let body = document.querySelector("body")

h1.textContent = "My To-Dos"
form.append(input)
input.type = "text"
input.placeholder = "Type a todo"

body.appendChild(form)