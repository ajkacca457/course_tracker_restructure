import React from 'react';
// import Easynav from './easynav';
import TrackerHome from '../images/tracker-home.jpg';
import Header from '../components/Header';

const Home = () => (
    <div className="home rounded">
        <Header />
        <p className="text-center">
            Course tracker allows you to track progress of the courses you are taking.
            It is an effective app to make your learning process easy.
        </p>

        <div className="imgcont text-center bg-white py-3">
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
    </div>
);

export default Home;