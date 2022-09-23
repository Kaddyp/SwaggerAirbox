import { useState } from "react";
/* New Task Code TaskAdd function*/
const TaskAdd = (props) =>{
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [summary, setSummary] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [taskStatus, setTaskStatus] = useState("");

  const saveTask = (e) => {
    e.preventDefault();
    props.onAddNewTask({
        AbxTaskId: props.length + 1,
        OrganisationTaskId: 301,
        OrganisationId: 300,
        priority: priority,
        taskStatus: taskStatus,
        assignedto: assignedTo,
        timestamp: new Date().toLocaleString(),      
        latitude: 0,
        maximum: 0,
        longitude: 0,
        tasksummary: summary,
        taskdescription: description
    });
    setDescription("");
    setPriority("");
    setSummary("");
    setAssignedTo("");
    setTaskStatus("");
  };
  return (
    <div className="card p-3">
      <h3 className="text-center">Add Task</h3>
      <form>

        <div className="mb-3">
            <label htmlFor="description" className="form-label">Task Description</label>
            <input type="text" className="form-control form-control-sm" 
             name="description"
             id="description"
             value={description}
             onChange={(e) => setDescription(e.target.value)}/>
        </div>

        <div className="mb-3">
            <label htmlFor="summary" className="form-label">Task Summary</label>
            <input type="text" className="form-control form-control-sm" 
             name="summary"
             id="summary"
             value={summary}
             onChange={(e) => setSummary(e.target.value)}/>
        </div>

        <div className="mb-3">
            <label htmlFor="assignedTo" className="form-label">AssignedTo</label>
            <input type="text" className="form-control form-control-sm" 
             name="assignedTo"
             id="assignedTo"
             value={assignedTo}
             onChange={(e) => setAssignedTo(e.target.value)}/>
        </div>

        <div className="mb-3">
            <label htmlFor="taskStatus" className="form-label">Task Status</label>
            <input type="text" className="form-control form-control-sm" 
             name="taskStatus"
             id="taskStatus"
             value={taskStatus}
             onChange={(e) => setTaskStatus(e.target.value)}/>
        </div>

        <div className="mb-3">
            <label htmlFor="description" className="form-label">Priority</label>
            <select className="form-select form-select-sm mb-3" name="priority" id="priority" defaultValue={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="LOW">LOW</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="HIGH">HIGH</option>
            </select>
        </div>

        <div className="text-right">
          <button className="btn btn-success" onClick={saveTask}>
            Save
          </button>
        </div>
        
      </form>
    </div>
  );
}

export default TaskAdd;