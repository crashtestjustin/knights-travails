export function boardCreate() {
  const rows = 8;
  const cols = 8;

  const board = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
  return board;
}

export class Knight {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }

  getPosition() {
    return [this.row, this.col];
  }
}

// const knight = new Knight(0, 0);
