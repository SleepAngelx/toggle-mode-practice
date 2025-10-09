const happyBtn = document.getElementById("happy");
const neutralBtn = document.getElementById("neutral");
const sadBtn = document.getElementById("sad");

const moodDisplay = document.getElementById("moodDisplay");

happyBtn.addEventListener("click", () => {
  moodDisplay.textContent = "feeling great today!";
  document.body.style.backgroundColor = "lightyellow";
});

neutralBtn.addEventListener("click", () => {
  moodDisplay.textContent = "ok ok je.";
  document.body.style.backgroundColor = "lightgreen";
});

sadBtn.addEventListener("click", () => {
  moodDisplay.textContent = "not good today.";
  document.body.style.backgroundColor = "lightpink";
});

//2nd part

const happyBtn2 = document.getElementById("happy2");
const neutralBtn2 = document.getElementById("neutral2");
const sadBtn2 = document.getElementById("sad2");
const moodDisplay2 = document.getElementById("moodDisplay2");
const quoteDisplay = document.getElementById("quotes");
const authorDisplay = document.getElementById("author");

const happyQuotes = ["Life is good!", "Feeling awesome!", "Smiling all day!"];
const neutralQuotes = [
  "Just another normal day.",
  "Okay okay lah.",
  "Nothing much.",
];
const sadQuotes = [
  "Need some rest...",
  "A bit down today.",
  "Tomorrow will be better.",
];
const colors = ["lightblue", "lightgreen", "lightpink"];

const quotes = [
  { text: "Hard work beats talent.", author: "Tim Notke" },
  { text: "Never give up.", author: "Winston Churchill" },
  { text: "Stay positive and keep pushing.", author: "Elon Musk" },
];

happyBtn2.addEventListener("click", () => {
  const randomIndex = getRandomIndex(happyQuotes.length);
  moodDisplay2.textContent = happyQuotes[randomIndex];
  getQuotes(randomIndex);
});

neutralBtn2.addEventListener("click", () => {
  const randomIndex = getRandomIndex(neutralQuotes.length);
  moodDisplay2.textContent = neutralQuotes[randomIndex];
  getQuotes(randomIndex);
});

sadBtn2.addEventListener("click", () => {
  const randomIndex = getRandomIndex(sadQuotes.length);
  moodDisplay2.textContent = sadQuotes[randomIndex];
  getQuotes(randomIndex);
});

function getRandomIndex(arrayLength) {
  const randomNumber = Math.floor(Math.random() * arrayLength);
  return randomNumber;
}

function getQuotes(randomNumber) {
  // Fade out
  moodDisplay2.classList.remove("show");
  document.getElementById("quote-box").classList.remove("show");

    setTimeout(() => {
    // Update text and color
  quoteDisplay.textContent = quotes[randomNumber].text;
  authorDisplay.textContent = quotes[randomNumber].author;
  document.body.style.backgroundColor = colors[randomNumber];

      // Fade back in
    moodDisplay2.classList.add("show");
    document.getElementById("quote-box").classList.add("show");
  }, 1000);
}
