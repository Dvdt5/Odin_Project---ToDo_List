import listProjects from "./projects";



export default function createTaskForm () {

    //Create the background and modal

    const darkenedBackground = document.createElement("div");
    darkenedBackground.id = "darkenedBackground";

    const modal = document.createElement("div");
    modal.id = "popUpModal";

    //-------------------------------------

    //Create the form

    const createTaskForm = document.createElement("form");
    createTaskForm.id = "create-task-form";

    //Create the options for select input and list the projects in it
    let selectProjectHtmlString = "";
    const storedProjects = JSON.parse(localStorage.getItem("Projects"));

    storedProjects.forEach(({ id, name, tasks})=>{
        const tempString = `<option value="${name}">${name}</option>`;
        selectProjectHtmlString += tempString;
    });

    createTaskForm.innerHTML = `
    <div>
        <label for="task-input-header">Title</label><br>
        <input type="text" id="task-input-title" autocomplete="off" required>
    </div>
    <div>
        <label for="">Task Details</label><br>
        <textarea id="task-input-content" autocomplete="off"></textarea>
    </div>
    <div>
        <label >Please select a project to assign the task</label><br>
        <select id="project-select-input" required>
        ${selectProjectHtmlString ? selectProjectHtmlString : "<option disabled='true' >You dont have any Projects</option>"}
        </select>
    </div>
    <div>
        <label>Select a date</label>
        <input type="date" id="task-date" required>
    </div>
    <div id="create-task-btn-container">
        <button type="submit" class="task-create-btns" id="create-task-form-btn">Create</button>
    </div>
    `;

    //-------------------------------------

    //Create the cancel button

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.type = "button";
    cancelBtn.id = "create-task-cancel-btn";
    cancelBtn.classList.add("task-create-btns");
    cancelBtn.addEventListener("click",()=>document.getElementById("pop-ups").innerHTML = "");
    createTaskForm.lastElementChild.insertBefore(cancelBtn, createTaskForm.lastElementChild.children[0])

    //--------------------------------------

    //Store the task in Local Storage

    createTaskForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        let storedTasks = JSON.parse(localStorage.getItem("Tasks")) || [];

        const taskTitleInput = document.getElementById("task-input-title");
        const taskDetailInput = document.getElementById("task-input-content");
        const taskAssignedProjectInput = document.getElementById("project-select-input");
        const taskDate = document.getElementById("task-date");

        const tempObj = {
            id: `TaskID: ${new Date().valueOf()}`,
            taskTitle: taskTitleInput.value,
            taskDetail: taskDetailInput.value,
            taskDate: taskDate.value,
            taskAssignedProject: taskAssignedProjectInput.value,
            isDone: false
        };
        storedTasks.push(tempObj);
        localStorage.setItem("Tasks",JSON.stringify(storedTasks));
        
        
        //Assign the task to a project

        let storedProjects = JSON.parse(localStorage.getItem("Projects"));

        storedProjects.forEach((project)=>{
            if (project.name === taskAssignedProjectInput.value) {
                project.tasks.push(taskTitleInput.value);
            }
        });

        localStorage.setItem("Projects",JSON.stringify(storedProjects));


        //----------------------------
        
        
        document.getElementById("pop-ups").innerHTML = "";
        document.getElementById("content").innerHTML = "";
        document.getElementById("content").appendChild(listProjects());
    });




    modal.appendChild(createTaskForm);
    darkenedBackground.appendChild(modal);
    return darkenedBackground;
}