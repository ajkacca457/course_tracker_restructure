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
      <h4 className="bg-warning text-center p-2 w-25 rounded">No courses available...</h4>
    </div>)
  }

  return (
      <div className="page-container">
        <h4 className="bg-warning text-center p-2 w-50 rounded">List of Courses</h4>
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