let count = 0;
let interval;

const countValue = document.getElementById("count");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
const autoIncreaseBtn = document.getElementById("autoIncrease");
const autoDecreaseBtn = document.getElementById("autoDecrease");

increaseBtn.addEventListener("click", () => {
  count++;
  //   countValue.textContent = count;
  updateDisplay();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  //   countValue.textContent = count;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  //   countValue.textContent = count;
  updateDisplay();
});

autoIncreaseBtn.addEventListener("mouseenter", () => {
  interval = setInterval(() => {
    count++;
    // countValue.textContent = count;
    updateDisplay();
  }, 200); // 每 200 毫秒 +1
});

autoIncreaseBtn.addEventListener("mouseleave", () => {
  clearInterval(interval);
});

autoDecreaseBtn.addEventListener("mouseenter", () => {
  interval = setInterval(() => {
    count--;
    // countValue.textContent = count;
    updateDisplay();
  }, 200); // 每 200 毫秒 +1
});

autoDecreaseBtn.addEventListener("mouseleave", () => {
  clearInterval(interval);
});

// function updateDisplay() {
//   countValue.textContent = count;

//   if (count > 0) {
//     countValue.style.color = "green";
//   } else if (count < 0) {
//     countValue.style.color = "red";
//   } else {
//     countValue.style.color = "black";
//   }
// }

function updateDisplay() {
  countValue.textContent = count;

  if (count > 0 && count <= 10) {
    countValue.style.color = "green";
  } else if (count > 10) {
    countValue.style.color = "blue";
  } else if (count < 0 && count >= -10) {
    countValue.style.color = "red";
  } else if (count < -10) {
    countValue.style.color = "purple";
  } else {
    countValue.style.color = "black";
  }
}
