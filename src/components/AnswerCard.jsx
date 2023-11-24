import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function AnswerCard(props){
    const navigate = useNavigate()
     return (
         <>
             <div className="container-md page ps-2 ms-1 mt-4">
                 <div className="card text-bg-light  ms-4" style={{ width: "28rem",  maxHeight: "fit-content" }}>
                     <div className="card-body">
                         <h5 className="card-title">{props.quesans.ques}</h5>
                         <p className="card-text">{props.quesans.ans}</p>
                     </div>
                 </div>
             </div>
             <Button style={{height:"fit-content"}} onClick={()=>navigate("/data")}>Data</Button>
         </>
     )
 }

export default AnswerCard