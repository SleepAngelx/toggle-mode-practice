const quotes = [
  "Believe in yourself!",
  "Hard work beats talent.",
  "Never give up.",
  "Stay positive and keep pushing.",
  "Dream big and dare to fail."
];

const colors = ["#FFB6C1", "#87CEFA", "#98FB98", "#FFD700", "#FFA07A"];

const quoteContent = document.getElementById("quote");
const newQuoteBtn = document.getElementById("newQuote");

// newQuoteBtn.addEventListener("click", () => {
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   const randomColor = colors[Math.floor(Math.random() * colors.length)];

//   quoteContent.textContent = quotes[randomIndex];
//   document.body.style.backgroundColor = randomColor;
//   quoteContent.style.color = "#333"; // 可以改成别的颜色试试
// });

newQuoteBtn.addEventListener("click", () => {
    // console.log("🔹 Button clicked!");
    const randonNumber = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randonNumber];
    quoteContent.textContent = randomQuote;

    const randomColor = colors[randonNumber];
    document.body.style.backgroundColor = randomColor;
});