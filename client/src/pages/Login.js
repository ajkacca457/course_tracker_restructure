import React, { useState } from 'react';

const Login = () => {

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className="logincont">
            <div className="bg-white mx-auto p-4 rounded loginitem">
                <h5 className="text-center bg-secondary py-2 text-white mb-3 rounded">Login</h5>
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
                        className="btn btn-info signup-btn my-3"
                    >
                        Login
                    </button>
                </form>
                <div className="signupinfo text-right">
                    <p className="tagline">Dont have an account?</p>
                </div>
            </div>
        </div>
    );
};


export default Login;
