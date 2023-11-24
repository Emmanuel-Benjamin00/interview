import React, { useState } from 'react';
import AxiosService from '../common/ApiService';
import { useNavigate } from 'react-router-dom';


function DataFeed() {

  const navigate = useNavigate()
  const initialFormData = {
    topic: '',
    ques: '',
    ans: '',
  };

  let [formData, setFormData] = useState(initialFormData);

  let validateLogin = async () => {
    try {
      let res = await AxiosService.post('/user/create', formData);

      if (res.status === 201) {
        console.log('done');
        // Clear the form data after successful submission
        setFormData(initialFormData);
      } else {
        console.log('Server returned an error:', res.data); // Log the error from the server
      }
    } catch (error) {
      console.error('An error occurred during the request:', error);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: '100vw' }}>
      <label htmlFor="exampleDataList" className="form-label">
        Datalist example
      </label>
      <input
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
        style={{ width: '60vw' }}
        value={formData.topic}
        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
      />
      <datalist id="datalistOptions">
        <option value="HTML/CSS" />
        <option value="Javascript" />
        <option value="React" />
        <option value="Nodejs" />
        <option value="MongoDB" />
      </datalist>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Question
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          style={{ width: '60vw', height: '10vh' }}
          value={formData.ques}
          onChange={(e) => setFormData({ ...formData, ques: e.target.value })}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea2" className="form-label">
          Answer
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea2"
          rows="3"
          style={{ width: '60vw', height: '25vh' }}
          value={formData.ans}
          onChange={(e) => setFormData({ ...formData, ans: e.target.value })}
        ></textarea>
      </div>

      <div className="d-grid">
        <button className="btn btn-success text-uppercase mb-2" onClick={() => validateLogin()}>
          Submit
        </button>
        <button className="btn btn-success text-uppercase mb-2" onClick={() => navigate("/")}>
         Back
        </button>
      </div>
    </div>
  );
}

export default DataFeed;
