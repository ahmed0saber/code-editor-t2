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
        <div class="box-header">
          <h2>${userProjects[i].name}</h2>
          <span onclick="deleteProject(this, ${userProjects[i].id})">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
          </span>
        </div>
        <p>${userProjects[i].description}</p>
      </div>
      <a href="../editor/?id=${userProjects[i].id}" class="button">View Project</a>
    </div>`
  }
}
showAllProjects()

function deleteProject(el, id){
  const allProjects = getProjectsFromLocalStorage()
  for(let i = 0; i < allProjects.length; i++){
    if(allProjects[i].id == id){
      allProjects.splice(i, 1)
      break
    }
  }
  localStorage.setItem("projects", JSON.stringify(allProjects))
  el.closest(".box").remove()
}