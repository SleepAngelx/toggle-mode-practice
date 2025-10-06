const quotes = [
  "Believe in yourself!",
  "Hard work beats talent.",
  "Never give up.",
  "Stay positive and keep pushing.",
  "Dream big and dare to fail."
];

const quoteContent = document.getElementById("quote");
const newQuoteBtn = document.getElementById("newQuote");

newQuoteBtn.addEventListener("click", ()=>{
    quoteContent.textContent = quotes[Math.floor(Math.random()*quotes.length)];
});