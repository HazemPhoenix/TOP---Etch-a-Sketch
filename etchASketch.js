const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

function createGrid() {
  const size = 800 / gridSize;
  const boxes = [];
  for (let i = 0; i < gridSize ** 2; i++) {
    const box = document.createElement("div");
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    box.style.cssText = `background-color: black; height: ${size}px; width:${size}px`;
    let brightness = 1;
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      box.style.filter = `brightness(${brightness})`;
      brightness -= 0.1;
    });
    boxes.push(box);
  }
  boxes.forEach((box) => {
    container.appendChild(box);
  });
}
let gridSize = 16;
createGrid();

btn.addEventListener("click", () => {
  gridSize = prompt("What grid size would you like? ");
  container.innerHTML = "";
  createGrid();
});
