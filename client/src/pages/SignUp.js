import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ImPencil2 } from "react-icons/im";
import { toast } from "react-toastify";
import { registerUser } from '../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';

const Signup = () => {

    const { isLoading, user } = useSelector((state) => { return state.user; });

    const initialValues = {
        username: "",
        email: "",
        password: ""
    };
    const [values, setValues] = useState(initialValues);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate("/dashboard");
            }, 500);
        }
    }, [user, navigate]);


    const handleSubmit = e => {
        e.preventDefault();
        const { username, email, password } = values;
        if (!username || !email || !password) {
            toast.warn("please add all the values");
            return;
        }
        dispatch(registerUser({ username, email, password }));
        setValues(initialValues);

    };

    const handeChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

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
                        disabled={isLoading}
                    >
                        {isLoading ? <ThreeDots width="30" height="30" color='#FFFFFF' /> : "Submit"}
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
