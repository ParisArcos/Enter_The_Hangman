// --------- VARIABLES -------------------

let player = {
  name: "",
  timeScore: 0,
};
let player1 = {
  name: "Paris",
  timeScore: 10,
};
let player2 = {
  name: "Salva",
  timeScore: 2,
};
let player3 = {
  name: "Alberto",
  timeScore: 21,
};
let player4 = {
  name: "Kike",
  timeScore: 32,
};

// ----------- TO FIND THE WINNER ----------

let scores = [];
let players = [player1, player2, player3, player4];
for (let index = 0; index < players.length; index++) {
  scores.push(players[index].timeScore);
}

let scoreNumbers = Math.min(...scores);

// ------- PA METERLO EN EL ARRAY ------

let player5 = new Object();
player5.name = username.value;
player5.timeScore = 200;
players.push(player5);
console.log(players);

// ----------- TO PAINT THE CURRENT PLAYER & RANKING-------------

let currentPlayer = document.querySelector("#currentPlayer");
currentPlayer.innerHTML = player5.name;

let winner1 = document.querySelector("#winner1");
winner1.innerHTML = player1.name;
let winner2 = document.querySelector("#winner2");
winner2.innerHTML = player2.name;
let winner3 = document.querySelector("#winner3");
winner3.innerHTML = player3.name;
let winner4 = document.querySelector("#winner4");
winner4.innerHTML = player4.name;

// ------------- TO PAINT THE TIME SCORES ------------

let first = document.getElementById("firstScore");
first.innerHTML = 8 + " seconds.";

let second = document.getElementById("secondScore");
second.innerHTML = 13 + " seconds.";

let third = document.getElementById("thirdScore");
third.innerHTML = 25 + " seconds.";

let fourth = document.getElementById("fourthScore");
fourth.innerHTML = 38 + " seconds.";

let current = document.getElementById("currentScore");
current.innerHTML = "Currently Playing...";

let nextPlayer = username.value;
