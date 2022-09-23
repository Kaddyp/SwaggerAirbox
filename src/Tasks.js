import React from "react";
import Task from "./Task";
/* Map Tasks */
const Tasks = ({tasks}) =>{
    return(
        <div className="row">
            {tasks.map((task) => {
                return (
                    <Task task={task} key={task.AbxTaskId} />
                );
            })}

        </div>
    ); 
}
export default Tasks;