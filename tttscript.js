let currentPlayer = 'X'; // Player X always starts
let gameBoard = ['', '', '', '', '', '', '', '', '']; // 3x3 game board
let gameActive = true;

function handlePlayerTurn(clickedCellIndex) {
  if (gameBoard[clickedCellIndex] !== '' || !gameActive) {
      return;
  }
  gameBoard[clickedCellIndex] = currentPlayer;
  if(currentPlayer == "X") currentPlayer = "O";
  else currentPlayer = "X";
}

function cellClicked(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(clickedCell.id.replace('cell-', '')) - 1;
  if (gameBoard[clickedCellIndex] !== '' || !gameActive) {
      return;
  }
  handlePlayerTurn(clickedCellIndex);
  updateUI();
}

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
  cell.addEventListener('click', cellClicked, false);
});

function updateUI() {
  for (let i = 0; i < cells.length; i++) {
      cells[i].innerText = gameBoard[i];
  }
}