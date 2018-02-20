const prompt = require('prompt');
prompt.start();

const logBoard = (board) => {
  console.log('Current board');
  console.log(`[${board[0][0]}, ${board[0][1]}, ${board[0][2]}]`);
  console.log(`[${board[1][0]}, ${board[1][1]}, ${board[1][2]}]`);
  console.log(`[${board[2][0]}, ${board[2][1]}, ${board[2][2]}]`);
};

const pickSquare = (player) => {
  let square;
  const spot = {
    properties: {
      square: {
        description: `Player ${player}, please choose a square`
      } 
    }
  };

  prompt.get(spot, function (err, result) {
    square = result.square.toString();
    console.log(square);
  });

  return square;
};


const startGame = (player, foundWinner) => {
  const board = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
  // while no current winner keep playing
  const currentPlayer = player === 'X' ? 'O' : 'X';
  console.log(`Player ${currentPlayer}'s turn`);
  logBoard(board);
  const square = pickSquare(currentPlayer);
  console.log('this is the square: ', square);
};


startGame('O', false);