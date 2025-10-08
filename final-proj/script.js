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

const happyBtn2 = document.getElementById("happy2");
const neutralBtn2 = document.getElementById("neutral2");
const sadBtn2 = document.getElementById("sad2");

const happyQuotes = [
  { text: "Life is good!", author: "Aina from Penang" },
  { text: "Feeling awesome!", author: "Jason Tan" },
  { text: "Smiling all day!", author: "Nora Lee" },
];

const neutralQuotes = [
  { text: "Just another normal day.", author: "Amirul" },
  { text: "Okay okay lah.", author: "Kenny Wong" },
  { text: "Nothing much.", author: "Sarah Lim" },
];

const sadQuotes = [
  { text: "Need some rest...", author: "Farah Aziz" },
  { text: "A bit down today.", author: "Daniel Chia" },
  { text: "Tomorrow will be better.", author: "Uncle Lim" },
];
const colors = ["lightblue", "lightgreen", "lightpink"];

happyBtn2.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * happyQuotes.length);
  moodDisplay2.textContent =
    happyQuotes[randomIndex].text + " - " + happyQuotes[randomIndex].author;
    document.body.style.backgroundColor = colors[randomIndex];
});

neutralBtn2.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * neutralQuotes.length);
  moodDisplay2.textContent =
    neutralQuotes[randomIndex].text + " - " + neutralQuotes[randomIndex].author;
    document.body.style.backgroundColor = colors[randomIndex];
});

sadBtn2.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * sadQuotes.length);
  moodDisplay2.textContent =
    sadQuotes[randomIndex].text + " - " + sadQuotes[randomIndex].author;
    document.body.style.backgroundColor = colors[randomIndex];
});
