import React from 'react';
import { NavLink } from 'react-router-dom';
import { TbError404 } from "react-icons/tb";


const Error = () => {
    return (
        <div className="logincont">
            <div className=" bg-white mx-auto p-4 rounded ">
                <div className='text-center'>
                    <TbError404 className='h1 text-danger' />
                </div>
                <h4 className="text-center bg-danger py-3 text-white mb-3 rounded"> Page doesnt exists</h4>

                <div className="signupinfo text-right">
                    <p className='mb-0'>Back to main page</p>
                    <NavLink to="/dashboard" className="text-primary">Home</NavLink>
                </div>

            </div>
        </div>
    );
};


export default Error;
