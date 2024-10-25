

class TaskController {

    createTask(){
        let taskImportance = "";
        if (document.getElementById("importance-!").checked){
            taskImportance = "!";
        } else if (document.getElementById("importance-!!").checked){
            taskImportance = "!!";
        } else if (document.getElementById("importance-!!!").checked) {
            taskImportance = "!!!";
        }

        let task = {
            id : new Date().valueOf(),
            name : document.getElementById("task-form-name-input").value,
            detail: document.getElementById("task-form-detail-input").value,
            importance: taskImportance,
            assignedProjectId: document.getElementById("task-form-select-input").value,
            isDone: false
        }
        let taskArray = JSON.parse(localStorage.getItem("Tasks")) || [];
        taskArray.push(task);
        localStorage.setItem("Tasks", JSON.stringify(taskArray));
    }

    getTasks(){
        return JSON.parse(localStorage.getItem("Tasks")) || [];
    }

    deleteTask(id) {
        let taskArray = JSON.parse(localStorage.getItem("Tasks")) || [];
        let newArr = taskArray.filter((task)=>task.id != id);
        localStorage.setItem("Tasks", JSON.stringify(newArr));
    }

    updateTask(taskId){
        let taskArr = this.getTasks();
        taskArr.forEach(task => {

            if (task.id == taskId){
                let taskImportance = "";
                if (document.getElementById("importance-!").checked){
                    taskImportance = "!";
                } else if (document.getElementById("importance-!!").checked){
                    taskImportance = "!!";
                } else if (document.getElementById("importance-!!!").checked) {
                    taskImportance = "!!!";
                }


                if (document.getElementById("task-form-select-input").value == "done") {
                    task.isDone = true
                } else {
                    task.isDone = false
                }
                
                task.name = document.getElementById("task-form-name-input").value
                task.detail = document.getElementById("task-form-detail-input").value
                task.importance = taskImportance
            }
        });
        localStorage.setItem("Tasks", JSON.stringify(taskArr));
    }
}

export const taskController = new TaskController();