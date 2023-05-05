import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { courses } from '../utils/utilsFunc';

const Report = () => {
  const totalcourses = courses.length;
  const totallessons = courses.map(item => item.number_of_lessons).reduce((sum, lessons) => sum + lessons, 0);
  const finishedlessons = courses.map(item => item.lesson_completed).reduce((sum, lessons) => sum + lessons, 0);
  const totalhours = courses.map(item => item.hours_needed).reduce((sum, lessons) => sum + lessons, 0);
  const spendhours = courses.map(item => item.hours_spended).reduce((sum, lessons) => sum + lessons, 0);

  // Final scores
  const progressscore = (finishedlessons / totallessons) * 100;
  const timescore = (spendhours / totalhours) * 100;

  if (courses.length>0) {
    return (
    <div className='page-container'>
      <div className="progress-cont rounded">

        <h4>Progress report</h4>
        <hr />
        <div className="reportbar">
          <p>Progress Score:</p>
          <CircularProgressbar
            value={progressscore.toFixed()}
            text={`${progressscore.toFixed().isNaN ? 0 : progressscore.toFixed()}%`}
            styles={buildStyles({
              // Colors
              pathColor: 'orangered',
              textColor: 'black',
              trailColor: '#D3D3D3',
              backgroundColor: '#3e98c7',
            })}
          />
          <p className="mt-2">Time management score:</p>
          <CircularProgressbar
            value={timescore.toFixed()}
            text={`${timescore.toFixed().isNaN ? 0 : timescore.toFixed()}%`}
            styles={buildStyles({
              // Colors
              pathColor: 'orange',
              textColor: 'black',
              trailColor: '#D3D3D3',
              backgroundColor: '#3e98c7',
            })}
          />
        </div>
        <hr />
        <h5 className="bg-warning py-1 w-50 mx-auto">Course statistics</h5>
        <div className="coursestatus bg-info text-white py-1">
          <h4>
            Courses Taken :
            {' '}
            {' '}
            {totalcourses}
          </h4>
          <hr />
          <h4>
            Total Lessons :
            {' '}
            {' '}
            {totallessons}
          </h4>
          <hr />
          <h4>
            Lessons completed :
            {' '}
            {' '}
            {finishedlessons}
          </h4>
        </div>
        <hr />
        <h5 className="bg-warning py-1 w-50 mx-auto">Time statistics</h5>
        <div className="hoursstatus bg-info text-white py-1">
          <h4>
            Total Hours :
            {' '}
            {totalhours}
          </h4>
          <hr />
          <h4>
            Hours spent :
            {' '}
            {spendhours}
          </h4>
        </div>

      </div>
    </div>
    );
  }
};

export default Report;
