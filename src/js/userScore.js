// --------- VARIABLES -------------------

let player1 = {
  name: "Paris",
  timeScore: 300,
};
let player2 = {
  name: "Salva",
  timeScore: 230,
};
let player3 = {
  name: "Alberto",
  timeScore: 210,
};
let player4 = {
  name: "Kike",
  timeScore: 370,
};
let scoreBoardTemplate = "";

// let username = "Manu";

// ----------- TO FIND THE WINNER ----------

let scores = [];
let winners = [player1, player2, player3, player4];

for (let index = 0; index < winners.length; index++) {
  scores.push(winners[index].timeScore);
}

let scoreNumbers = Math.min(...scores);

// function startTimer() {
//   timeScoreboard = setInterval(function () {
//     timer.textContent = "Time Playing: " + seconds;
//     seconds++;
//   }, 1000);
// }

// startTimer();

// ----------- TO PAINT THE CURRENT PLAYER & RANKING-------------

// showScore();

function showScore() {
  let scoreScreen = document.getElementById("scoreScreen");
  console.log(scoreScreen.children);
  let playerInfo = Object.keys(player1);
  scoreScreen.innerHTML = "";
  // document.getElementById("currentPlayer").innerHTML = username;
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

function cleanScores() {
  for (i = 1; i < scoreScreen.children.length; i++) {
    scoreScreen.removeChild(scoreScreen.children[i]);
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

function scoreBoard() {
  let scoreBoardTemplate = `<template><div id="scoreScreen" class="scoreScreen">
      <h2>User Scores</h2>
      
      </div>
      </template>`;
}

// ------- TO SHOW SCORES -------
function scoreSlide() {
  let showBtn = document.getElementById("showBtn");
  showBtn.style.visibility = "visible";
  showBtn.addEventListener("click", () => {
    scoreScreen.classList.toggle("scoreScreen-active");
    console.log(showBtn.textContent);
    changeIcon(showBtn);
  });
  hideBtn.addEventListener("click", () => {
    scoreScreen.classList.toggle("scoreScreen-active");
  });
  showScore();
}

function changeIcon(showBtn) {
  showBtn.textContent == ">" ? (showBtn.textContent = "<") : ">";
}

function cleanScoreScreen() {
  var ranking = document.getElementsByClassName("ranking");
  let n = ranking.length;
  for (let scr = 0; scr < n; scr++) {
    for (const line of ranking) {
      line.remove();
    }
  }
}
// ------- WHEN YOU WIN --------
// gameWin();
// let seconds = 0;
// let timeScoreboard;

// ------- PA METERLO EN EL ARRAY ------

// let player5 = new Object();
// player5.name = username;
// player5.timeScore = timeScoreBoard;
// winners.push(player5);
