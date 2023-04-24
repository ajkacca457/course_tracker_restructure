import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ImPencil2 } from "react-icons/im";


const Signup = () => {

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className="logincont">
            <div className=" bg-white mx-auto p-4 rounded signupitem">
                <h4 className="text-center bg-secondary py-2 text-white mb-3 rounded"> <ImPencil2 /> Sign up for free!</h4>
                <form onSubmit={e => { handleSubmit(e); }}>

                    <div className="form-group text-left my-3">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="form-group text-left my-3">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group text-left my-3">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-info signup-btn mt-4 text-white"
                    >
                        Submit
                    </button>
                </form>

                <div className="signupinfo text-right">
                    <p className='mb-0'>Already have an account?</p>
                    <NavLink to="/login" className="text-primary">Login</NavLink>
                </div>

            </div>
        </div>
    );
};


export default Signup;
