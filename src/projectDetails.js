
function listTasks(taskNames) {
    let tasks = JSON.parse(localStorage.getItem("Tasks")).filter((task)=>taskNames.includes(task.taskTitle));

    const tasksContainer = document.createElement("div");
    tasksContainer.id = "tasks-container";

    tasks.forEach(task => {
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");

        taskCard.innerHTML = `
        <p class="task-card-title">${task.taskTitle}</p>
        <p class="task-card-detail">${task.taskDetail}</p>
        <p class="task-card-date">${task.taskDate}</p>
        <div class="toggle-status-btn">Done</div>
        <div class="del-task-btn-card">Delete</div>
        `;

        tasksContainer.appendChild(taskCard);
    });

    return tasksContainer;
}


export default function projectDetails(id) {
    document.getElementById("content").innerHTML = "";
    let storedProject = JSON.parse(localStorage.getItem("Projects")).filter((project)=> project.id === id);
    document.getElementById("content").appendChild(listTasks(storedProject[0].tasks));

    document.getElementById("content-header").textContent = storedProject[0].name;

}