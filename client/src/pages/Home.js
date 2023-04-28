import React from 'react';
// import Easynav from './easynav';
import TrackerHome from '../images/tracker-home.jpg';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';



const Home = () => {
return (
    <div className="home rounded">
        <Header />
        <div className="imgcont text-center bg-white">
            <div className='w-100 d-flex justify-content-end gap-2 my-2'>
                <NavLink to="/login" className="text-decoration-none bg-primary px-2 py-1 rounded text-white">Login</NavLink>
                <NavLink to="/signup" className="text-decoration-none bg-primary px-2 py-1 rounded text-white">Register</NavLink>
            </div>
            <p className="text-center">
                Course tracker allows you to track progress of the courses you are taking.
                It is an effective app to make your learning process easy.
            </p>
            <img src={TrackerHome} alt="symbol for tracker" className="logo rounded" />
            <div className="homeinfo">
                <h4 className="text-left text-dark text-uppercase my-4">This app provides following functionalities:</h4>
                <ul className="text-left text-dark list-group">
                    <li className='list-group-item  list-group-item-info'>Add new courses to your tracker.</li>
                    <li className='list-group-item  list-group-item-info'>See progress of each courses.</li>
                    <li className='list-group-item  list-group-item-info'>Modify and update your progress of the courses.</li>
                    <li className='list-group-item  list-group-item-info'>Once you completed the course you can delete it.</li>
                </ul>
            </div>
        </div>

        {/* <Easynav /> */}
    </div>)
}

export default Home;