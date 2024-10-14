import { pageController } from "./DomController";
import "./styles.css";


// Buttons

const createFormBtn = document.getElementById("projects-container-header-createproject-btn");



createFormBtn.addEventListener("click", ()=>{
    pageController.displayProjectForm();
});