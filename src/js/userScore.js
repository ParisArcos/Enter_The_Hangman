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
  timeScore: 1,
};

let username;

// ----------- TO FIND THE WINNER ----------

let scores = [];
let winners = [player1, player2, player3, player4];
for (let index = 0; index < winners.length; index++) {
  scores.push(winners[index].timeScore);
}

let scoreNumbers = Math.min(...scores);

let seconds = 1;
let timeScoreboard;
let timer = document.getElementById("timer");

// ------- PA METERLO EN EL ARRAY ------

let player5 = new Object();
player5.name = username;
player5.timeScore = seconds;
winners.push(player5);

function startTimer() {
  timeScoreboard = setInterval(function () {
    timer.textContent = "Time Playing: " + seconds;
    seconds++;
  }, 1000);
}

startTimer();

// ----------- TO PAINT THE CURRENT PLAYER & RANKING-------------

showScore();

function showScore() {
  let scoreScreen = document.getElementById("scoreScreen");
  let playerInfo = Object.keys(player);

  winners.sort(GetSortOrder("timeScore"));

  for (let i = 0; i < 5; i++) {
    for (let index = 0; index < playerInfo.length; index++) {
      let detail = playerInfo[index];
      let score = document.createElement(index % 2 == 0 ? "h3" : "h4"); //* IF CORTO!!!!
      score.innerHTML = winners[i][detail];
      score.setAttribute("class", "ranking");
      scoreScreen.appendChild(score);
    }
  }
}

// ------- DISPLAY PLAYERS IN ORDER BY SCORE -----------
//* THIS FUNCTION COMPARES PLAYERS BY PROPERTY (LINE 51)

function GetSortOrder(prop) {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    }
    return 0;
  };
}

// clearInterval(timeScoreboard);
