import React, { useState } from 'react'
import {RiCloseLine} from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { closeModal } from '../features/courses/courseSlice';


const EditModal = ({_id,name,number_of_lessons,lesson_completed,hours_spended,hours_needed}) => {


const [valeus,selValues]= useState({
  name:name?name:"",
  number_of_lessons:number_of_lessons?number_of_lessons:"",
  lesson_completed:lesson_completed?lesson_completed:"",
  hours_spended:hours_spended?hours_spended:"",
  hours_needed:hours_needed?hours_needed:""

})

const dispatch= useDispatch();

  return (
    <div className='modal-edit'>
        <div className='edit-form'>
        <div className='w-100 d-flex justify-content-end mb-2'>
            <button className='bg-danger text-white border-0 rounded' onClick={()=>{dispatch(closeModal())}}><RiCloseLine/></button>
        </div>
        <h4 className="text-center bg-info py-2 text-white mb-3 rounded">Edit course</h4>
        <form>
          <div className="form-group text-left my-4">
            <input
              type="text"
              name='name'
              className="form-control"
              placeholder="Enter course name"
              value={valeus.name}
            //   onChange={handleChange}
            />
          </div>
          <div className="form-group text-left my-4">
            <input
              type="number"
              className="form-control"
              name="number_of_lessons"
              placeholder="Enter number of lessons"
              value={valeus.number_of_lessons}
            //   onChange={handleChange}
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
            //   onChange={handleChange}
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
            //   onChange={handleChange}
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
            //   onChange={handleChange}
              min="0" max="100"
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning w-100"
            // disabled={isLoading}
          >
            Update course
          </button>
        </form>
        </div>
    </div>
  )
}

export default EditModal