import React, { useState , useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({modal, toggle, editTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleChange = (e) => {
        const{name, value} = e.target
        if (name === 'taskName'){
            setTaskName(value); 
        }else if(name === 'taskDesc'){
            setTaskDesc(value);
        }else{
            setDueDate(value);
        }
    }

    useEffect(() => {
      setTaskName(taskObj.Name)
      setTaskDesc(taskObj.Description)
      setDueDate(taskObj.DueDate)
  },[])

    const handleEdit = (e) => {
        e.preventDefault()
        let tmpObj = {}
        taskObj["Name"] = taskName;
        taskObj["Description"] = taskDesc;
        taskObj["DueDate"] = dueDate;
        editTask(tmpObj)
        toggle() 
    }

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
      <ModalBody>
        <form>
            <div className="form-group">
                <label>Task Title</label>
                <input type="text" className="form-control"  value={taskName} onChange={handleChange} name="taskName"/>
            </div>
            <div className="form-group">
                <label>Task Description</label>
            <textarea rows='3' className="form-control" value={taskDesc} onChange={handleChange} name="taskDesc"></textarea>
            </div>
            <div>
                <label>Due Date</label>
                <input type ="date" className="form-control" value={dueDate} onChange={handleChange} name="dueDate"/>
            </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button className="btn btn-warning" onClick={handleEdit}>
          Update Task</Button>
        <Button className="btn btn-warning" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
