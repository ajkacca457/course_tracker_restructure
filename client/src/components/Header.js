import React, { useState } from 'react';
import { GrLogout } from "react-icons/gr";
import { GiWhiteBook } from "react-icons/gi";

const Header = () => {

    const [loggedin, setLoggedin] = useState(false);

    const handlelogout = () => {
        // toast.success('logout successful');
        console.log("logout successful");
    };

    console.log(loggedin);

    return (
        <div className="header bg-dark px-2 my-0">
            <div className='d-flex justify-content-between align-items-center header-cont mx-auto'>
                <h4 className="text-center text-white">
                    <GiWhiteBook />
                    {' '}
                    Course Tracker
                </h4>
                <button type="button" className="border-0 text-white py-1 px-2 rounded" onClick={() => { setLoggedin(!loggedin); }}>
                    <GrLogout />
                    {" "}
                    <span className='text-black'>Logout</span>
                </button>
            </div>
        </div>
    );
};


export default Header;
