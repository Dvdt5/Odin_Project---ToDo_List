


export default function createProjectForm() {
    const darkenedBackground = document.createElement("div");
    darkenedBackground.id = "darkenedBackground";

    const modal = document.createElement("div");
    modal.id = "popUpModal";

    const createProjectForm = document.createElement("form");
    createProjectForm.id = "create-project-form";

    createProjectForm.innerHTML = `
    <div>
        <label for="project-name-input">Project Name</label><br>

        <input type="text" id="project-name-input" required autocomplete="off">
    </div>
    <button type="submit" id="create-form-btn" class="create-project-form-btn">Create</button>
    `;


    //Added an event for cancel btn 
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.type = "button";
    cancelBtn.id = "create-form-cancel-btn";
    cancelBtn.classList.add("create-project-form-btn")
    cancelBtn.addEventListener("click",()=>document.getElementById("pop-ups").innerHTML = "");
    createProjectForm.insertBefore(cancelBtn,createProjectForm.children[1]);


    createProjectForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        let storedProjects = JSON.parse(localStorage.getItem("Projects")) || [];
        const projectNameInput = document.getElementById("project-name-input");
        const tempObj = {
            name: projectNameInput.value,
            tasks: []
        };
        storedProjects.push(tempObj);
        localStorage.setItem("Projects",JSON.stringify(storedProjects));
        document.getElementById("pop-ups").innerHTML = "";
    });
    
    modal.appendChild(createProjectForm);
    darkenedBackground.appendChild(modal);
    
    return darkenedBackground;
}