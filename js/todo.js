const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");
const toDoBtn = toDoForm.querySelector("button");

let toDoArr = [];

// make single TODO
function makeSingleToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.classList.add("todo-button");
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function submitToDo(event) {
  event.preventDefault();

  // it uses Date id
  const toDoObj = {
    id: new Date().getTime(),
    text: toDoInput.value,
  };
  toDoArr.push(toDoObj);

  // store TODO list to web storage
  localStorage.setItem("toDoArr", JSON.stringify(toDoArr));

  // add TODO list
  makeSingleToDo(toDoObj);

  // clear input
  toDoInput.value = "";
}

// add EventListener
toDoForm.addEventListener("submit", submitToDo);

// get TODO list from web storage
function getToDo() {
  const tempArr = localStorage.getItem("toDoArr");
  if (tempArr !== null) {
    toDoArr = JSON.parse(tempArr);
  }

  // make TODO list
  toDoArr.forEach((element) => {
    makeSingleToDo(element);
  });
}

// execute getToDo
getToDo();

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDoArr = toDoArr.filter((toDo) => toDo.id !== parseInt(li.id));
  // store TODO list to web storage
  localStorage.setItem("toDoArr", JSON.stringify(toDoArr));
}
