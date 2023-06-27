import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom'

export default function About() {
    const [comment,setComments] = useState("")
    const [listComments,setListComments] = useState(JSON.parse(localStorage.getItem("listComments"))|| [])
   
    const handleSend = () => {
        if (comment != "") {
            setListComments([...listComments,comment]) 
            localStorage.setItem("listComments",JSON.stringify(listComments))
            setComments("")
            
        }
    }
    useEffect(() => {
        console.log("listComment effect", listComments)
    }, [listComments])
    return (
        <div style={{ marginTop: "150px" }}>

            <Link to="/"> Back to Task Tracker</Link>
            <h3>What do you think about my project ?</h3>
            <textarea  style={{width:"400px",resize:"none",padding:"15px"}} name="" id="" cols="30" rows="5" value={comment} placeholder='Enter comments....' onChange={(e)=>setComments(e.target.value)}></textarea> <br></br>
            <button onClick={handleSend} style={{padding:"10px 20px",background:"black",color:"#fff"}}>Send</button>
            <div style={{marginTop:"20px"}}>
                <h4>List comments:</h4>
                {listComments.map((item)=>
                <li>{item}</li>)}
            </div>
        </div>
    )
}
