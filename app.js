const prompt = require('prompt');

const logBoard = (board) => {
  console.log('Current board');
  console.log(board);
};

const startGame = () => {
  const board = [['', '', ''], ['', '', ''], ['', '', '']];
  const currentPlayer = 'X';
  console.log(`Player ${currentPlayer}'s turn`);
  logBoard(board);
};

// prompt.get(['firstName', 'lastName'], function (err, result) {
//   console.log('Thank you.');
//   console.log('first: ', result.firstName);
//   console.log('last: ', result.lastName);
//   return result.firstName;
// });

startGame();