// consts
const playBtn = document.querySelector(".game__playBtn");
const stopBtn = document.querySelector(".game__stopBtn");
const resetBtn = document.querySelector(".game__resetBtn");
const timer = document.querySelector(".game__timer");
const counter = document.querySelector(".game__counter");
const mainArea = document.querySelector(".game__mainarea");
// run

// basic EventListener

playBtn.addEventListener("click", () => {
  playBtn.classList.remove("visible");
  stopBtn.classList.add("visible");
  gameStart();
});
stopBtn.addEventListener("click", () => {
  stopBtn.classList.remove("visible");
  playBtn.classList.add("visible");
  init();
});
resetBtn.addEventListener("click", () => {
  init();
});

// functions

function init() {
  timer.innerHTML = `00:00`;
  counter.innerHTML = `0`;
  mainArea.innerHTML = ``;
  //초기화 추가
}

function gameStart() {
  setTimer(); //추가
  setCounter(); //추가
  makeTarget();
}

function setTimer() {}

function setCounter() {}

function makeTarget() {
  // 당근 추가
  for (let i = 0; i < 10; i++) {
    let carrot = document.createElement("img");
    let x = Math.floor(Math.random() * mainArea.getBoundingClientRect().width);
    let y = Math.floor(Math.random() * mainArea.getBoundingClientRect().height);
    carrot.setAttribute("src", "img/carrot.png");
    carrot.setAttribute("alt", "carrot");
    carrot.setAttribute("class", "game__carrot");
    carrot.addEventListener("click", (e) => {
      plusCounter(); //추가
      e.target.remove();
    });
    mainArea.appendChild(carrot);
    carrot.style.transform = `translate(${x}px , ${y}px)`;
  }
  // 벌레 추가
  for (let i = 0; i < 10; i++) {
    let bug = document.createElement("img");
    let x = Math.floor(Math.random() * mainArea.getBoundingClientRect().width);
    let y = Math.floor(Math.random() * mainArea.getBoundingClientRect().height);
    bug.setAttribute("src", "img/bug.png");
    bug.setAttribute("alt", "bug");
    bug.setAttribute("class", "game__bug");
    bug.addEventListener("click", () => {
      gameOver(); //추가
    });
    mainArea.appendChild(bug);
    bug.style.transform = `translate(${x}px , ${y}px)`;
  }
}
