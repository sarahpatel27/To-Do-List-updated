import React, { useState } from 'react';
import EditTask from '../Modals/EditTask';

const Card = ({taskObj,index,deleteTask, editTasks}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal)

    const handleDelete = () => {
        deleteTask(index);
    }

     const editTask = (obj) =>
     {
        editTasks(obj, index)
     }

    const currDate = new Date();
    const dueDateObj = new Date(taskObj.DueDate)
    const isDueDatePass = dueDateObj < currDate
    let redColor = { color: "red" };
    const greenColor = { color: "green"};

    return (
        <div className='cardWrapper mr-5' style={{marginLeft:"40px"}}>
            <div className='cardTop'></div>
                <div className='taskHolder'>
                <h1  style={{bcolor:"white", marginTop:"6px",fontSize:"17px",borderRadius:"10px",width:"250px",height:"30px"}}> {taskObj.Name}    </h1>         
                <p className='cardDescription'>{taskObj.Description}</p>
                <p style={isDueDatePass ? redColor : greenColor} className='cardDescription'>{taskObj.DueDate}</p>               
                <div style={{position: "absolute", right:"20px",bottom:"20px"}}>
                     <button onClick={()=> setModal(true)} style={{backgroundColor:"orange", margin:"4px",fontSize:"20px",border:"0"}}>Edit</button>
                    <button onClick={handleDelete} style={{backgroundColor:"red",fontSize:"20px",border:"0",color:"white"}}>Delete</button>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} editTask = {editTask} taskObj = {taskObj}/>
            </div>
    )};
            

export default Card;
