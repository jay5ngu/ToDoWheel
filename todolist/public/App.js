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
    console.log(index);
    console.log(notDone[index]);
    
    done.push(notDone[index]);
    notDone.splice(index, 1);
    
    console.log(notDone);
    console.log(done);
    
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
        taskCheck.setAttribute("class", "checkBox");
        taskCheck.setAttribute("id", notDone[notDoneIndex]);
        taskCheck.setAttribute("value", notDoneIndex);
        taskCheck.addEventListener("click", function() { completeTask(taskCheck.value); });
        notDoneIndex += 1;

        var taskLabel = document.createElement("label");
        taskLabel.setAttribute("for", newTask.value);
        taskLabel.setAttribute("id", notDone[notDoneIndex] + "2");
        var taskText = document.createTextNode(newTask.value);
        taskLabel.appendChild(taskText);

        recordedTasks.appendChild(taskCheck);
        recordedTasks.appendChild(taskLabel);

        var brk = document.createElement("br");
        recordedTasks.appendChild(brk);
}

function refreshTaskList() {
    recordedTasks.innerHTML = "";
    for (let i = 0; i < notDone.length; i++)
    {
        var taskCheck = document.createElement("input");
        taskCheck.setAttribute("type", "checkbox");
        taskCheck.setAttribute("class", "checkBox");
        taskCheck.setAttribute("id", notDone[i]);
        taskCheck.setAttribute("value", i);
        taskCheck.addEventListener("click", function() { completeTask(taskCheck.value); });

        var taskLabel = document.createElement("label");
        taskLabel.setAttribute("for", notDone[i]);
        taskLabel.setAttribute("id", notDone[i] + "2");
        var taskText = document.createTextNode(notDone[i]);
        taskLabel.appendChild(taskText);

        recordedTasks.appendChild(taskCheck);
        recordedTasks.appendChild(taskLabel);

        var brk = document.createElement("br");
        recordedTasks.appendChild(brk);
    }

    for (let i = 0; i < done.length; i++)
    {
        var taskCheck = document.createElement("input");
        taskCheck.setAttribute("type", "checkbox");
        taskCheck.checked = 1;
        taskCheck.setAttribute("class", "checkBox");
        taskCheck.setAttribute("id", done[i]);
        taskCheck.setAttribute("value", i);
        taskCheck.addEventListener("click", function() { completeTask(taskCheck.value); });

        var taskLabel = document.createElement("label");
        taskLabel.setAttribute("for", done[i]);
        taskLabel.setAttribute("id", done[i] + "2");
        var taskText = document.createTextNode(done[i]);
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