import React, { useEffect, useState } from 'react';
import { GiWhiteBook } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineClose} from "react-icons/md";


const Header = () => {

    const { user } = useSelector((state) => { return state.user; });
    const [navopen, setNavOpen]= useState(false);


    const handleDisplay=()=>{
        setNavOpen(!navopen);
    }




    return (
        <div className="header bg-dark px-2 my-0">
            <div className='d-flex justify-content-between align-items-center header-cont mx-auto'>
                <NavLink to={user ? "/dashboard" : "/"} className="text-decoration-none">
                    <h4 className="text-center text-white">
                        <GiWhiteBook />
                        {' '}
                        Course Tracker
                    </h4>
                </NavLink>

                {user &&
                    <div className='desktop-nav-container align-items-center'>
                        <p className='text-white px-4 mb-0'>Logged in as {user.username}</p>
                        <Navigation/>
                    </div>}

                <div className='btn-container'>
                    <button onClick={handleDisplay}>{navopen?<MdOutlineClose/>:<GiHamburgerMenu/>}</button>
                </div>    

            </div>
            
            {user && navopen &&
                    <div className='mobile-nav-container align-items-center'>
                        <p className='text-white px-4 mb-0'>Logged in as {user.username}</p>
                        <Navigation closeNav={handleDisplay}/>
                    </div>}
        </div>
    );
};


export default Header;
