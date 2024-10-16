import { pageController } from "./DomController";
import "./styles.css";


// Buttons

const createFormBtn = document.getElementById("projects-container-header-createproject-btn");
const createTaskBtn = document.getElementById("tasks-container-header-createtask-btn");



createFormBtn.addEventListener("click", ()=>{
    pageController.displayProjectForm();
});

createTaskBtn.addEventListener("click", ()=>{
    pageController.displayTaskForm();
});

window.onload = function(){
    pageController.displayProjects();
}