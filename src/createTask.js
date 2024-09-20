


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
        <input type="text" id="task-input-title" autocomplete="off" requried>
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
    <div id="create-task-btn-container">
        <button type="submit" class="task-create-btns" id="create-task-btn">Create</button>
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

    modal.appendChild(createTaskForm);
    darkenedBackground.appendChild(modal);
    return darkenedBackground;
}