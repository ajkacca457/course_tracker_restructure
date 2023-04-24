import React, { useState } from 'react';
import { GrLogout } from "react-icons/gr";

const Header = () => {

    const [loggedin, setLoggedin] = useState(false);

    const handlelogout = () => {
        // toast.success('logout successful');
        console.log("logout successful");
    };

    console.log(loggedin);

    return (
        <div className="header bg-dark px-2 my-0 d-flex justify-content-between align-items-center">
            <h4 className="text-center text-white pt-1 mb-3">
                <i className="fas fa-chalkboard-teacher" />
                {' '}
                Course Tracker
            </h4>
            <button type="button" className="bg-primary" onClick={() => { setLoggedin(!loggedin); }}>
                <GrLogout />
            </button>
        </div>
    );
};


export default Header;
