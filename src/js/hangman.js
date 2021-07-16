let lifes = 4; //Lifes you have

let words = [
  "MONKEY",
  "ISLAND",
  "PIRATE",
  "HANGMAN",
  "TREASURE",
  "KING",
  "SKELETON",
  "BOAT",
  "SHIP",
  "ASSEMBLER",
  "BEACH",
  "RATS",
  "RUDDER",
  "FLAG",
]; //Words to play
let randomWord = words[Math.floor(Math.random() * words.length)]; //Get a random word
let letters = []; //To store the letters
let accertNumber = 0;
console.log(letters); //!Only for debug. Remove it at finish

//EnterTheHangman
function startHangman() {
  let hangmanTemplate = `<template id=hangman-template><div id="hangman">
  <h2>Guess the word</h2>
  <div id="wordContainer">
    <div id="letterContainer" class="letterContainer"></div>
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
  <div class="current">
    <p id="currentPlayer"></p>
    <span id="timer" class="timer"></span>
  </div>
    </template>`;
  let contentHangmanArea = document.getElementById("contentArea"); //Get content area
  contentHangmanArea.innerHTML = ""; //Erase content area's content
  contentHangmanArea.insertAdjacentHTML("beforeend", hangmanTemplate); //Insert template in content area

  let insertHangman = document.getElementById("hangman-template").content;
  let copyHangman = document.importNode(insertHangman, true);

  contentHangmanArea.appendChild(copyHangman);
  storeLetters(letters);
  keyEvent();
}

function loseTheHangman() {
  let loseTemplate = `<template id=hangman-template>
  <!--Contenedor principal-->
  <div class="flex">
    <div id="mainScreen" class="mainScreen">
      <!--Contenedor izquierdo-->
      <div id="mainImg" class="mainImg">
        <img id="img" class="img" src="src/img/fail.gif" />
      </div>
    </div>
    </div>
    <h2 class="gameResult">GAME OVER!</h2>
  <button type="button" id="playAgain" class="playButton">Play again</button>
  <div id="contentArea" class="contentArea"></div>

  <button class="showScores" id="showBtn">Score</button>

  <div id="scoreScreen" class="scoreScreen">
    <h2>User Scores</h2>
  </div>
</template>`;
  let contentLoseHangmanArea = document.getElementsByTagName("main")[0]; //Get content area
  contentLoseHangmanArea.innerHTML = ""; //Erase content area's content
  contentLoseHangmanArea.insertAdjacentHTML("beforeend", loseTemplate); //Insert template in content area

  let insertLoseHangman = document.getElementById("hangman-template").content;
  let copyLoseHangman = document.importNode(insertLoseHangman, true);

  contentLoseHangmanArea.appendChild(copyLoseHangman);

  let image = document.getElementById("img");
  image.style.width = "100%";

  scoreSlide();
}

function winTheHangman() {
  let winTemplate = `<template id=hangman-template>
  <!--Contenedor principal-->
  <div class="flex">
    <div id="mainScreen" class="mainScreen">
      <!--Contenedor izquierdo-->
      <div id="mainImg" class="mainImg">
        <img id="img" class="img" src="src/img/win.gif" />
      </div>
    </div>
    </div>
    //TODO Insert Scores
    <h2 class="gameResult">YOU WIN!</h2>
  <button type="button" id="playAgain" class="playButton">Play again</button>
  <div id="contentArea" class="contentArea"></div>

  <button class="showScores" id="showBtn">Score</button>

  <div id="scoreScreen" class="scoreScreen">
    <h2>User Scores</h2>
  </div>
</template>`;
  let contentWinHangmanArea = document.getElementsByTagName("main")[0]; //Get content area
  contentWinHangmanArea.innerHTML = ""; //Erase content area's content
  contentWinHangmanArea.insertAdjacentHTML("beforeend", winTemplate); //Insert template in content area

  let insertWinHangman = document.getElementById("hangman-template").content;
  let copyWinHangman = document.importNode(insertWinHangman, true);

  contentWinHangmanArea.appendChild(copyWinHangman);

  let image = document.getElementById("img");
  image.style.width = "100%";

  scoreSlide();
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

let keyboard = document.getElementsByClassName("keyboardLetter"); //Get each element from the keyboard

//Put event listener in each letter
function keyEvent() {
  for (const key of keyboard) {
    key.addEventListener("click", keyboardClick);
  }
}

function keyboardClick(event) {
  let buttonKey = event.target.innerHTML;
  let hiddenChar = document.querySelectorAll(".hiddenChar");
  let correct = false;
  event.target.style.display = "none";
  event.target.remove();
  for (let i = 0; i < hiddenChar.length; i++) {
    if (hiddenChar[i].innerHTML == buttonKey) {
      hiddenChar[i].removeAttribute("hidden", "");

      accertNumber++;
      console.log(accertNumber); //!Only for debug. Remove it at finish
      correct = true;
    }

    if (hiddenChar.length == accertNumber) {
      gameWin();
    }
  }
  correct != true ? lessLife() : "";
}

function lessLife() {
  --lifes;
  let failMsg = [
    "I'm going to fall!",
    "Wrong answer!",
    "NO!",
    "Try again.",
    "You can do better.",
    "OMG, I'm a deadman!",
    "It's going to break!",
  ];
  let randomFailMsg = failMsg[Math.floor(Math.random() * failMsg.length)];
  guybrushSpeaking(randomFailMsg);
  console.log(lifes); //!Only for debug. Remove it at finish
  lifes == 0 ? gameOver() : "";
}

function gameOver() {
  console.log("GAME OVER");
  loseTheHangman();

  againBtn = document.getElementById("playAgain");
  againBtn.addEventListener("click", playAgain);
}
let player5 = new Object();

function gameWin() {
  console.log("YOU WON");
  player5.name = username.value;
  player5.timeScore = seconds;
  winners.push(player5);
  clearInterval(timeScoreboard);
  cleanScoreScreen();
  //showScore();
  winTheHangman();

  againBtn = document.getElementById("playAgain");
  againBtn.addEventListener("click", playAgain);
}

function playAgain() {
  location.reload();
  /* let indexTemplate = `<template id=index>
  <!--Contenedor principal-->
  <div class="flex">
    <div id="mainScreen" class="mainScreen">
      <!--Contenedor izquierdo-->
      <div id="mainImg" class="mainImg">
        <img id="img" class="img" src="src/img/main.gif" />
      </div>
    </div>
  </div>
  <button type="button" id="playButton" class="playButton">Play!</button>
  <div id="contentArea" class="contentArea"</div>

  <button class="showScores" id="showBtn">Score</button>

  <div id="scoreScreen" class="scoreScreen">
    <h2>User Scores</h2>
  </div>
  
</template>`;
  let contentIndexArea = document.getElementsByTagName("main")[0]; //Get content area
  contentIndexArea.innerHTML = ""; //Erase content area's content
  contentIndexArea.insertAdjacentHTML("beforeend", indexTemplate); //Insert template in content area

  let insertIndex = document.getElementById("index").content;
  let copyIndex = document.importNode(insertIndex, true);

  contentIndexArea.appendChild(copyIndex);

  playBtn = document.getElementById("playButton");
  playBtn.addEventListener("click", beginGame); */
}
