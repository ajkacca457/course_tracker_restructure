import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { RiLoginBoxFill } from "react-icons/ri";
import { ThreeDots } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/user/userSlice';
import {toast} from "react-toastify";

const Login = () => {

    const {isLoading, user}= useSelector((state)=> {return state.user});
    const dispatch= useDispatch();
    const navigate= useNavigate();

    useEffect(()=>{
        if(user) {
            setTimeout(()=>{
                navigate("/")
            },500)
        }
    },[user, navigate])

    const initialValues= {
        email:"",
        password:""
    }

    const [values,setValues]= useState(initialValues);


    const handleChange=(e)=>{
        setValues({
            ...values,[e.target.name]:e.target.value
        })
    }



    const handleSubmit = e => {
        e.preventDefault();
        const {email,password}= values;
        if(!email || !password) {
            toast.warning("please fill up all the fields");
            return
        }
        dispatch(loginUser({email,password}));
        setValues(initialValues);
    };

    return (
        <div className="logincont">
            <div className="bg-white mx-auto p-4 rounded loginitem">
                <h4 className="text-center bg-secondary py-2 text-white mb-3 rounded"><RiLoginBoxFill /> Login</h4>
                <form onSubmit={e => { handleSubmit(e); }}>
                    <div className="form-group text-left">
                        <input
                            type="text"
                            name="email"
                            className="form-control my-3"
                            id="username"
                            placeholder="Enter username"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group text-left">
                        <input
                            type="password"
                            name="password"
                            className="form-control my-3"
                            id="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-info signup-btn my-3 text-white"
                        disabled={isLoading}
                    >
                        {isLoading?<ThreeDots width="30" height="30" color='#FFFFFF'/>:"Submit"}
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
