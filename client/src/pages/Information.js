import React from 'react';
import CourseImg from "../images/course-image.jpg"

const Information = () => {
    return (
        <div className='page-container'>
            <div className='content-container'>
                <h1>Information</h1>
                <hr />
                <p>Course tracker is an app that students can use to track information about their taken courses. This tracker lets students to create course and update the course progress. Based on the available data app create analysis for the courses. Students can see how far they are from completing their courses, how much allocated time they have used on individaul courses. It is a great app to keep track of the course data and get detail report of students learning.</p>
                <img src={CourseImg} alt="courses" className='w-25'/>
            </div>
        </div>
    );
};

export default Information;