// EMPTY
let switcherLis = document.querySelectorAll(".visp");
let textAre = document.querySelectorAll(".here");

let content = document.querySelector(".editors-container")

let frame = document.querySelector(".frame");

switcherLis.forEach((boot) => {
  boot.addEventListener("click", removeActive);
  boot.addEventListener("click", manageArea);
});

function removeActive() {
  switcherLis.forEach((btn) => {
    btn.classList.remove("active");
    this.classList.add("active");
  });
}

function manageArea() {
  textAre.forEach((here) => {
    here.style.display = "none";
    frame.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((here) => {
    here.style.display = "block";
  });
}

function high() {
  frame.style.display = "block";
  content.style.display = "none";
}

function show() {
  frame.style.display = "none";
  content.style.display = "block";
}
