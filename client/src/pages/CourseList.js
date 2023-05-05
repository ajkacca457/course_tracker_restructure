import React from 'react';
import { courses } from '../utils/utilsFunc'; 
import CourseCard from "../components/CourseCard";


const CourseList = () => {

  return (
          <div className="coursecontainer">
        <div className="coursecontent ">
          <h4 className="bg-info text-white text-center p-2">List of Courses</h4>
          <hr />
          {courses.length === 0 ? <div className="text-white rounded"><h4>Your search doesnt match with any show here.</h4></div> : courses.map(item => (
            <CourseCard key={item.id} course={item} />))}
        </div>
      </div>
  );
};

export default CourseList;