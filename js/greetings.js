const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const userNameBox = document.querySelector(".username-box");
const userName = document.querySelector(".username");
const todo = document.querySelector(".todo-form");

const HIDDEN_CLASS_NAME = "hidden";

function login(event) {
  // prevent Default process when Form is submitted
  event.preventDefault();

  // store name to local storage
  const name = loginInput.value;
  localStorage.setItem("name", name);

  // hide login form
  loginForm.classList.add(HIDDEN_CLASS_NAME);

  // set Name
  checkLogin();
}

loginButton.addEventListener("click", login);

// if there is name in local storage
function checkLogin() {
  const currentUserName = localStorage.getItem("name");
  if (currentUserName !== null) {
    userName.innerText = `Hello ${currentUserName}!`;
    userNameBox.classList.remove(HIDDEN_CLASS_NAME);
    userName.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.classList.add(HIDDEN_CLASS_NAME);

    // unhide todo
    todo.classList.remove(HIDDEN_CLASS_NAME);
  }
}

checkLogin();
