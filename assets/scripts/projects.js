// Variables
const projectNameInput = document.querySelector("input");
const projectDescInput = document.querySelector("textarea");
const button = document.querySelector(".btn");
let projectName, description, userProjects = getProjectsFromLocalStorage(), newProject = {};

// user events
button.addEventListener("click", () => {
  // create new project when click
  let projectId
  if(userProjects.length < 1){
    projectId = 0
  }else{
    projectId = userProjects[userProjects.length - 1].id + 1
  }
  newProject = {
    id: projectId,
    name: projectNameInput.value,
    description: projectDescInput.value,
    htmlCode: "<div></div>",
    cssCode: "<style></style>",
    jsCode: "<script></script>",
  };
  // get user input
  projectNameInput.addEventListener("input", () => {
    projectName = projectNameInput.value;
  });
  // get user description
  projectDescInput.addEventListener("input", () => {
    description = projectDescInput.value;
  });
  // call function when user click create
  createProject();
});

// functions here
function createProject() {
  userProjects.push(newProject);
  // save to localStorage and convert array to JSON string
  localStorage.setItem("projects", JSON.stringify(userProjects));
  // clear projectName input and textarea description after create project
  projectNameInput.value = "";
  projectDescInput.value = "";
}

function getProjectsFromLocalStorage(){
  if(localStorage.getItem("projects")){
    return JSON.parse(localStorage.getItem("projects"))
  }
  return []
}