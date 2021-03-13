const container = document.querySelector("#grid-container");
const button = document.querySelector("#reset");

// Thanks to Nidhin Joseph: https://stackoverflow.com/a/57550587
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    // cell.textContent = i + 1;
    cell.classList.add("grid-item");
    container.appendChild(cell);
  }
}

makeRows(16, 16);

const cells = document.querySelectorAll(".grid-item");
cells.forEach((cell) => {
  cell.addEventListener("mouseover", () => {
    cell.classList.add("black");
  });
});

button.addEventListener("click", () => {
  // const numCells = parseInt(prompt)
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
});
