# knights-travails

- Code to get shortest path from start position of the knights to the target location using BFS search algorithm
- This is how it works:
  - It takes start and end location and then first it checks whether those locations are valid within the board boundaries
  - Then it call another function "getValidMoves" which takes the starting location and return the valid moves for that location
  - Then it append those valid moves as child nodes to the currrent node and apply Breadth First Search algorithm to find the end location
  - Once it reaches the end location then it backtracks the nodes to the starting node to get the shortest path
  - Then finally it returns the path
