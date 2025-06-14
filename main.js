function switchScreen(id) {
  const screens = document.querySelectorAll(".screen");
  screens.forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

console.log("LB’s Geldrobot uitgebreid geladen");