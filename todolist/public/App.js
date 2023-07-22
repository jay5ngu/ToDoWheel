import './App.css';
  const notDone = []
  const setNotDone = [];

  function addTask() {
    const taskInput = document.getElementById("task");
    const newTask = taskInput.value;
    notDone.push(newTask)
  }


