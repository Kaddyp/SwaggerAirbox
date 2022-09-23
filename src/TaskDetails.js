import React, { useEffect, useContext, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { TasksContext } from './tasks-context';
//const url = "https://api.airboxsystems.com/taskmanager/v1/tasks";

/* Display Specific Task */
const TaskDetails = () =>{ 
    const [tasks, ] = useContext(TasksContext);
    const [displayTask, setDisplayTask] = useState("");
    let params = useParams();

    useEffect(() => {
        /*fetch(`${url}/${params.abxTaskId}`,{
            method:'GET',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then((res) =>  res.json())
        .then((data) => {
            setDisplayTask(data);        //return array of tasks   
        });
        */
        var item = tasks.find(item => item.AbxTaskId === Number(params.abxTaskId));     
        setDisplayTask(item);

    }, [tasks, setDisplayTask, params]); 

    return(    
        <div className="card">
            <div className="card-header">
                {displayTask.AbxTaskId} {displayTask.taskdescription}                
            </div>
            <div className="card-body">
                <h5 className="card-title">{displayTask.tasksummary}</h5>
                <div className="task-meta">
                    <i className="bi bi-calendar"></i>
                    <span className="px-1">{displayTask.timestamp}</span>
                </div>
                <p className="py-2">Status: <span className="text-warning">{displayTask.taskStatus}</span></p>
                <div className="col-12">
                    <p>{displayTask.priority}</p>
                    <button className='btn btn-danger'><Link className='text-white' to={'/'}>Back</Link></button>
                </div>
            </div>
        </div>
    )
    
}

export default TaskDetails;