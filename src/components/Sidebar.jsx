import React, { useState, useEffect } from 'react'
import AxiosService from '../common/ApiService'
import Ques from './Ques'

function Sidebar() {
    let [data, setData] = useState([])
    const [selectTopic, setSelectTopic] = useState([])

    let getUsers = async () => {
        try {
            let res = await AxiosService.get(`/user/get`)
            console.log(res.data)
            if (res.status === 200) {
                setData(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    const topicSelect = (topic) => {
        const selectedTopic = data.filter((st) => st.topic === topic);
        setSelectTopic(selectedTopic)
        console.log(selectedTopic)
    }


    return (
        <>
            <div className='d-flex'>
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary me-5" style={{ width: "200px" }}>
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <span className="fs-4">Topics</span>
                    </a>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        {
                            [...new Set(data.map(topics => topics.topic))].map(uniqueTopic => (
                                <li className="nav-item" key={uniqueTopic}>
                                    <a className="nav-link pointer" aria-current="page" onClick={() => topicSelect(uniqueTopic)}>
                                        {uniqueTopic}
                                    </a>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                <Ques heading={selectTopic} />
            </div>
        </>
    )
}

export default Sidebar