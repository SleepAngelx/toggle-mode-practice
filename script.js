function changeColor() {
  const colors = ["lightblue", "lightgreen", "lightpink", "lavender", "khaki"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

function resetColor(){
    document.body.style.backgroundColor = "";
}
