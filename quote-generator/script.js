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


const quotes2 = [
  { text: "Believe in yourself!", author: "Unknown" },
  { text: "Hard work beats talent.", author: "Tim Notke" },
  { text: "Never give up.", author: "Winston Churchill" },
  { text: "Stay positive and keep pushing.", author: "Elon Musk" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" }
];

const quoteContent2 = document.getElementById("quote2");
const newQuoteBtn2 = document.getElementById("newQuote2");
const author = document.getElementById("author");
const colors = ["lightblue", "lightgreen", "lightpink", "lavender", "khaki"];

newQuoteBtn2.addEventListener("click", ()=>{
    const randomIndex = Math.floor(Math.random()*quotes.length);

    quoteContent2.textContent = quotes2[randomIndex].text;
    author.textContent = "By " + quotes2[randomIndex].author;
    document.body.style.backgroundColor = colors[randomIndex];
});

const quoteContent3 = document.getElementById("quote3");
const newQuoteBtn3 = document.getElementById("newQuote3");
const author3 = document.getElementById("author3");

newQuoteBtn3.addEventListener("click", ()=>{
    const randomIndex = Math.floor(Math.random()*quotes.length);

    quoteContent3.textContent = quotes2[randomIndex].text;
    author3.textContent = "By " + quotes2[randomIndex].author;
    document.body.style.backgroundColor = colors[randomIndex];
});
