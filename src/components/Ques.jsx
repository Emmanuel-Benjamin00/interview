import React, { useState, useEffect } from 'react'
import Page from './page'

function Ques({ heading }) {

    const [quesAns, setQuesAns] = useState({})
    console.log(heading)
    const handleClick = (clickedTopic) => {
        const clickedObject = heading.find((ques) => ques.ques === clickedTopic.ques);
        setQuesAns(clickedObject)
        console.log(clickedObject)
    }

    return (
        <>
            <div className='d-flex'>
                <div className="d-flex flex-column flex-shrink-0  bg-body-tertiary" style={{ width: "270px", overflowY: "scroll" }}>
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                        {Array.isArray(heading) && heading.length > 0 && (
                            <span className="fs-5 pb-2">{heading[0].topic}</span>
                        )}
                    </a>
                    <ul className="nav nav-pills flex-column mb-auto">
                        {heading  && heading.map((topic, index) => (
                            <li key={index} className="nav-item">
                                <a href="#" className="nav-link pb-0 pt-0" onClick={() => handleClick(topic)} aria-current="page" >
                                    <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                                    {topic.ques}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <Page quesans={quesAns} />
            </div>
        </>
    )

}

export default Ques