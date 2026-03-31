const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

function startGame() {
  result.textContent = "";

  const correct = colors[Math.floor(Math.random() * colors.length)];
  target.textContent = correct;

  colorsDiv.innerHTML = "";
  const correctIndex = Math.floor(Math.random() * 4);

  for (let i = 0; i < 4; i++) {
    const box = document.createElement("div");
    box.className = "box";

    let color = (i === correctIndex)
      ? correct
      : colors[Math.floor(Math.random() * colors.length)];

    box.style.backgroundColor = color;

    box.onclick = () => {
      result.textContent = (color === correct) ? "Correct!" : "Try again!";
      setTimeout(startGame, 1000);
    };

    colorsDiv.appendChild(box);
  }
}

const target = document.getElementById("target");
const result = document.getElementById("result");
const colorsDiv = document.getElementById("colors");

startGame();