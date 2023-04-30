import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ImPencil2 } from "react-icons/im";
import {toast} from "react-toastify";

const Signup = () => {

    const [values,setValues]= useState({
        username:"",
        email:"",
        password:""
    })

    const handleSubmit = e => {
        e.preventDefault();
        const {username,email,password}=values;
        if(!username || !email || !password) {
            toast("please add all the values");
            return;
        }

    };

    const handeChange=(e)=>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    return (
        <div className="logincont">
            <div className=" bg-white mx-auto p-4 rounded signupitem">
                <h4 className="text-center bg-secondary py-2 text-white mb-3 rounded"> <ImPencil2 /> Sign up for free!</h4>
                <form onSubmit={e => { handleSubmit(e); }}>

                    <div className="form-group text-left my-3">
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="username"
                            placeholder="Enter your username"
                            value={values.username}
                            onChange={handeChange}
                        />
                    </div>
                    <div className="form-group text-left my-3">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            value={values.email}
                            onChange={handeChange}
                        />
                    </div>
                    <div className="form-group text-left my-3">
                        <input
                            type="password"
                            name='password'
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handeChange}
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
