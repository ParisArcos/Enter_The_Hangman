let $userForm = document.querySelector("#userForm");
var username = document.querySelector("#username");
let errorUsername = document.querySelector(".errorUsername");
document
  .querySelector("#submitFormUsername")
  .addEventListener("click", verifyUsernameSubmit);
username.addEventListener("keydown", verifyUsername);

/*let templateUserForm = `<template id="templateUserForm">
<h1>Choose a username</h1>
<label>Username</label>
<input type="text">
<input type="submit" value="Start">
</template>`;

function addTemplateUserForm() {
    console.log($userForm.content);
    let clon = $userForm.content.cloneNode(true);
    $userForm.append(clon);
};*/

function verifyUsername(e) {
  if (username.value.length < 4 || username.value.length > 20)
    errorUsername.style.display = "block";
  else errorUsername.style.display = "none";
}

function verifyUsernameSubmit(e) {
  e.preventDefault();
  if (username.value.length < 4 || username.value.length > 20)
    errorUsername.style.display = "block";
  else errorUsername.style.display = "none";
}

//addTemplateUserForm();
