let lifes = 4; //Lifes you have

let words = ["White", "Red", "Black", "Purple", "Grey", "Yellow", "Blue"]; //Words to play
let randomWord = words[Math.floor(Math.random() * words.length)]; //Get a random word
let letters = []; //To store the letters
//console.log(letters);

//Divides the random word
function wordDivide(randomWord) {
  var wordArray = randomWord.split("");
  for (var i = 0; i < wordArray.length; i++) {
    letters.push(wordArray[i]);
    //console.log(wordArray[i]);
  }
}
wordDivide(randomWord);
