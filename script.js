import { boardCreate, Knight } from "./gameboard";

function knightMoves(start, end) {
  const board = boardCreate();
  const knight = new Knight(start[0], start[1]);
  legalMoves(start[0], start[1]);
}

function legalMoves(col, row) {
  const possibleMoves = [
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [2, -1],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
  ];

  const validMoves = [];

  possibleMoves.forEach((move) => {
    const newCol = col + move[0];
    const newRow = row + move[1];
    if (
      row + move[1] >= 0 &&
      row + move[1] <= 7 &&
      col + move[0] >= 0 &&
      col + move[0] <= 7
    ) {
      validMoves.push([newCol, newRow]);
    }
  });
  return validMoves;
}
console.log(legalMoves(1, 3));
