import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiLoginBoxFill } from "react-icons/ri";

const Login = () => {

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className="logincont">
            <div className="bg-white mx-auto p-4 rounded loginitem">
                <h4 className="text-center bg-secondary py-2 text-white mb-3 rounded"><RiLoginBoxFill /> Login</h4>
                <form onSubmit={e => { handleSubmit(e); }}>
                    <div className="form-group text-left">
                        <input
                            type="text"
                            className="form-control my-3"
                            id="username"
                            placeholder="Enter username"
                        />
                    </div>
                    <div className="form-group text-left">
                        <input
                            type="password"
                            className="form-control my-3"
                            id="password"
                            placeholder="Password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-info signup-btn my-3 text-white"
                    >
                        Submit
                    </button>
                </form>
                <div className="signupinfo">
                    <p className='mb-0'>Dont have an account?</p>
                    <NavLink to="/signup" className="text-primary">Signup</NavLink>
                </div>
            </div>
        </div>
    );
};


export default Login;
