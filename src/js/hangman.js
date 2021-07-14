let lifes = 4; //Lifes you have

let words = ["WHITE", "RED", "BLACK", "PURPLE", "GREY", "YELLOW", "BLUE"]; //Words to play
let randomWord = words[Math.floor(Math.random() * words.length)]; //Get a random word
let letters = []; //To store the letters
console.log(letters);

//EnterTheHangman
function startHangman() {
  let hangmanTemplate = `<template id=hangman-template><div id="hangman">
  <h1>Guess the word</h1>
  <div id="wordContainer">
    <div id="letterContainer"></div>
  </div>
  <div id="keyboardTop">
  <div class="keyboardLetterContainer">
    <div class="keyboardLetter">Q</div>
  </div>
  <div class="keyboardLetterContainer">
    <div class="keyboardLetter">W</div>
  </div>
  <div class="keyboardLetterContainer">
    <div class="keyboardLetter">E</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">R</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">T</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">Y</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">U</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">I</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">O</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">P</div>
  </div>
  </div>
  <div id="keyboardMid">
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">A</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">S</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">D</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">F</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">G</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">H</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">J</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">K</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">L</div>
  </div>
  </div>
  <div id="keyboardBottom">
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">Z</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">X</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">C</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">V</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">B</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">N</div>
  </div>
    <div class="keyboardLetterContainer">
    <div class="keyboardLetter">M</div>
  </div>
    <div class="keyboardLetterContainer">
  </div>
</div>
<div id="timerScreen" class="scoreScreen">
      <h2>User Scores</h2>
      <h3 id="currentPlayer"></h3>
      <h4 id="timer" class="timer"></h4>
    </div></template>`;
  let contentHangmanArea = document.getElementById("contentArea");
  contentHangmanArea.innerHTML = "";
  contentHangmanArea.insertAdjacentHTML("beforeend", hangmanTemplate);

  let insertHangman = document.getElementById("hangman-template").content;
  let copyHangman = document.importNode(insertHangman, true);

  contentHangmanArea.appendChild(copyHangman);
  storeLetters(letters);
  keyEvent();
}

//Divides the random word
function wordDivide(randomWord) {
  var wordArray = randomWord.split("");
  for (var i = 0; i < wordArray.length; i++) {
    letters.push(wordArray[i]);
    console.log(wordArray[i]);
  }
}
wordDivide(randomWord);

//Creates hidden divs to store the letters
function storeLetters(letters) {
  let letterContainer = document.getElementById("letterContainer");
  for (const char of letters) {
    let underlined = document.createElement("div");
    underlined.setAttribute("class", "underlined");
    letterContainer.appendChild(underlined);
    var charContainer = document.createElement("div");
    charContainer.setAttribute("hidden", "");
    charContainer.setAttribute("class", "hiddenChar");
    charContainer.innerHTML = char;
    underlined.appendChild(charContainer);
  }
}
//Put event listener in each letter

let keyboard = document.getElementsByClassName("keyboardLetter");

function keyEvent() {
  for (const key of keyboard) {
    key.addEventListener("click", keyboardClick);
  }
}

function keyboardClick(event) {
  let buttonKey = event.target.innerHTML;
  let hiddenChar = document.querySelectorAll(".hiddenChar");
  let correct = false;
  for (let i = 0; i < hiddenChar.length; i++) {
    if (hiddenChar[i].innerHTML == buttonKey) {
      hiddenChar[i].removeAttribute("hidden", "");
      event.target.setAttribute("hidden", "");
      correct = true;
    } else {
      //correct = false;
    }
  }
  correct != true ? lessLife() : "";
}

function lessLife() {
  --lifes;
  let failMsg = ["WHITE", "RED", "BLACK", "PURPLE", "GREY", "YELLOW", "BLUE"];
  let randomFailMsg = failMsg[Math.floor(Math.random() * failMsg.length)];
  guybrushSpeaking(randomFailMsg);
  console.log(lifes);
  lifes == 0 ? gameOver() : "";
}

function gameOver() {
  console.log("GAME OVER");
}
