let $contentUserForm = document.querySelector("#contentArea");
var username = "";
let errorUsername = "";

var templateUserForm = `<template id="user-form-template">
<div id="userForm">
    <form action="">
        <h3 class="title-username">Choose a username</h3>
        <input class="display-block input-username" type="text" id="username" />
        <div class="errorUsername">Username requires 4 to 20 characters</div>
        <input type="submit" value="Start" id="submitFormUsername" class="display-block button-username playButton" />
    </form>
</div>
</template>`;

function addTemplateUserForm() {
  $contentUserForm.innerHTML = "";
  $contentUserForm.insertAdjacentHTML("beforeend", templateUserForm);
  let contentTemplate = document.querySelector("#user-form-template").content;
  let copyTemplate = document.importNode(contentTemplate, true);

  $contentUserForm.appendChild(copyTemplate);

  document
    .querySelector("#submitFormUsername")
    .addEventListener("click", verifyUsernameSubmit);
  username = document.querySelector("#username");
  username.addEventListener("keydown", verifyUsername);
  username.focus();
  errorUsername = document.querySelector(".errorUsername");

  $contentUserForm.insertAdjacentHTML("beforeend", templateUserForm);
}

function verifyUsername(e) {
  if (username.value.length <= 4 || username.value.length >= 20)
    errorUsername.style.display = "block";
  else errorUsername.style.display = "none";
}

function verifyUsernameSubmit(e) {
  e.preventDefault();
  if (username.value.length <= 4 || username.value.length >= 20) {
    errorUsername.style.display = "block";
  } else {
    errorUsername.style.display = "none";
    startHangman();
    startTimer();
  }
}

let seconds = 0;
let timeScoreboard;
function startTimer() {
  timeScoreboard = setInterval(function () {
    let timer = document.getElementById("timer");
    document.getElementById("currentPlayer").innerHTML = username.value;
    timer.textContent = "Time Playing: " + seconds + "s";
    seconds++;
  }, 1000);
}

/*function addZerosTime(m, s) {
  let minutes = 0,
    seconds = 0;

  if (m < 10) minutes = "0" + m;
  else minutes = m;
  if (s < 10) seconds = "0" + s;
  else seconds = s;
  if (m == 1) unidades = "minutes";
  else units = "seconds";
  return `${minutes}:${seconds} ${units}`;
}*/

//clearInterval(timeScoreboard);
//addTemplateUserForm();
