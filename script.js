import { boardCreate, Knight } from "./gameboard.js";

function knightMoves(start, end) {
  const board = boardCreate();
  const knight = new Knight(start[0], start[1]);

  const queue = [[knight.getPosition(), [knight.getPosition()]]];
  const visited = { [knight.getPosition()]: true };

  while (queue.length > 0) {
    const [currPos, currPath] = queue.shift();

    const legalMoves = getLegalMoves(currPos[0], currPos[1]);

    for (const move of legalMoves) {
      if (arraysMatch(move, end)) {
        const finalPath = [...currPath, move];
        return `The shortest path was ${
          finalPath.length - 1
        } moves!\nHere are are moves:\n${finalPath
          .map((move) => move.join(","))
          .join("\n")}`;
      }

      if (!visited[move]) {
        queue.push([move, [...currPath, move]]);
        visited[move] = true;
      }
    }
  }
  return null;
}

function getLegalMoves(col, row) {
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

function arraysMatch(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((elem, index) => elem === arr2[index])
  );
}

console.log(knightMoves([0, 0], [5, 7]));
