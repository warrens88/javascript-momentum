const form = document.querySelector(".js-form"),
  input = document.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

//local storage 정보를 컴퓨터에 저장하는 방법
const USER_LS = "currentUser",
  SHOWING_ON = "showing";

function handleSubmit(event) {
  event.preventDefault();
  const currenValue = input.value;
}

function askForName() {
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit");
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // she is not
  } else {
    // she is
    paintGreeting(currentUser);
  }
}
function init() {}

init();
