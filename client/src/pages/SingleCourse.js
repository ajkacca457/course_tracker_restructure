import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleCourse } from '../features/courses/courseSlice';
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



    useEffect(()=>{
        dispatch(getSingleCourse(`/courses/${id}`));
    },[])
    
    if(isLoading){
        return(<Loading/>)
    }


    return (

        <div className='page-container'>
        <div className="courseinfo">

        <div className="alldetail">
        <div className="infocontent text-center rounded">
          <h3>{name && name}</h3>
          <p className="text-secondary">
            {' '}
            course created at:
            {date}
          </p>
          <hr />
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
          <button type="button" className="btn btn-success w-50 mb-2 mr-2 ubtn">Update Progress</button>
          <button type="button" className="btn btn-danger w-50 mb-2 ubtn">Delete Course</button>
        </div>

      </div>
      </div>
      </div>
    );
};

export default SingleCourse;