


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

    createTaskForm.innerHTML = `
    <div>
        <label for="task-input-header">Title</label><br>
        <input type="text" id="task-input-title">
    </div>
    <div>
        <label for="">Task</label><br>
        <textarea id="task-input-content"></textarea>
    </div>
    <div>

    </div>
    <div>
        
        <button>Create</button>
    </div>
    `;

    //-------------------------------------

    //Create the cancel button

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.type = "button";
    cancelBtn.id = "create-task-cancel-btn";
    cancelBtn.addEventListener("click",()=>document.getElementById("pop-ups").innerHTML = "");
    createTaskForm.lastElementChild.insertBefore(cancelBtn, createTaskForm.lastElementChild.children[0])

    //--------------------------------------

    modal.appendChild(createTaskForm);
    darkenedBackground.appendChild(modal);
    return darkenedBackground;
}