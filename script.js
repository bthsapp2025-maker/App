// Utility functions to mimic App Lab behavior
function hideElement(id) {
  document.getElementById(id).classList.add("hidden");
}
function showElement(id) {
  document.getElementById(id).classList.remove("hidden");
}
function setText(id, text) {
  document.getElementById(id).innerText = text;
}
function getText(id) {
  const el = document.getElementById(id);
  return el.value || el.innerText;
}
function setProperty(id, prop, value) {
  const el = document.getElementById(id);
  if (prop === "icon-color") el.style.color = value;
  else el.style[prop] = value;
}
function setScreen(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.style.display = "none");
  document.getElementById(screenId).style.display = "block";
}

// Initialize hidden elements
[
  "label4misc", "labelforfood", "labelforpeople",
  "inputforfood", "inputforpeople", "text_inputformisc",
  "image2", "image3"
].forEach(id => {
  const el = document.getElementById(id);
  if (el) hideElement(id);
});

// Navigation buttons
document.getElementById("start").addEventListener("click", () => {
  console.log("Open clicked!");
  setScreen("StartaReview");
});

document.getElementById("HomeFromMain").addEventListener("click", () => {
  console.log("Home clicked!");
  setScreen("home");
});

document.getElementById("Info").addEventListener("click", () => {
  console.log("Info clicked!");
  setScreen("Information");
});

document.getElementById("button1").addEventListener("click", () => {
  console.log("Home clicked!");
  setScreen("home");
});

// Category change handling
document.getElementById("category").addEventListener("change", e => {
  const value = e.target.value;
  console.log("Selected option:", value);

  // Hide all input areas first
  ["text_inputformisc", "label4misc", "inputforfood", "labelforfood", "inputforpeople", "labelforpeople"]
    .forEach(hideElement);

  if (value === "Misc") {
    showElement("text_inputformisc");
    showElement("label4misc");
  } else if (value === "Food") {
    showElement("inputforfood");
    showElement("labelforfood");
  } else if (value === "People") {
    showElement("inputforpeople");
    showElement("labelforpeople");
  }
});

// Rating stars
function setStars(rating) {
  for (let i = 1; i <= 5; i++) {
    const color = i <= rating ? "gold" : "gray";
    setProperty("star" + i, "icon-color", color);
  }
  setText("statusLabel", `You rated: ${rating} star${rating > 1 ? "s" : ""}`);
}

function animateStar(starID) {
  const star = document.getElementById(starID);
  star.style.fontSize = "40px";
  setTimeout(() => (star.style.fontSize = "30px"), 150);
}

function getRating() {
  const label = getText("statusLabel");
  const match = label.match(/You rated: (\d)/);
  return match ? parseInt(match[1]) : 0;
}

// Setup stars
for (let i = 1; i <= 5; i++) {
  const star = document.getElementById("star" + i);
  star.addEventListener("click", () => {
    setStars(i);
    animateStar("star" + i);
  });
  star.addEventListener("mouseover", () => setProperty("star" + i, "icon-color", "orange"));
  star.addEventListener("mouseout", () => {
    const currentRating = getRating();
    const color = i <= currentRating ? "gold" : "gray";
    setProperty("star" + i, "icon-color", color);
  });
}

// Clear stars
document.getElementById("ClearReviewStars").addEventListener("click", () => {
  for (let i = 1; i <= 5; i++) setProperty("star" + i, "icon-color", "gray");
  setText("statusLabel", "Rate it!");
});

// Submit review to Google Script
document.getElementById("submitbutn").addEventListener("click", () => {
  const userInput = document.getElementById("inputBox").value;
  const url = "https://script.google.com/macros/s/AKfycbxrmZTuAg1BtNNOeytwhcvmxxFCOVnA1HNFkRncT02v6ek54THmiSxQ_S-N-6dt2raD/exec";

  fetch(url + "?text=" + encodeURIComponent(userInput), { method: "GET", mode: "no-cors" })
    .then(() => setText("statusLabel", "Submitted!"))
    .catch(err => setText("statusLabel", "Error: " + err));
});

// Slideshow
setTimeout(() => {
  showElement("image2");
  hideElement("image1");
  setTimeout(() => {
    showElement("image3");
    hideElement("image2");
  }, 5000);
}, 5000);