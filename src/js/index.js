/* playBtn = document.getElementById("playButton");
playBtn.addEventListener("click", beginGame);
contentArea = document.getElementById("contentArea");
var imageContainer = document.getElementById("mainImg");
var image = document.getElementById("img"); */
function play() {
  let indexTemplate = `<template id="index">
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
  <div id="contentArea" class="contentArea"></div>

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
  playBtn.addEventListener("click", beginGame);
  playBtn.addEventListener("keydown", beginGame);
}

play();
/* playBtn = document.getElementById("playButton");
playBtn.addEventListener("click", beginGame); */
$contentUserForm = document.getElementById("contentArea");
var imageContainer = document.getElementById("mainImg");
var image = document.getElementById("img");
var speakers = [
  {
    name: "elaine",
    color: "#d11d96",
    top: "5%",
    left: "5%",
    textShadow: "1px 1px #9c0c88",
  },
  {
    name: "guybrush",
    color: "#fff",
    top: "80%",
    left: "5%",
    textShadow: "1px 2px grey",
  },
  {
    name: "lechuck",
    color: "#2ec617",
    top: "80vw",
    left: "5vh",
    textShadow: "1px 2px lawngreen",
  },
];

function beginGame() {
  setTimeout(playIntro, 1000, image.classList.add("dark"));
}

function playIntro() {
  const introConver = [
    "Por fin, mi querido Guybrush, se deja caer!!", //2
    "... Podria ayudarme, señorita?", //7
    "no me recuerdas verdad?", //12
    "Porsupuesto que si, esto ... no tendras una cuerda verdad?", //17
    "A si? soy rubia o morena?", //22
    "eso es una prgunta muy personal...", //27
  ];

  playBtn.style.display = "none";
  contentArea.style.display = "flex";
  waiting();
  conversation(introConver);
  addTemplateUserForm();
}

function waiting() {
  image.src = "src/img/waiting.gif";
  image.style.width = "100%";
  image.classList.remove("dark");
  if (imageContainer.children[1]) {
    imageContainer.removeChild(imageContainer.children[1]);
  }
}

function guybrushSpeaking(msj) {
  changeImg("src/img/speaking.gif");
  speak(msj, "guybrush");
  setTimeout(function () {
    waiting();
  }, 3000);
}

function elaineSpeaking(msj) {
  changeImg("src/img/waiting.gif");
  speak(msj, "elaine");
  setTimeout(function () {
    waiting();
  }, 3000);
}

function lechuckSpeaking(msj) {
  changeImg("src/img/fail.gif");
  speak(msj, "lechuck");
  setTimeout(function () {
    waiting();
  }, 3000);
}

function conversation(conversation) {
  for (let i = 0; i < conversation.length; i++) {
    setTimeout(function () {
      i % 2 == 0
        ? elaineSpeaking(conversation[i])
        : guybrushSpeaking(conversation[i]);
    }, 2000 + 4650 * i);
  }
}

function changeImg(url) {
  image.src = url;
  image.style.width = "100%";
  image.classList.remove("dark");
}

function speak(msj, speakerName) {
  for (const speaker of speakers) {
    if (speaker.name == speakerName) {
      var text = document.createElement("Div");
      text.classList.add("speaker");
      text.innerHTML = msj;
      text.style.color = speaker.color;
      text.style.textShadow = speaker.textShadow;
      text.style.top = speaker.top;
      text.style.left = speaker.left;
      imageContainer.appendChild(text);
    }
  }
}

document.addEventListener("keydown", keyboardEntri);

function keyboardEntri(event) {
  var btn = event.key;

  if (btn == "Enter" && playBtn.style.display != "none") {
    beginGame();
  } else if (contentArea.innerHTML.includes("wordContainer")) {
    keyboardEntry(event);
  }
}

function keyboardEntry(event) {
  let buttonKey = event.key;
  let hiddenChar = document.querySelectorAll(".hiddenChar");
  let correct;
  var keyboard = document.getElementsByClassName("keyboardLetter");
  for (const char of keyboard) {
    if (char.innerHTML == buttonKey.toUpperCase()) {
      char.style.display = "none";
      char.remove();
    }
  }

  for (let i = 0; i < hiddenChar.length; i++) {
    if (hiddenChar[i].innerHTML == buttonKey.toUpperCase()) {
      hiddenChar[i].removeAttribute("hidden", "");
      //event.target.setAttribute("hidden", "");
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

/* function playIntro() {
  image.src = "src/img/play.gif";
  image.style.width = "100%";
  image.classList.remove("dark");
  playBtn.style.display = "none";
  setTimeout(playGame, 23000);
}

function playGame() {
  setTimeout(
    function () {
      image.src = "src/img/waiting.gif";
      image.style.width = "100%";
      image.classList.remove("dark");
    },
    1000,
    image.classList.add("dark")
  );
  var text = document.createElement("Div");
  text.classList.add("speaker");
  text.innerHTML = "Whatever";
  imageContainer.appendChild(text);
} */
