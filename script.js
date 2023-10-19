const GRID_SIZE = 16;
const gridContainer = document.querySelector("#grid-container");
const newGridBtn = document.querySelector("#new-grid");

function setupApp() {
  gridContainer.addEventListener("mouseover", (e) => {
    const target = e.target;
    if (target.classList.contains("grid-cell") && !target.classList.contains("filled")) {
      target.classList.add("filled");
    }
  });

  newGridBtn.addEventListener("click", () => {
    let gridSize;

    do {
      gridSize = +prompt("How many squares per side would you like? (eg. 64)", 64);

    } while (gridSize < 2 || gridSize > 100 || typeof gridSize !== "number");

    clearGrid();
    createGrid(gridSize, gridSize);
  });

  createGrid(GRID_SIZE, GRID_SIZE);
}

function clearGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function createGrid(rows, cols) {
  for (let row = 0; row < rows; row++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");

    for (let col = 0; col < cols; col++) {
      const gridCell = document.createElement("div");
      gridCell.classList.add("grid-cell");
      gridRow.appendChild(gridCell);
    }

    gridContainer.appendChild(gridRow);
  }
}

setupApp();