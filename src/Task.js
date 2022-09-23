import React from "react";
import { Link } from 'react-router-dom';
/* Display Task */
const Task = ({ task }) => {
    return (
      <Link key={task.AbxTaskId} to={`/tasks/${task.AbxTaskId}`} className='text-dark'>
        <div className="card text-left my-3 p-3" key={task.AbxTaskId}>
          <div className="row">
            <div className="col-10">
              <h4>{task.taskdescription}</h4>              
            </div>  
            <div className="col-2 is-center">
              <button className="btn btn-success">
                  Assigned To : {task.assignedto}
              </button>
            </div>            
          </div>
        </div>
      </Link>
    );
  }
  
export default Task;