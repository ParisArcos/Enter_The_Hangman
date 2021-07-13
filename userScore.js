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

let username = "Manu";

// ----------- TO FIND THE WINNER ----------

let scores = [];
let winners = [player1, player2, player3, player4];
for (let index = 0; index < winners.length; index++) {
  scores.push(winners[index].timeScore);
}

let scoreNumbers = Math.min(...scores);

// ------- PA METERLO EN EL ARRAY ------

let player5 = new Object();
player5.name = username;
player5.timeScore = 0;
winners.push(player5);

// ----------- TO PAINT THE CURRENT PLAYER & RANKING-------------

winners.sort(GetSortOrder("timeScore"));
showScore();

function showScore() {
  let scoreScreen = document.getElementById("scoreScreen");
  let playerInfo = Object.keys(player);

  for (let i = 0; i < winners.length; i++) {
    for (let index = 0; index < playerInfo.length; index++) {
      let detail = playerInfo[index];
      // console.log(winners[i][detail]);
      let score = document.createElement("div");
      score.innerHTML = winners[i][detail];
      scoreScreen.appendChild(score);
    }
  }
}

// ------- DISPLAY PLAYERS IN ORDER BY SCORE -----------

function GetSortOrder(prop) {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      // THIS FUNCTION COMPARES PLAYERS BY PROPERTY LINE 45
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    }
    return 0;
  };
}
