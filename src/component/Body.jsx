import { useState } from "react";
import "./body.css";

function Body(){
   const [task, setTask] = useState("");
   const [taskList, setTaskList] = useState([]);

   function addTask(){
    if(task.trim() === "") return; // Prevent adding empty tasks)
    setTaskList([...taskList, task]);
    setTask("");
   }

   function handleChange(e){
    setTask(e.target.value);
   }

    return(
        <div className="container">
            <h1>ToDo-List</h1>
            <div className="btn-input">
                 <input type="text" 
                   placeholder="Add your Task"
                   value={task}
                   onChange={handleChange} />
            <button className="button" onClick={addTask}>Add Task</button>
            </div>
           
            <ul>
                {taskList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
     )
}

export default Body;