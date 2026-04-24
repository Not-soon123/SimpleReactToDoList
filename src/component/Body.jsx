import { useState } from "react";
import "./body.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { jsPDF } from "jspdf";

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

  function handleDelete(indexTobeDeleted) {
    const newList = taskList.filter((item, index) => index !== indexTobeDeleted);
    setTaskList(newList);
  }

  function handleEdit(indexToBeEdited) {
    const newTask = prompt("Edit your task:", taskList[indexToBeEdited]);
    if (newTask !== null && newTask.trim() !== "") {
      const updatedList = [...taskList];
      updatedList[indexToBeEdited] = newTask;
      setTaskList(updatedList);
    }
  }

  // ✅ PDF DOWNLOAD FUNCTION (IMPROVED)
  function downloadPDF() {
    if (taskList.length === 0) {
      alert("No tasks to download");
      return;
    }

    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(16);
    doc.text("My To-Do List", 10, 10);

    doc.setFontSize(12);

    taskList.forEach((task, index) => {
      if (y > 280) {
        doc.addPage();
        y = 20;
      }

      doc.text(`${index + 1}. ${task}`, 10, y);
      y += 10;
    });

    doc.save("tasks.pdf");
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

            <i
              onClick={() => handleEdit(index)}
              className="bi bi-pencil-square edit-icon"
            ></i>

            <i
              onClick={() => handleDelete(index)}
              className="bi bi-trash delete-icon"
            ></i>
          </li>
        ))}
      </ul>

      {/* ✅ DOWNLOAD BUTTON */}
      <button onClick={downloadPDF} className="download-btn">
        <i className="bi bi-download"></i> Download PDF
      </button>
    </div>
  );
}

export default Body;