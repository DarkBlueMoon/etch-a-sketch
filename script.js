const container = document.querySelector("#container");

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
