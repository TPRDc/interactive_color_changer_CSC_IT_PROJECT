const changeColorButton = document.getElementById("changeColorButton");
const colorBox = document.getElementById("colorBox");

changeColorButton.addEventListener("click", changeColor);

function changeColor() {
  const randomColor = getRandomColor();
  colorBox.style.backgroundColor = randomColor;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
