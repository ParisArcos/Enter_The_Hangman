let lifes = 4; //Lifes you have

let words = ["White", "Red", "Black", "Purple", "Grey", "Yellow", "Blue"]; //Words to play
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

function storeLetters(letters) {
  let letterContainer = document.getElementById("letterContainer");
  for (const char of letters) {
    let underlined = document.createElement("div");
    underlined.setAttribute("class", "underlined");
    letterContainer.appendChild(underlined);
    let charContainer = document.createElement("div");
    //charContainer.setAttribute("hidden", "");
    charContainer.setAttribute("class", "hiddenChar");
    charContainer.innerHTML = char;
    underlined.appendChild(charContainer);
  }
}
storeLetters(letters);

let keyboard = document.getElementsByClassName("keyboardLetter");
for (const key of keyboard) {
  key.addEventListener("click", keyboardClick);
}

function keyboardClick(event) {
  console.log(key);
}
