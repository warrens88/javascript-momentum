const form = document.querySelector(".js-form"),
      input = form.querySelector("input");

const USER_LS = "currenUser"
      
function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
     
  } else {

  }
}

function init(){
  loadName();
}

init();