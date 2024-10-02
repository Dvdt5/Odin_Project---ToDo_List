
function delTask(project ,taskId){
    let remainingTasks = JSON.parse(localStorage.getItem("Tasks")).filter((task)=>taskId != task.id);
    document.getElementById(taskId).remove();

    localStorage.setItem("Tasks", JSON.stringify(remainingTasks));
    document.getElementById("content").appendChild(listTasks(project));
}

function listTasks(project) {
    let tasks = JSON.parse(localStorage.getItem("Tasks")).filter((task)=>project.tasks.includes(task.taskTitle));

    
    const tasksContainer = document.createElement("div");
    tasksContainer.id = "tasks-container";
    
    tasks.forEach(task => {
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");
        taskCard.id = task.id;
        
        taskCard.innerHTML = `
        <p class="task-card-title">${task.taskTitle}</p>
        <p class="task-card-detail">${task.taskDetail ? task.taskDetail : "No detail informed."}</p>
        <p class="task-card-date">${task.taskDate}</p>
        `;

        const taskDoneBtn = document.createElement("div");
        taskDoneBtn.classList.add("toggle-status-btn");
        taskDoneBtn.textContent = task.isDone ? "Done" : "Not Done";
        if(task.isDone){
            taskDoneBtn.classList.add("task-done");
        }
        taskCard.appendChild(taskDoneBtn);
        taskDoneBtn.addEventListener("click" ,()=>{
            
            let storedTasks = JSON.parse(localStorage.getItem("Tasks"));
            storedTasks.forEach((storedTask)=>{
                if (storedTask.id === task.id){
                    storedTask.isDone = storedTask.isDone ? false : true;
                }
            });
            localStorage.setItem("Tasks",JSON.stringify(storedTasks));
            
            
            task.isDone = task.isDone ? false : true;
            
            taskDoneBtn.classList.toggle("task-done");
            taskDoneBtn.textContent = task.isDone ? "Done" : "Not Done";
        });

        const delTaskBtn = document.createElement("div");
        delTaskBtn.classList.add("del-task-btn-card");
        delTaskBtn.textContent = "Delete";
        delTaskBtn.addEventListener("click",()=>{
            delTask(project ,task.id);
            
        });

        taskCard.appendChild(delTaskBtn);
        
        tasksContainer.appendChild(taskCard);
    });

    if (tasks.length === 0) {
        const noTaskLeftText = document.createElement("p");
        noTaskLeftText.classList.add("no-projects-text");
        noTaskLeftText.textContent = "No task assigned";
        tasksContainer.innerHTML = "";
        tasksContainer.appendChild(noTaskLeftText);
    }

    return tasksContainer;
}


export default function projectDetails(id) {
    document.getElementById("content").innerHTML = "";
    let storedProject = JSON.parse(localStorage.getItem("Projects")).filter((project)=> project.id === id);
    document.getElementById("content").appendChild(listTasks(storedProject[0]));

    document.getElementById("content-header").textContent = storedProject[0].name;

}