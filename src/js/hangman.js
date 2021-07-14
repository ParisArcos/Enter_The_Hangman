let lifes = 4; //Lifes you have

let words = ["WHITE", "RED", "BLACK", "PURPLE", "GREY", "YELLOW", "BLUE"]; //Words to play
let randomWord = words[Math.floor(Math.random() * words.length)]; //Get a random word
let letters = []; //To store the letters
console.log(letters);

//EnterTheHangman
function startHangman() {
  let hangmanTemplate = `<div id="hangman">
  <h1>Guess the word</h1>
  <p>Muñequito</p>
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
</div>`;

  contentArea.innerHTML = "";
  contentArea.insertAdjacentHTML("beforeend", hangmanTemplate);

  let insertHangman = document.getElementById("hangman").content;
  let copyHangman = document.importNode(insertHangman, true);

  contentArea.appendChild(copyHangman);
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
storeLetters(letters);
//Put event listener in each letter

let keyboard = document.getElementsByClassName("keyboardLetter");

function keyEvent() {
  for (const key of keyboard) {
    key.addEventListener("click", keyboardClick);
  }
}
keyEvent();

function keyboardClick(event) {
  let buttonKey = event.target.innerHTML;
  let hiddenChar = document.querySelectorAll(".hiddenChar");
  for (let i = 0; i < hiddenChar.length; i++) {
    if (hiddenChar[i].innerHTML == buttonKey) {
      hiddenChar[i].removeAttribute("hidden", "");
      event.target.setAttribute("hidden", "");
    } else if (
      hiddenChar.length == document.getElementById("letterContainer")
    ) {
      console.log("You Won");
    }
  }
}
