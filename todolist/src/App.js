import './App.css';
import React, { useState } from 'react';

function App() {
  const [notDone, setNotDone] = useState([]);

  function addTask() {
    const taskInput = document.getElementById("task");
    const newTask = taskInput.value;
    setNotDone(prevNotDone => [...prevNotDone, newTask]);
    taskInput.value = "";
  }

  return (
    <div className="App">
      <body className="App-header">
        <form onSubmit={(e) => e.preventDefault()}>
          <label for="task">Task </label>
          <input type="text" id="task"></input>
          <button onClick={addTask}>Submit</button>
        </form>
        <ul>
          {notDone.map(task => <li key={task}>{task}</li>)}
        </ul>
      </body>
    </div>
  );
}

export default App;
