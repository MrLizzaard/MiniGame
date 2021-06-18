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
}

function gameStart() {
  setTimer();
  setCounter();
  makeTarget();
}

function setTimer() {}

function setCounter() {}

function makeTarget() {
  for (let i = 0; i < 10; i++) {
    let carrot = document.createElement("img");
    let x = Math.floor(Math.random() * mainArea.getBoundingClientRect().width);
    let y = Math.floor(Math.random() * mainArea.getBoundingClientRect().height);
    carrot.setAttribute("src", "img/carrot.png");
    carrot.setAttribute("alt", "carrot");
    carrot.setAttribute("class", "game__carrot");
    carrot.addEventListener("click", () => {
      //여기부터 다시하기 벌레도 랜덤생성 후 이벤트리스너 등록
    });
    mainArea.appendChild(carrot);
    carrot.style.transform = `translate(${x}px , ${y}px)`;
    console.log(x, y);
  }
}
