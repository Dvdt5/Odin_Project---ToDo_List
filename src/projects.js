import projectDetails from "./projectDetails";


function deleteProject(id) {
    let storedProjects = JSON.parse(localStorage.getItem("Projects"));
    storedProjects = storedProjects.filter((project)=>!(project.id === id));
    localStorage.setItem("Projects",JSON.stringify(storedProjects));
    document.getElementById("content").innerHTML = "";
    document.getElementById("content").appendChild(listProjects());
}


export default function listProjects() {
    const projectsContainer = document.createElement("div");
    projectsContainer.id = "projects-container";

    const storedProjects = JSON.parse(localStorage.getItem("Projects"));

    storedProjects.forEach(({ id, name, tasks})=>{
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("project-card");

        const projectName = document.createElement("p");
        projectName.classList.add("project-name");
        projectName.textContent = name;

        const projectnearestTask = document.createElement("p");
        projectnearestTask.classList.add("project-nearest-task");
        projectnearestTask.textContent = tasks[0];

        const projectDelBtn = document.createElement("div");
        projectDelBtn.textContent = "Delete";
        projectDelBtn.classList.add("card-btn");
        projectDelBtn.classList.add("del-project-btn");
        projectDelBtn.id = id;
        projectDelBtn.addEventListener("click",()=>{deleteProject(id)});

        const projectDetailsBtn = document.createElement("div");
        projectDetailsBtn.textContent = "Tasks";
        projectDetailsBtn.classList.add("card-btn");
        projectDetailsBtn.classList.add("project-details-btn");
        projectDetailsBtn.id = id;
        projectDetailsBtn.addEventListener("click",()=>{projectDetails(id)})

        cardContainer.appendChild(projectName);
        cardContainer.appendChild(projectnearestTask);
        cardContainer.appendChild(projectDetailsBtn);
        cardContainer.appendChild(projectDelBtn);

        projectsContainer.appendChild(cardContainer);
    });

    if (storedProjects.length === 0) {
        const emptyPageText = document.createElement("p");
        emptyPageText.textContent = "There is no projects to do!"
        emptyPageText.classList.add("no-projects-text");
        projectsContainer.appendChild(emptyPageText);
    }

    return projectsContainer;
}