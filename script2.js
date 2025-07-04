function changeColor2() {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0F0F0", "#000000"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

const names = "景天";
function sayHi() {
  console.log("Hi " + names);
  document.getElementById("hiButton").textContent = "Hi " + names;
}

const name = "景天";
let showingName = false; // 一开始是 false，表示没显示名字

function sayhi2(){
  const button = document.getElementById("hiButton2");

  if (showingName) {
    // 如果当前是显示名字，就恢复原本按钮文字
    button.textContent = "点我打招呼";
  } else {
    // 如果当前是原始状态，就改成 Hi + 名字
    button.textContent = "Hi " + name;
  }

  // 状态反转（true ↔ false）
  showingName = !showingName;
}
