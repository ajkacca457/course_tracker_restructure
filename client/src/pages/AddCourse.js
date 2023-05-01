import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Navigation from '../components/Navigation';
const AddCourse = () => {
//   const [name, setName] = useState('');
//   const [numberoflessons, setNumberoflessons] = useState('');
//   const [lessoncompleted, setLessoncompleted] = useState('');
//   const [hoursneed, setHoursneed] = useState('');
//   const [hoursspend, setHoursspend] = useState('');
//   const history = useHistory();


  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="logincont">
      <div className="bg-white mx-auto p-2 rounded courseitem">
        <h4 className="text-center bg-info py-2 text-white mb-3 rounded">Add new course</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group text-left my-4">
            <input
              type="text"
              className="form-control"
              id="course-name"
              placeholder="Enter course name"
            />
          </div>
          <div className="form-group text-left my-4">
            <input
              type="number"
              className="form-control"
              id="numberoflessons"
              placeholder="Enter number of lessons"
            />
          </div>

          <div className="form-group text-left my-4">
            <input
              type="number"
              className="form-control"
              id="lessoncompleted"
              placeholder="Number of lessons completed"
            />
          </div>

          <div className="form-group text-left my-4">
            <input
              type="number"
              className="form-control"
              id="hoursneeded"
              placeholder="hours needed to complete the course"
            />
          </div>

          <div className="form-group text-left my-4">
            <input
              type="number"
              className="form-control"
              id="hoursspend"
              placeholder="hours spend on the course"
            />
          </div>

          <button
            type="submit"
            className="btn btn-info w-100"
          >
            Create course
          </button>
        </form>
      </div>
      <Navigation/>
    </div>
  );
};

export default AddCourse;