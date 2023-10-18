const newTask = document.getElementById("new-task");
const submitButton = document.getElementById("submit");
const incompleteTasks = document.getElementById("notDoneTasks");
const completeTasks = document.getElementById("doneTasks")

// const wheelOption = document.getElementsByClassName("wheel-option");
const wheelButton = document.getElementById("wheel-button");

const incomplete = [];
const complete = [];
var incompleteIndex = 0;
var completeIndex = 0;

function addTask() {
    let potentialTask = newTask.value.trim();
    if (potentialTask === "") {
        alert("Please add a task");
    }
    else if (incomplete.indexOf(potentialTask) != -1)
    {
        alert("Task currently exists in list");
    }
    else
    {
        incomplete.push(potentialTask);
        updateTaskList();

        if (incompleteTasks.style.display === "") {
            incompleteTasks.style.display = "block";
        }
    }
    newTask.value = null;
    
}

function completeTask(index) {
    // console.log(index);
    // console.log(incomplete[index]);
    
    complete.push(incomplete[index]);
    incomplete.splice(index, 1);
    
    // console.log(incomplete);
    // console.log(complete);
    
    refreshTaskList();
}

function redoTask(index) {
    // console.log(index);
    // console.log(complete[index]);

    incomplete.push(complete[index])
    complete.splice(index, 1);

    refreshTaskList();
}

function deleteTask() {
    var taskList = document.getElementById("task-list");
    if (incomplete.length == 0 && complete.length == 0) {
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
        taskCheck.setAttribute("id", incomplete[incompleteIndex]);
        taskCheck.setAttribute("value", incompleteIndex);
        taskCheck.addEventListener("click", function() { completeTask(taskCheck.value); });
        incompleteIndex += 1;

        var taskLabel = document.createElement("label");
        taskLabel.setAttribute("for", newTask.value);
        taskLabel.setAttribute("id", incomplete[incompleteIndex] + "2");
        var taskText = document.createTextNode(newTask.value);
        taskLabel.appendChild(taskText);

        incompleteTasks.appendChild(taskCheck);
        incompleteTasks.appendChild(taskLabel);

        var brk = document.createElement("br");
        incompleteTasks.appendChild(brk);
}

function refreshTaskList() {
    incompleteTasks.innerHTML = "";
    completeTasks.innerHTML = "";
    for (let i = 0; i < incomplete.length; i++)
    {
        var taskCheck = document.createElement("input");
        taskCheck.setAttribute("type", "checkbox");
        taskCheck.setAttribute("class", "checkBox");
        taskCheck.setAttribute("id", incomplete[i]);
        taskCheck.setAttribute("value", i);
        taskCheck.addEventListener("click", function() { completeTask(taskCheck.value); });

        var taskLabel = document.createElement("label");
        taskLabel.setAttribute("for", incomplete[i]);
        taskLabel.setAttribute("id", incomplete[i] + "2");
        var taskText = document.createTextNode(incomplete[i]);
        taskLabel.appendChild(taskText);

        incompleteTasks.appendChild(taskCheck);
        incompleteTasks.appendChild(taskLabel);

        var brk = document.createElement("br");
        incompleteTasks.appendChild(brk);
    }

    for (let i = 0; i < complete.length; i++)
    {
        var taskCheck = document.createElement("input");
        taskCheck.setAttribute("type", "checkbox");
        taskCheck.checked = 1;
        taskCheck.setAttribute("class", "checkBox");
        taskCheck.setAttribute("id", complete[i]);
        taskCheck.setAttribute("value", i);
        taskCheck.addEventListener("click", function() { redoTask(taskCheck.value); });

        var taskLabel = document.createElement("label");
        taskLabel.setAttribute("for", complete[i]);
        taskLabel.setAttribute("id", complete[i] + "2");
        var taskText = document.createTextNode(complete[i]);
        taskLabel.appendChild(taskText);

        completeTasks.appendChild(taskCheck);
        completeTasks.appendChild(taskLabel);

        var brk = document.createElement("br");
        completeTasks.appendChild(brk);
    }

    incompleteIndex = incomplete.length - 1;
}

function spinWheel() {
    console.log("clicked");
}