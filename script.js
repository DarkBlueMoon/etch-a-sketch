const container = document.querySelector("#container");

// Thanks to Nidhin Joseph: https://stackoverflow.com/a/57550587
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);

  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
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
