import React, { useEffect } from 'react';
import CourseCard from "../components/CourseCard";
import { getAllCourses } from '../features/courses/courseSlice';
import {useDispatch, useSelector} from "react-redux";
import Loading from "../components/Loading";

const CourseList = () => {

  const {isLoading,courses}= useSelector((state)=>state.courses);

  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(getAllCourses("/courses"));
  },[]);


  if(isLoading) {
    return (<Loading/>)
  }

  if(courses.length<=0) {
    return (      
    <div className="page-container">
      <h4 className="bg-warning text-center p-2 w-25 rounded">You dont have any course to track. Add course to start tracking.</h4>
    </div>)
  }

  return (
      <div className="page-container">
        <div className="bg-warning px-4 py-2 heading-home rounded d-flex justify-content-between align-items-center my-2">
          <h4 >List of Courses</h4>
          <p>Total courses:{" "}{courses.length}</p>
        </div>
        
        <div className="coursecontent rounded">
          { courses.map(item => (
            <CourseCard key={item._id} course={item} />))}
        </div>
      </div>
  );
};

export default CourseList;