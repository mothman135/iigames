let score = 0;
let coins = 0;

const button = document.querySelector("#clickSpot");
const scoreText = document.querySelector("#scoreText");
const coinsText = document.querySelector("#coinsText");

button.onclick = click;

function click() {
  score++;
  coins += 5;
  coinsText.innerText = coins;
  scoreText.innerText = score;
}