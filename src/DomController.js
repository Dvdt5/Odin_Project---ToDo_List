import { projectController } from "./ProjectsController";


class Page {

    displayProjectForm() {
        const projectContainer = document.getElementById("projects-container");
        const createFormBtn = document.getElementById("projects-container-header-createproject-btn");

        createFormBtn.style.display = "none";

        projectContainer.innerHTML = "";
        projectContainer.innerHTML = `<form id="add-project-form">
                <div class="project-form-input-row">
                    <h2 class="form-head-text">Create Project</h2>
                </div>
                <div class="project-form-input-row">
                    <label for="">Project Name</label><br>
                    <input type="text" id="project-form-name-input" class="gray-input-outline" required autocomplete="off" maxlength="30">
                </div>
                <div></div>
                <div class="project-form-input-row">
                    <button id="close-project-form" class="form-btn cancel" type="button">Cancel</button>
                    <button class="form-btn create" type="submit">Create</button>
                </div>
            </form>`;
        const closeprojectFormBtn = document.getElementById("close-project-form");
        closeprojectFormBtn.addEventListener("click", ()=>this.displayProjects());

        const createProjectForm = document.getElementById("add-project-form");
        createProjectForm.addEventListener("submit", (event)=>{
            event.preventDefault();
            projectController.createProject();
            this.displayProjects();
        });

    }

    displayProjects() {
        const projectContainer = document.getElementById("projects-container");
        const createFormBtn = document.getElementById("projects-container-header-createproject-btn");

        createFormBtn.style.display = "block";

        const projects = projectController.getProjects();

        projectContainer.innerHTML = "";

        projects.forEach(project => {
            projectContainer.innerHTML += `
                <div class="project-list-item">
                    <p class="project-list-item-text">${project.name}</p>
                    <div class="project-list-item-del-btn" id="${project.id}">Delete Project</div>
                </div>
                `;

            
        });
    }

    displayTaskForm() {
        const taskContainer = document.getElementById("tasks-container");
        const createTaskBtn = document.getElementById("tasks-container-header-createtask-btn");

        createTaskBtn.style.display = "none";

        taskContainer.innerHTML = "";
        taskContainer.innerHTML = ` <form id="add-task-form">
                <div class="task-form-input-row">
                    <h2 class="form-head-text">Create Task</h2>
                </div>
                <div id="task-form-input-container">
                    <div class="task-form-input-row">
                        <label for="task-form-name-input">Task Name</label><br>
                        <input type="text" id="task-form-name-input" class="gray-input-outline" required autocomplete="off">
                    </div>
                    <div class="task-form-input-row">
                        <label for="task-form-select-input">Assign to a Project</label><br>
                        <select id="task-form-select-input" class="gray-input-outline">
                            <option>Select a Project to assign</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div class="task-form-input-row">
                        <label for="task-form-detail-input">Task Details</label><br>
                        <textarea id="task-form-detail-input" class="gray-input-outline" rows="3"></textarea>
                    </div>
                    <div class="task-form-input-row">
                        <label>Task Importance</label><br><br>
                        <label for="importance-!"><input type="radio" id="importance-!" name="task-importance">!</label><br><br>
                        <label for="importance-!!"><input type="radio" id="importance-!!" name="task-importance">!!</label><br><br>
                        <label for="importance-!!!"><input type="radio" id="importance-!!!" name="task-importance">!!!</label>
                    </div>
                </div>
                <div></div>
                <div class="project-form-input-row">
                    <button id="close-task-form" class="form-btn cancel" type="button">Cancel</button>
                    <button class="form-btn create" type="submit">Create</button>
                </div>
            </form>`;

        const closeTaskFormBtn = document.getElementById("close-task-form");
        closeTaskFormBtn.addEventListener("click", ()=>this.displayTasks());
    }

    displayTasks() {
        const taskContainer = document.getElementById("tasks-container");
        const createTaskBtn = document.getElementById("tasks-container-header-createtask-btn");

        createTaskBtn.style.display = "block";

        taskContainer.innerHTML = "";
        taskContainer.innerHTML = `<div class="task-list-item">
                <p>Task 1</p>
                <div class="task-list-item-btn-container">
                    <div class="task-list-item-detail-btn">Details</div>
                    <div class="task-list-item-delete-btn">Delete</div>
                </div>
            </div>

            <div class="task-list-item">
                <p>Task 2</p>
                <div class="task-list-item-btn-container">
                    <div class="task-list-item-detail-btn">Details</div>
                    <div class="task-list-item-delete-btn">Delete</div>
                </div>
            </div>
            <div class="task-list-item">
                <p>Task 3</p>
                <div class="task-list-item-btn-container">
                    <div class="task-list-item-detail-btn">Details</div>
                    <div class="task-list-item-delete-btn">Delete</div>
                </div>
            </div>`;

    }
}

export const pageController = new Page();