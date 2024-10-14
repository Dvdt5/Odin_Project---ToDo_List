

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

    }

    displayProjects() {
        const projectContainer = document.getElementById("projects-container");
        const createFormBtn = document.getElementById("projects-container-header-createproject-btn");

        createFormBtn.style.display = "block";

        projectContainer.innerHTML = "";
        projectContainer.innerHTML = `<div class="project-list-item">
                <p class="project-list-item-text">Project 1</p>
                <div class="project-list-item-del-btn">Delete Project</div>
            </div>
            <div class="project-list-item">
                <p class="project-list-item-text">Project 2</p>
                <div class="project-list-item-del-btn">Delete Project</div>
            </div>
            <div class="project-list-item">
                <p class="project-list-item-text">Project 3</p>
                <div class="project-list-item-del-btn">Delete Project</div>
            </div>`;
    }
}

export const pageController = new Page();