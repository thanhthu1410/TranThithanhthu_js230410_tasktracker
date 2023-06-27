import React, { useEffect, useState } from 'react'
import ListTasks from './ListTasks'
import axios from 'axios'

export default function Body() {
    const [newTask, getNewTask] = useState("")
    const [date, setDate] = useState("")
    const [isAdd, setIsAdd] = useState(false)
    const [task, setTask] = useState([])
    const [isReminder,setIsReminder] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:3000/tasks")
            .then(task => setTask(task.data))
    }, [])

    const handleCheckBox = () =>{
        setIsReminder(!isReminder)   
    }
    console.log(isReminder);
    const addTask = (task, date,reminder) => {
        axios.post("http://localhost:3000/tasks", {
            "task": task,
            "date": date,
            "checkReminder" : isReminder
        })
            .then(addtask => setTask([...task, addtask.data]))         
    }
    return (
        <div className='Layout'>
            <div className='headerContainer'>
                <h2>Task Tracker</h2>
                <div>
                    {
                        isAdd ? <button className='addButton' onClick={() => setIsAdd(!isAdd)} > ADD</button>
                            : <button className='closeButton' onClick={() => setIsAdd(!isAdd)}>CLOSE </button>
                    }
                </div>
            </div>

            {!isAdd ? (<form className='form'>
                <label htmlFor="task">Task :</label> <br />
                <input type="text" placeholder='Task' id='task' value={newTask} onChange={(e) => getNewTask(e.target.value)} /><br />
                <label htmlFor="" > Date & Time :</label><br />
                <input type="date" placeholder='Add Day & Time' value={date} onChange={(e) => setDate(e.target.value)} /><br />
                <div className='checkboxInput'>
                    <span>Reminder</span>
                    <input type="checkbox" checked={isReminder} onChange={handleCheckBox} />
                </div>
                <button onClick={() => newTask !== "" || date !== "" ? addTask(newTask, date, isReminder
                    ) : alert("Enter Task and Time")}>Save Task</button>

            </form>) : (<div></div>)}
            <ListTasks />
        </div>

    )
}
