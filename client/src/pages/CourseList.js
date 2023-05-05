import React from 'react';
import { courses } from '../utils/utilsFunc'; 
import CourseCard from "../components/CourseCard";


const CourseList = () => {

  return (
      <div className="page-container">
        <h4 className="bg-warning text-center p-2 w-25 rounded">List of Courses</h4>
        <div className="coursecontent rounded position-relative">
          {courses.length === 0 ? 
            <div className="text-white rounded"><h4>Your search doesnt match with any show here.</h4></div> 
          : 
          courses.map(item => (
            <CourseCard key={item._id} course={item} />))}
        </div>
      </div>
  );
};

export default CourseList;