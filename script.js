// query selectors
const square = document.querySelector(".square");
const startBtn = document.querySelector(".startBtn");

// Variables
let current_cell = null;
const size = 19;
let clicked_times = 0;
let start_pos = null;
let end_pos = null;

let explored_cells = [];
let neighbours = [];
let shortest_path = [];
let obstacles = [];

// Maybe, I'll work with classes in this one
// You'll be much better of with using rows and coloumns instead of block number

for (let i = 0; i < size * size; i++) {
  const grid_cell = document.createElement("div");
  grid_cell.classList.add("cell");
  grid_cell.setAttribute("index", String(i));
  square.appendChild(grid_cell);
}

// cells consists of all the indexes
const cells = document.querySelectorAll(".cell");
const cell = document.querySelector(".cell");

// Event Listeners

cell.addEventListener("click", cellClicked);
startBtn.addEventListener("click", startPos);
cells.forEach((cell) => cell.addEventListener("click", cellClicked));

// functions

function cellClicked(event) {
  clicked_times++;
  const item = event.target;
  current_cell = item.getAttribute("index");
  if (clicked_times === 1) {
    startPos();
  } else if (clicked_times === 2) {
    endPos();
  } else {
    obsPos();
  }
}

function startPos(event) {
  const startPos = cells[current_cell];
  start_pos = startPos;
  startPos.setAttribute("style", "background-color:green");
}
function endPos(event) {
  const endPos = cells[current_cell];
  end_pos = endPos;
  endPos.setAttribute("style", "background-color:red");
}
function obsPos(event) {
  obstacles.push(current_cell);
  const obsPos = cells[current_cell];
  obsPos.setAttribute("style", "background-color:rgba(54, 54, 54, 0.829)");
}

// Your life will be much easier of you divided this into rows and coloumns instead of what the fuck you're doing
function explore(pos) {
  current_neighbours = [];

  // Upper cell
  if (Math.floor(pos / size != 0)) {
    let upper_cell = pos - size;
    // if the neighbour is in obstacles, we don't need to explore it
    if (obstacles.indexOf(upper_cell) !== null) {
      upper_cell = null;
    }
  } else {
    let upper_cell = null;
  }

  // below cell
  if (Math.floor(pos / size != size - 1)) {
    let lower_cell = pos - size;
    if (obstacles.indexOf(lower_cell) !== null) {
      lower_cell = null;
    }
  } else {
    let lower_cell = null;
  }

  // Left cell

  if (pos % size === 0) {
    let left_cell = pos - 1;
    if (obstacles.indexOf(left_cell) !== null) {
      left_cell = null;
    }
  } else {
    left_cell = null;
  }

  // Right cell
  if ((pos + 1) % size === 0) {
    let right_cell = pos + 1;
    if (obstacles.indexOf(right_cell) !== null) {
      right_cell = null;
    }
  } else {
    left_cell = null;
  }

  // Calculating for diagonal cells;

  // Adding cells to current_neighbours, only if they're not null

  if (upper_cell != null) {
    current_neighbours.push(upper_cell);
  }
  if (lower_cell != null) {
    current_neighbours.push(lower_cell);
  }
  if (right_cell != null) {
    current_neighbours.push(right_cell);
  }
  if (left_cell != null) {
    current_neighbours.push(left_cell);
  }

  calculateMin(current_neighbours);
}

// This function needs to calculate the f_cost and g_cost of a cell
// how would I go about calculating the f_cost and g_cost of a cell

// I would need to use Manhattan distance to approximate the distance from one cell to another
function calculateMin(arr) {}

class Node {
  is_closed() {}
  is_open() {}
  is_barrier() {}
  is_start() {}
  is_open() {}
}
