import { useState } from "react";

function Body(){
   const [task, setTask] = useState("");
   const [taskList, setTaskList] = useState([]);

   function addTask(){
    setTaskList([...taskList, task]);
    setTask("");
   }

   function handleChange(e){
    setTask(e.target.value);
   }

    return(
        <div className="container">
            <h1>ToDo-List</h1>
            <input type="text" 
                   placeholder="Add your Task"
                   value={task}
                   onChange={handleChange} />
            <button className="button" onClick={addTask}>Add Task</button>
            <ul>
                {taskList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
     )
}

export default Body;