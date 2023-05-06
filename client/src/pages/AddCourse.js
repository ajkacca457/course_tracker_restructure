import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Navigation from '../components/Navigation';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCourse } from '../features/courses/courseSlice';

const AddCourse = () => {

  const [valeus,setValues]= useState({
    name:"",
    number_of_lessons:"",
    lesson_completed:"",
    hours_needed:"",
    hours_spended:""
  })

  const dispatch= useDispatch();
  const navigate= useNavigate();


  const handleSubmit = e => {
    e.preventDefault();
    const {name,number_of_lessons,lesson_completed,hours_needed,hours_spended}=valeus;

    if(!name || !number_of_lessons|| !lesson_completed|| !hours_needed||!hours_spended) {
      toast.warning("please provide all the fields");
      return;
    }

    const data= {
      url:`/courses`,
      course:{
        name,number_of_lessons,lesson_completed,hours_needed,hours_spended
      }
    }

    dispatch(createCourse(data));
    navigate("/dashboard");
  };

  const handleChange=(e)=>{
    e.preventDefault();
    setValues({...valeus,[e.target.name]:e.target.value});
  }


  return (
    <div className="page-container">
      <div className="bg-white mx-auto p-2 rounded courseitem w-50">
        <h4 className="text-center bg-info py-2 text-white mb-3 rounded">Add new course</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group text-left my-4">
            <input
              type="text"
              name='name'
              className="form-control"
              placeholder="Enter course name"
              value={valeus.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group text-left my-4">
            <input
              type="number"
              className="form-control"
              name="number_of_lessons"
              placeholder="Enter number of lessons"
              value={valeus.number_of_lessons}
              onChange={handleChange}
              min="0" max="100"
            />
          </div>

          <div className="form-group text-left my-4">
            <input
              type="number"
              className="form-control"
              name="lesson_completed"
              placeholder="Number of lessons completed"
              value={valeus.lesson_completed}
              onChange={handleChange}
              min="0" max="100"
            />
          </div>

          <div className="form-group text-left my-4">
            <input
              type="number"
              className="form-control"
              name="hours_needed"
              placeholder="hours needed to complete the course"
              value={valeus.hours_needed}
              onChange={handleChange}
              min="0" max="100"
            />
          </div>

          <div className="form-group text-left my-4">
            <input
              type="number"
              className="form-control"
              name="hours_spended"
              placeholder="hours spend on the course"
              value={valeus.hours_spended}
              onChange={handleChange}
              min="0" max="100"
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