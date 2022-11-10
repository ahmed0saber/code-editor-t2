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

/*كود ترميز النصوص */
const htmlTextarea = document.getElementById('html');
const cssTextarea = document.getElementById('css');
const jsTextarea = document.getElementById('js');
const outputIframe = document.getElementById('iframe');

function showcode(){
  const htmlcode = htmlTextarea.value;
  const csscode = cssTextarea.value;
  const jscode = jsTextarea.value;
  const output = outputIframe.contentWindow.document;
  output.open();
  output.write(htmlcode+csscode+jscode);
  output.close();
}

function initializeCodeEditor(){
  htmlTextarea.value="<div>\n\n</div>";
  cssTextarea.value="<style>\n\n</style>";
  jsTextarea.value="<script>\n\n</script>";
  showcode()
}
initializeCodeEditor()