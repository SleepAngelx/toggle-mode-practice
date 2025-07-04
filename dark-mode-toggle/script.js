function toggleMode() {
  const body = document.body;
  const button = document.querySelector("button");

  body.classList.remove("red-mode", "blue-mode");

  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    button.textContent = "Switch to Light Mode";
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    button.textContent = "Switch to Dark Mode";
  }
}

function toggleMode2() {
  const body = document.body;
  const button = document.getElementById("button2");

  body.classList.remove("light-mode", "dark-mode");
  if (body.classList.contains("blue-mode")) {
    body.classList.remove("blue-mode");
    body.classList.add("red-mode");
    button.textContent = "Switch to Blue Mode";
  } else {
    body.classList.remove("red-mode");
    body.classList.add("blue-mode");
    button.textContent = "Switch to Red Mode";
  }
}
