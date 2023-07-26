const newTask = document.getElementById("new-task");
const submitButton = document.getElementById("submit");
const recordedTasks = document.getElementById("tasks");
// const wheelOption = document.getElementsByClassName("wheel-option");
const wheelButton = document.getElementById("wheel-button");

const notDone = [];
const done = [];
var notDoneIndex = 0;
var doneIndex = 0;

function addTask() {
    // var newTask = document.getElementById("new-task");
    if (newTask.value === "") {
        alert("Please add a task");
    }
    else if (notDone.indexOf(newTask.value) != -1)
    {
        alert("Task currently exists in list");
    }
    else
    {
        notDone.push(newTask.value);
        updateTaskList();

        if (recordedTasks.style.display === "") {
            recordedTasks.style.display = "block";
        }
    }
    newTask.value = null;
    
}

function completeTask(index) {
    done.push(notDone[index]);
    delete notDone[index];
    refreshTaskList();
}

function deleteTask() {
    var taskList = document.getElementById("task-list");
    if (notDone.length == 0 && done.length == 0) {
        taskList.style.display = "";
    }
    else {
        refreshTaskList();
    }
}

function updateTaskList() {

        var taskCheck = document.createElement("input");
        taskCheck.setAttribute("type", "checkbox");
        taskCheck.setAttribute("id", "checkBox");
        taskCheck.setAttribute("value", notDoneIndex);
        notDoneIndex += 1;

        var taskLabel = document.createElement("label");
        taskLabel.setAttribute("for", newTask.value);
        var taskText = document.createTextNode(newTask.value);
        taskLabel.appendChild(taskText);

        recordedTasks.appendChild(taskCheck);
        recordedTasks.appendChild(taskLabel);

        var brk = document.createElement("br");
        recordedTasks.appendChild(brk);
}

function refreshTaskList()
{
    for (let i = 0; i < notDone.length; i++)
    {
        var taskCheck = document.createElement("input");
        taskCheck.setAttribute("type", "checkbox");
        taskCheck.setAttribute("id", "checkBox");
        taskCheck.setAttribute("value", i)

        var taskLabel = document.createElement("label");
        taskLabel.setAttribute("for", notDone[i]);
        var taskText = document.createTextNode(notDone[i]);
        taskLabel.appendChild(taskText);

        recordedTasks.appendChild(taskCheck);
        recordedTasks.appendChild(taskLabel);

        var brk = document.createElement("br");
        recordedTasks.appendChild(brk);
    }
    notDoneIndex = notDone.length - 1;
}

function spinWheel() {

}