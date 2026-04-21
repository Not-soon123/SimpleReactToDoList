import { useState } from "react";
import "./body.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Body() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function addTask() {
    if (task.trim() === "") return;
    setTaskList([...taskList, task]);
    setTask("");
  }

  function handleChange(e) {
    setTask(e.target.value);
  }

  return (
    <div className="container">
      <h1>ToDo-List</h1>

      <div className="btn-input">
        <input
          type="text"
          placeholder="Add your Task"
          value={task}
          onChange={handleChange}
        />

        <button className="button" onClick={addTask}>
          Add Task
        </button>
      </div>

      <ul>
        {taskList.map((item, index) => (
          <li key={index} className="task-item">
            <span>{item}</span>

            <i className="bi bi-pencil-square edit-icon"></i>

            <i className="bi bi-trash delete-icon"></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Body;