class Node {
  constructor(position, parent = null) {
    this.position = position;
    this.parent = parent;
  }
}

function isValidMove(position) {
  const x = position[0];
  const y = position[1];
  if (x >= 0 && x < 8&& y >= 0 && y < 8) {
    return true;
  }
  return false;
}

function getValidMoves(position) {
  const x = position[0];
  const y = position[1];
  const moves = [
    [2, 1],
    [2, -1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
  ];
  const validMoves = [];
  for (let move of moves) {
    const newPos = [x + move[0], y + move[1]];
    const isValid = isValidMove(newPos);
    if (isValid) {
      validMoves.push([x + move[0], y + move[1]]);
    }
  }
  return validMoves;
}

function knightsTravails(start, end) {
  const startNode = new Node(start);
  const queue = [startNode];
  while (queue.length && isValidMove(start) && isValidMove(end)) {
    let currentNode = queue.shift();
    const currentPos = currentNode.position;
    if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
      const path = [];
      while (currentNode) {
        path.push(currentNode.position);
        currentNode = currentNode.parent;
      }
      return console.log(`You made it in ${path.length - 1} moves! Here is your path:`, path.slice().reverse());
    }
    const validMoves = getValidMoves(currentPos);
    for (let move of validMoves) {
      const node = new Node(move, currentNode)
      queue.push(node);
    }
  }
  return console.log("no path found")
}

const start = [3,3];
const end = [5,6];
knightsTravails(start, end);
