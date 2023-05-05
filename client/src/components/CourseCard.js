/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Course = props => {
  const {
    course: {
      _id,
      name,
      number_of_lessons,
      lesson_completed,
    },
  } = props;

  const percentage = (lesson_completed / number_of_lessons) * 100;

  return (
    <div className="course">
      <div className="course-item card border-2 mb-2 bg-light">
        <div className="content justify-content-between align-items-center p-1">
          <p className="name">{name}</p>
          <div className="progresscont text-right">
            <CircularProgressbar
              value={percentage.toFixed()}
              text={`${percentage.toFixed()}%`}
              styles={buildStyles({
                // Colors
                pathColor: '#FF7F7F',
                textColor: '#194775',
                trailColor: '#D2D2D2',
                backgroundColor: '#3e98c',
              })}
            />
          </div>
          <Link to={`/courses/${_id}`} className=" bg-primary w-50 rounded text-center border-0 text-white view-btn p-1 ml-auto">view info</Link>
        </div>
      </div>
    </div>
  );
};

export default Course;