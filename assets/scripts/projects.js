// Variables
let projectName, description, userProjects = getProjectsFromLocalStorage(), newProject = {};
// user events

function handleCreateBtn(){
  const projectNameInput = document.querySelector("input");
  const projectDescInput = document.querySelector("textarea");
  // create new project when clicked
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
}

// functions here
function createProject() {
  const projectNameInput = document.querySelector("input");
  const projectDescInput = document.querySelector("textarea");
  if(projectNameInput.value.trim().length < 1 || projectDescInput.value.trim().length < 1){
    alert("All fields are required")
    return
  }
  userProjects.push(newProject);
  // save to localStorage and convert array to JSON string
  localStorage.setItem("projects", JSON.stringify(userProjects));
  // clear projectName input and textarea description after create project
  projectNameInput.value = "";
  projectDescInput.value = "";
  showAllProjects()
}

function getProjectsFromLocalStorage(){
  if(localStorage.getItem("projects")){
    return JSON.parse(localStorage.getItem("projects"))
  }
  return []
}

function showAllProjects(){
  // get array of projects from localStorage
  userProjects = getProjectsFromLocalStorage()

  // loop the array and build a card for each object in it
  const projectsContainer = document.querySelector(".projects-container")
  projectsContainer.innerHTML = `<div class="box-add">
    <h2>Add New Project</h2>
    <input
      type="text"
      required
      maxlength="10"
      minlength="5"
      placeholder="project name"
    />
    <textarea placeholder="description..." name="desck" id="desck" cols="30" rows="10"></textarea
    >
    <button onclick="handleCreateBtn()" class="btn">Create</button>
  </div>`

  for(let i = 0; i < userProjects.length; i++){
    projectsContainer.innerHTML += `<div class="box">
      <div>
        <h2>${userProjects[i].name}</h2>
        <p>${userProjects[i].description}</p>
      </div>
      <a href="../editor/?id=${userProjects[i].id}" class="button">View Project</a>
    </div>`
  }
}
showAllProjects()