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

// ------- PA METERLO EN EL ARRAY ------

// let player5 = new Object();
// player5.name = "Alfredo";
// player5.timeScore = 200;
// players.push(player5);
// console.log(players);

let scores = [];
let players = [player1, player2, player3, player4];
for (let index = 0; index < players.length; index++) {
  scores.push(players[index].timeScore);
}

let scoreNumbers = Math.min(...scores);

console.log(scoreNumbers);

player.timeScore;
