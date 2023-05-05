import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleCourse, deleteCourse } from '../features/courses/courseSlice';
import Loading from '../components/Loading';
import { toast } from 'react-toastify';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const SingleCourse = () => {

    const {isLoading,singlecourse}= useSelector((state)=>state.courses);

    const {name,lesson_completed,number_of_lessons,hours_needed,hours_spended,createdAt}= singlecourse;

    const dispatch= useDispatch();
    const {id}= useParams();
    const percentcom = (lesson_completed / number_of_lessons) * 100;
    const percentrem = 100 - ((lesson_completed / number_of_lessons) * 100);
    const createdat = new Date(createdAt);
    const day = createdat.getDate();
    const month = createdat.getMonth();
    const year = createdat.getFullYear();
    const date = `${day}/${month}/${year}`;

    const navigate= useNavigate();

    const handleDelete=(e)=>{
        e.preventDefault();
        dispatch(deleteCourse(id));
        navigate("/dashboard");
    }

    useEffect(()=>{
        dispatch(getSingleCourse(`/courses/${id}`));
    },[])
    
    if(isLoading){
        return(<Loading/>)
    }


    return (

        <div className='page-container'>
        <div className='bg-warning w-50 text-center py-3 mb-2 rounded'>
            <h3>{name && name}</h3>
                <p className="text-secondary">
                    course created at:
                    {date}
                </p>
        </div>
        <div className="courseinfo">

        <div className="alldetail py-4 rounded">
        <div className="infocontent text-center rounded">
          <div className="percentinfo w-75 d-flex justify-content-between m-auto">
            <div className="percentcomplete p-2 text-white rounded">

              <CircularProgressbar
                value={percentcom.toFixed()}
                text={`${percentcom.toFixed()}%`}
                styles={buildStyles({
                // Colors
                  pathColor: 'green',
                  textColor: 'white',
                  trailColor: 'white',
                  backgroundColor: '#3e98c7',
                })}
              />
              {' '}
              <p className="pt-2">Completed</p>
            </div>
            <div className="percentremain p-2 text-white rounded">
              <CircularProgressbar
                value={percentrem.toFixed()}
                text={`${percentrem.toFixed()}%`}
                styles={buildStyles({
                  // Colors
                  pathColor: 'red',
                  textColor: 'white',
                  trailColor: 'white',
                  backgroundColor: '#3e98c7',
                })}
              />
              <p className="pt-2">Remaining</p>
            </div>
          </div>
          <hr />

          <div className="detailinfo">

            <div className="detailinfo-item bg-info text-white d-flex justify-content-center py-2 mb-2">
              <i className="fas fa-2x fa-book mr-3" />
              <h4>
                Total Lessons :
                {' '}
                {' '}
                {number_of_lessons && number_of_lessons}
              </h4>
            </div>

            <div className="detailinfo-item bg-info text-white d-flex justify-content-center py-2 mb-2">
              <i className="fas fa-2x fa-check-circle mr-3" />
              <h4>
                Lessons Completed :
                {' '}
                {' '}
                {lesson_completed && lesson_completed}
              </h4>
            </div>

            <div className="detailinfo-item bg-info text-white  d-flex justify-content-center py-2 mb-2">
              <i className="fas fa-2x fa-history mr-3" />
              <h4>
                Hours Needed :
                {' '}
                {' '}
                {hours_needed && hours_needed}
              </h4>
            </div>

            <div className="detailinfo-item bg-info text-white  d-flex justify-content-center py-2 mb-2">
              <i className="fas fa-2x fa-hourglass-half mr-3" />
              <h4>
                Hours Spend :
                {' '}
                {' '}
                {hours_spended && hours_spended}
              </h4>
            </div>

          </div>
        </div>

        <div className="btncont my-2 text-center d-flex justify-content-center">
          <button type="button" className="btn btn-success w-25 my-4 mx-4 ubtn">Update Progress</button>
          <button type="button" className="btn btn-danger w-25 my-4 mx-4 ubtn" onClick={handleDelete}>Delete Course</button>
        </div>

      </div>
      </div>
      </div>
    );
};

export default SingleCourse;