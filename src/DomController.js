import { projectController } from "./ProjectsController";
import { taskController } from "./TasksConroller";


class Page {

    displayProjectForm() {
        const projectContainer = document.getElementById("projects-container");
        const createFormBtn = document.getElementById("projects-container-header-createproject-btn");
        const createTaskBtn = document.getElementById("tasks-container-header-createtask-btn");

        createTaskBtn.style.display = "none";
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

    deleteProjectForm(project) {
        const projectContainer = document.getElementById("projects-container");
        const createFormBtn = document.getElementById("projects-container-header-createproject-btn");
        const createTaskBtn = document.getElementById("tasks-container-header-createtask-btn");

        createTaskBtn.style.display = "none";
        createFormBtn.style.display = "none";

        projectContainer.innerHTML = "";
        projectContainer.innerHTML = `<form id="add-project-form">
                <div class="project-form-input-row">
                    <h2 class="form-head-text">Are you sure you want to delete:<br> <span style="color:brown; font-size:32px;">${project.name}</span></h2>
                </div>
                <div class="project-form-input-row">
                    <button id="close-project-form" class="form-btn cancel" type="button">Cancel</button>
                    <button class="form-btn create" type="submit">Delete</button>
                </div>
            </form>`;
        const closeprojectFormBtn = document.getElementById("close-project-form");
        closeprojectFormBtn.addEventListener("click", ()=>this.displayProjects());

        const createProjectForm = document.getElementById("add-project-form");
        createProjectForm.addEventListener("submit", (event)=>{
            event.preventDefault();
            projectController.deleteProject(project.id);
            this.displayProjects();
        });


    }

    displayProjects() {
        const projectContainer = document.getElementById("projects-container");
        const createFormBtn = document.getElementById("projects-container-header-createproject-btn");
        const createTaskBtn = document.getElementById("tasks-container-header-createtask-btn");

        createTaskBtn.style.display = "block";

        createFormBtn.style.display = "block";

        const projects = projectController.getProjects();

        projectContainer.innerHTML = "";

        projects.forEach(project => {

            const projectListItem = document.createElement("div");
            projectListItem.classList.add("project-list-item");
            projectListItem.id = project.id;
            projectListItem.addEventListener("click",()=> {
                this.displayTasks(project);
                console.log(project);
                });

            const projectListItemText = document.createElement("p");
            projectListItemText.classList.add("project-list-item-text");
            projectListItemText.textContent = project.name;

            
            const delBtn = document.createElement("div");
            delBtn.classList.add("project-list-item-del-btn");
            delBtn.addEventListener("click", ()=> {
                this.deleteProjectForm(project);
            });
            delBtn.textContent = "Delete";

            projectListItem.appendChild(projectListItemText);
            projectListItem.appendChild(delBtn);

            projectContainer.appendChild(projectListItem);

        });
    }

    displayTaskForm() {
        const taskContainer = document.getElementById("tasks-container");
        const createTaskBtn = document.getElementById("tasks-container-header-createtask-btn");
        const createFormBtn = document.getElementById("projects-container-header-createproject-btn");

        createFormBtn.style.display = "none";
        createTaskBtn.style.display = "none";
        
        let selectProject = "";

        projectController.getProjects().forEach((project)=>{
            selectProject += `<option value="${project.id}">${project.name}</option>`;

        });

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
                        <select id="task-form-select-input" class="gray-input-outline" required>
                            <option disabled selected value>Select a Project to assign</option>
                            ${selectProject}
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
        closeTaskFormBtn.addEventListener("click", ()=>this.displayTasks(0));

        const createTaskForm = document.getElementById("add-task-form");
        createTaskForm.addEventListener("submit", (event)=>{
            event.preventDefault();
            taskController.createTask();
            this.displayProjects();
            this.displayTasks(0);
        });
    }

    displayTasks(project) {
        const taskContainer = document.getElementById("tasks-container");
        const createTaskBtn = document.getElementById("tasks-container-header-createtask-btn");
        const createFormBtn = document.getElementById("projects-container-header-createproject-btn");

        createFormBtn.style.display = "block";

        createTaskBtn.style.display = "block";

        if (project == 0) {
            taskContainer.innerHTML = "Select a project to see tasks";    
        } else {
            
        let tasksArr = taskController.getTasks();
        tasksArr = tasksArr.filter((task)=>task.assignedProjectId == project.id);
        console.log(tasksArr)


        taskContainer.innerHTML = "";
        tasksArr.forEach((task)=>{
            const taskListItem = document.createElement("div");
            taskListItem.classList.add("task-list-item");

            const taskListItemText = document.createElement("p");
            taskListItemText.textContent = task.name;

            const taskListItemBtnContainer = document.createElement("div");
            taskListItemBtnContainer.classList.add("task-list-item-btn-container");


            const taskListItemDetailBtn = document.createElement("div");
            taskListItemDetailBtn.classList.add("task-list-item-detail-btn");
            taskListItemDetailBtn.textContent = "Details";


            const taskListItemDelBtn = document.createElement("div");
            taskListItemDelBtn.classList.add("task-list-item-delete-btn");
            taskListItemDelBtn.textContent = "Delete";

            taskListItem.appendChild(taskListItemText);

            taskListItemBtnContainer.appendChild(taskListItemDetailBtn);
            taskListItemBtnContainer.appendChild(taskListItemDelBtn);

            taskListItem.appendChild(taskListItemBtnContainer);

            taskContainer.appendChild(taskListItem);
        });           
        }
    }
}

export const pageController = new Page();