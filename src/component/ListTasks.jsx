import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ListTasks() {
  const [listTask, setListTask] = useState([])

  const handleDelete = (id) => {
    window.confirm("Comfirm") ?
    axios.delete("http://localhost:3000/tasks/" + id)
      .then(res => {
        if (res.status == 200) {
          setListTask(listTask.filter((task) => task.id !== id))
        } else {
          alert("Failed")
        }
      }) : <div></div>

  }

  useEffect(() => {
    axios.get("http://localhost:3000/tasks")
      .then(res => setListTask(res.data))
  },[])
  return (
    <>

      <div className='ContainerListTask'>
        {
          listTask?.length > 0 ? (listTask.map((item) => <li className='renderTask' key={item.id}  style={item.checkReminder ? {borderLeft:"5px solid green"} : {}} >
            <div className='detailTask' >
              <h4> {item.task}</h4>
              <p>{item.date}</p>
            </div>
            <div className='markcontainer' >
              <i onClick={() => handleDelete(item.id)} className="fa-sharp fa-solid fa-xmark markX"></i>
            </div>
          </li>)) : (<p style={{margin:"10px auto"}}>No task to show</p>)
        }
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <p  >MiniProject API & Asynchronous 2023 
            
            </p> <br/>
          <Link  to="/about">About</Link>
        </div>
      </div>
    </>

  )
}
