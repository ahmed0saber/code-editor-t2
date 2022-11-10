// Variables
const userInput = document.querySelector("input");
const userDesc = document.querySelector("textarea");
const button = document.querySelector(".btn");
let username;
let description;
let userProject = [];
let newProject = {};
// user events
button.addEventListener("click", () => {
  // create new project when click
  newProject = {
    // generating random id
    id: Math.floor(Math.random() * 10000),
    name: userInput.value,
    description: userDesc.value,
    htmlCode: "<div></div>",
    cssCode: "<style></style>",
    jsCode: "<script></script>",
  };
  // get user input
  userInput.addEventListener("input", () => {
    username = userInput.value;
  });
  // get user description
  userDesc.addEventListener("input", () => {
    description = userDesc.value;
  });
  // call function when user click create
  createProject();
});

// functions here
function createProject() {
  userProject.push(newProject);
  // save to localStorage and convert array to JSON string
  window.localStorage.setItem(
    `Project-${userProject.length + 1}`,
    JSON.stringify(userProject)
  );
  // clear username input and textarea description after create project
  userInput.value = "";
  userDesc.value = "";
}
