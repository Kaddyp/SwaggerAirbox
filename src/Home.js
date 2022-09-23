import React, {useState, useContext} from 'react';
import { TasksContext } from './tasks-context';
import Tasks from './Tasks';
import TaskAdd from "./TaskAdd";
//const url = "https://api.airboxsystems.com/taskmanager/v1/tasks";
/* Define Home Component */
function Home(props) {
  const [disBtn, setDisBtn] = useState(false);
  const [tasks, ] = useContext(TasksContext);
  /* Child to Parent Function call */
  const onAddNewTask = (obj) =>{
      props.onAddNewTask(obj);     
      setDisBtn(!disBtn);
  }

  return (
    <div className="App">
        <h3>AirBox Task Manager APIs <span className='fs-6'>(V1.0)</span></h3>
        <p className="fs-5">APIs to manage task creation and task retrieval by client devices</p>        
        <div className="row">
            <div className="col-12 px-0 my-2 text-end">
                <button className="btn btn-primary" onClick={() => setDisBtn(!disBtn)} disabled={disBtn}>Create New Task</button>                
            </div>
            {disBtn && <TaskAdd length={tasks.length} onAddNewTask={onAddNewTask}/>}
        </div>
        {tasks.length > 0 && <Tasks tasks={tasks}/>}
    </div>
  );
}

export default Home;