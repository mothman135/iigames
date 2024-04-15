let score = 0;
let level = 0;

const button = document.querySelector("#clickSpot");
const scoreText = document.querySelector("#scoreText");

button.onclick = click;

function click() {
  score++;
  scoreText.innerText = score;
}