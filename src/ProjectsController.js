import { pageController } from "./DomController";


class ProjectController {

    constructor(){
        this.projectArray = JSON.parse(localStorage.getItem("Projects")) || [];
    }

    createProject(){
        let project = {
            id : new Date().valueOf(),
            name : document.getElementById("project-form-name-input").value
        }

        this.projectArray.push(project);
        localStorage.setItem("Projects", JSON.stringify(this.projectArray));
    }

    getProjects(){
        return this.projectArray;
    }
}

export const projectController = new ProjectController();