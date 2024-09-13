import "./styles.css";
import createProjectForm from "./createProjectForm";

//Header Buttons

const createProjectBtn = document.getElementById("create-project-btn");



const popUpsContainer = document.getElementById("pop-ups");

createProjectBtn.addEventListener("click", ()=> {
    popUpsContainer.appendChild(createProjectForm());
});