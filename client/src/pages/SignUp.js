import React, { useState } from 'react';

const Signup = () => {

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className="logincont">
            <div className=" bg-white mx-auto p-2 rounded signupitem">
                <h4 className="text-center bg-info py-2 text-white mb-3 rounded">Sign up for free!</h4>
                <form onSubmit={e => { handleSubmit(e); }}>
                    <div className="form-group text-left">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="form-group text-left">
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="form-group text-left">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group text-left">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-info w-100"
                    >
                        Sign up
                    </button>
                </form>

                <div className="signupinfo text-right">
                    <p className="tagline">Already have an account?</p>
                </div>

            </div>
        </div>
    );
};


export default Signup;
