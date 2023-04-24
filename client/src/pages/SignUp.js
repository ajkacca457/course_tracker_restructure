import React, { useState } from 'react';

const Signup = () => {

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div className="logincont">
            <div className=" bg-white mx-auto p-4 rounded signupitem">
                <h4 className="text-center bg-secondary py-2 text-white mb-3 rounded">Sign up for free!</h4>
                <form onSubmit={e => { handleSubmit(e); }}>
                    <div className="form-group text-left my-3">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your name"
                        />
                    </div>

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
                        className="btn btn-info signup-btn mt-4"
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
