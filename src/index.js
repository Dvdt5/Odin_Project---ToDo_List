import "./styles.css";
import createProjectForm from "./createProjectForm";
import listProjects from "./projects";
import createTaskForm from "./createTask";

//Header Buttons

const createProjectBtn = document.getElementById("create-project-btn");
const createTaskBtn = document.getElementById("create-task-btn");
const projectsBtn = document.getElementById("projects-btn");


const popUpsContainer = document.getElementById("pop-ups");
const contentContainer = document.getElementById("content");


createProjectBtn.addEventListener("click", ()=> {
    popUpsContainer.innerHTML = "";
    popUpsContainer.appendChild(createProjectForm());
});

createTaskBtn.addEventListener("click", ()=>{
    popUpsContainer.innerHTML = "";
    popUpsContainer.appendChild(createTaskForm());
})

projectsBtn.addEventListener("click", ()=>{
    contentContainer.innerHTML = "";
    document.getElementById("content-header").textContent = "Projects";
    contentContainer.appendChild(listProjects());
})



window.onload = function (){
    contentContainer.innerHTML = "";
    document.getElementById("content-header").textContent = "Projects";
    contentContainer.appendChild(listProjects());
}