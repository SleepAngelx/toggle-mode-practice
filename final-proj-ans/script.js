const happyBtn2 = document.getElementById("happy2");
const neutralBtn2 = document.getElementById("neutral2");
const sadBtn2 = document.getElementById("sad2");
const resetBtn = document.getElementById("resetMood");
const moodDisplay2 = document.getElementById("moodDisplay2");
const quoteBox = document.getElementById("quote-box");
const quoteDisplay = document.getElementById("quotes");
const authorDisplay = document.getElementById("author");

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
const colors = ["lightyellow", "lightgreen", "lightpink"];

// Function to handle mood selection
function handleMood(moodType, quotesArray, bgColor, emoji) {
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  const quote = quotesArray[randomIndex];
  document.body.style.backgroundColor = bgColor;
  moodDisplay2.textContent = `${moodType} ${emoji}`;
  quoteBox.classList.remove("show");
  setTimeout(() => {
    quoteDisplay.textContent = `"${quote.text}"`;
    authorDisplay.textContent = `– ${quote.author}`;
    quoteBox.classList.add("show");
  }, 100);
}

// Event listeners
happyBtn2.addEventListener("click", () =>
  handleMood("Happy", happyQuotes, "lightyellow", "😄")
);
neutralBtn2.addEventListener("click", () =>
  handleMood("Neutral", neutralQuotes, "lightgreen", "😐")
);
sadBtn2.addEventListener("click", () =>
  handleMood("Sad", sadQuotes, "lightpink", "😔")
);

// Reset button
resetBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#f9fafb";
  moodDisplay2.textContent = "No mood selected";
  quoteDisplay.textContent = "";
  authorDisplay.textContent = "";
  quoteBox.classList.remove("show");
});
