const GRID_ROWS = 16;
const GRID_COLS = 16;
const gridContainer = document.querySelector("#grid-container");

for (let row = 0; row < GRID_ROWS; row++) {
  const gridRow = document.createElement("div");
  gridRow.classList.add("grid-row");

  for (let col = 0; col < GRID_COLS; col++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    gridRow.appendChild(gridCell);
  }

  gridContainer.appendChild(gridRow);
}

gridContainer.addEventListener("mouseover", (e) => {
  const target = e.target;
  if (target.classList.contains("grid-cell") && !target.classList.contains("filled")) {
    target.classList.add("filled");
  }
});