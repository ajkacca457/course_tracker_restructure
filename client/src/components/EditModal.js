import React from 'react'

const EditModal = () => {
  return (
    <div className='modal-edit'>
        <div className='edit-form'>
        <h4 className="text-center bg-info py-2 text-white mb-3 rounded">Edit course</h4>
        <form>
          <div className="form-group text-left my-4">
            <input
              type="text"
              name='name'
              className="form-control"
              placeholder="Enter course name"
            //   value={valeus.name}
            //   onChange={handleChange}
            />
          </div>
          <div className="form-group text-left my-4">
            <input
              type="number"
              className="form-control"
              name="number_of_lessons"
              placeholder="Enter number of lessons"
            //   value={valeus.number_of_lessons}
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
            //   value={valeus.lesson_completed}
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
            //   value={valeus.hours_needed}
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
            //   value={valeus.hours_spended}
            //   onChange={handleChange}
              min="0" max="100"
            />
          </div>

          <button
            type="submit"
            className="btn btn-info w-100"
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