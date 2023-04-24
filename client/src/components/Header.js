import React, { useState } from 'react';
import { GrLogout } from "react-icons/gr";
import { GiWhiteBook } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [loggedin, setLoggedin] = useState(false);

    const handlelogout = () => {
        // toast.success('logout successful');
        console.log("logout successful");
    };

    return (
        <div className="header bg-dark px-2 my-0">
            <div className='d-flex justify-content-between align-items-center header-cont mx-auto'>
                <NavLink to="/" className="text-decoration-none">
                    <h4 className="text-center text-white">
                        <GiWhiteBook />
                        {' '}
                        Course Tracker
                    </h4>
                </NavLink>

                {loggedin &&
                    <button type="button" className="border-0 text-white py-1 px-2 rounded">
                        <GrLogout />
                        {" "}
                        <span className='text-black'>Logout</span>
                    </button>}

            </div>
        </div>
    );
};


export default Header;
