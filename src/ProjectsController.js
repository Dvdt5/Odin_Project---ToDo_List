import { pageController } from "./DomController";
import { taskController } from "./TasksConroller";


class ProjectController {

    createProject(){
        let project = {
            id : new Date().valueOf(),
            name : document.getElementById("project-form-name-input").value
        }
        let projectArray = JSON.parse(localStorage.getItem("Projects")) || [];
        projectArray.push(project);
        localStorage.setItem("Projects", JSON.stringify(projectArray));
    }

    getProjects(){
        return JSON.parse(localStorage.getItem("Projects")) || [];
    }

    deleteProject(id) {
        let projectArray = JSON.parse(localStorage.getItem("Projects")) || [];
        let newArr = projectArray.filter((project)=>project.id != id);
        localStorage.setItem("Projects", JSON.stringify(newArr));

        let tasksArr = taskController.getTasks();
        tasksArr = tasksArr.filter((task)=>task.assignedProjectId != id);
        
        localStorage.setItem("Tasks", JSON.stringify(tasksArr));

    }
}

export const projectController = new ProjectController();