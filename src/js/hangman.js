let lifes = 4; //Lifes you have

let words = ["WHITE", "RED", "BLACK", "PURPLE", "GREY", "YELLOW", "BLUE"]; //Words to play
let randomWord = words[Math.floor(Math.random() * words.length)]; //Get a random word
let letters = []; //To store the letters
console.log(letters);

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
