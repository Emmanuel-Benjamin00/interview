import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function AnswerCard(props) {
    const navigate = useNavigate()
    return (
        <>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">{props.quesans.ques}</label>
                <textarea class=" ms-4 form-control" id="exampleFormControlTextarea1" rows="3" value={props.quesans.ans}  style={{ width: "28rem", maxHeight: "fit-content", minHeight:"30rem", background:"white" }} disabled></textarea>
            </div>
            <Button style={{ height: "fit-content" }} onClick={() => navigate("/data")}>Data</Button>
        </>
    )
}

export default AnswerCard