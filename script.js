const container = document.querySelector("#grid-container");
const newGridBtn = document.querySelector("#reset");
const classicBtn = document.querySelector("#multipass");
const randomizeBtn = document.querySelector("#random-color");
const defaultBtn = document.querySelector("#default-color");

const MODE_RANDOM = "random";
const MODE_DEFAULT = "default";

let mode = MODE_DEFAULT;

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
    cell.addEventListener("mouseover", (e) => {
      if (mode === MODE_DEFAULT) {
        e.target.style.backgroundColor = "#000000";
      } else if (mode === MODE_RANDOM) {
        e.target.style.backgroundColor = getColor();
      }
    });
  });
}

newGridBtn.addEventListener("click", () => {
  let numCells = parseInt(
    prompt("How many cells would you like? (Max of 100, defaults to 16)")
  );

  if (numCells > 100 || isNaN(numCells)) {
    numCells = 16;
  }
  // do {
  //   numCells = parseInt(
  //     prompt("How many cells would you like? (Max of 100)")
  //   );
  // } while (numCells > 100 || isNaN(numCells));

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  makeGrid(numCells, numCells);
});

defaultBtn.addEventListener("click", () => {
  mode = MODE_DEFAULT;
});

randomizeBtn.addEventListener("click", () => {
  mode = MODE_RANDOM;
});

function getColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
