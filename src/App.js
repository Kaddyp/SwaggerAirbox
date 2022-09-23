import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate} from "react-router-dom";
import { TasksContext } from './tasks-context';
import Home from './Home';
import TaskDetails from "./TaskDetails";
/* Define App Component Using function */
const App = () => {
    const [tasks, setTasks] = useState([]);
    /* React Hooks */
    useEffect(()=>{
        /*fetch(url,{
            method:'GET',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then((res) =>  res.json())
        .then((data) => {
          setTasks(data);        //return array of tasks   
        });*/
    });
    
    const onAddNewTask = (obj) =>{
        console.log("Task Created!");
        /*fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then((res) =>  res.json())
        .then((data) => {
          setTasks([
            ...tasks, 
            obj     
          ]);
          console.log(data.description);   // description: Created
        });*/

        setTasks([...tasks, obj]);
    }
    /* Used React Routing 6 */
    return (
        <TasksContext.Provider value={[tasks]}>
            <BrowserRouter>
            <div className='container py-3'>
                <Routes>   
                    <Route index element={<Home />} />        
                    <Route exact path="/" element={<Home onAddNewTask={onAddNewTask}/>} />
                    <Route exact path="/tasks/:abxTaskId" element={<TaskDetails/>} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>    
            </BrowserRouter>    
            <Outlet />
        </TasksContext.Provider>
    )
};

export default App;