const newTask = document.getElementById("new-task");
const submitButton = document.getElementById("submit");
const recordedTasks = document.getElementById("tasks");
// const wheelOption = document.getElementsByClassName("wheel-option");
const wheelButton = document.getElementById("wheel-button");

const notDone = [];
const done = [];

function addTask() {
    // var newTask = document.getElementById("new-task");
    if (newTask.value === "") {
        alert("Please add a task");
    }
    else
    {
        notDone.push(newTask.value);
        if (recordedTasks.style.display === "") {
            recordedTasks.style.display = "block";
        } 
        newTask.value = null;
        console.log(notDone);
    }
    
}

function completeTask(index) {
    done.push(notDone[index]);
    delete notDone[index];
}

function deleteTask() {
    var taskList = document.getElementById("task-list");
    if (notDone.length == 0 && done.length == 0) {
        taskList.style.display = "none";
    } 
    else {
        taskList.style.display = "block";
    }
}

function spinWheel() {

}