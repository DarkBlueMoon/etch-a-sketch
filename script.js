const container = document.querySelector("#grid-container");
const button = document.querySelector("#reset");

// Thanks to Nidhin Joseph: https://stackoverflow.com/a/57550587
function makeGrid(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    container.appendChild(cell);
  }

  addHoverEvents();
}

makeGrid(16, 16);

function addHoverEvents() {
  const cells = document.querySelectorAll(".grid-item");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.classList.add("black");
    });
  });
}

button.addEventListener("click", () => {
  let numCells = 0;
  do {
    numCells = parseInt(prompt("How many cells would you like? (Max of 100)"));
  } while (numCells > 100 || isNaN(numCells));

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  makeGrid(numCells, numCells);
});
