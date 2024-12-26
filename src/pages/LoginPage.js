import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { isLoading } from '../services/loader';
import {  notify } from '../services/react-toastify';
import { apiUrl } from '../services/helper';

export default function LoginPage() {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [serverError, setServerError] = useState(null)
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault();
        isLoading(true);
        setServerError(null);
        const FormData = require('form-data');

        let data = new FormData();
        data.append('email', emailInputRef.current.value);
        data.append('password', passwordInputRef.current.value);

        axios.post(`${apiUrl}/api/auth/login`, data)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('access_token', response.data.data.access_token);
                localStorage.setItem('user', JSON.stringify(response.data.data));
                isLoading(false);
                notify("success", response.data.message);
                navigate('/');
            })
            .catch((error) => {
                isLoading(false);
                setServerError(error.response.data.message);
                notify("error", error.response.data.message);
            });

    }
    return (
        <div>
            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user" onSubmit={submitHandler}>
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..." ref={emailInputRef} />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Password" ref={passwordInputRef} />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="custom-control-label" htmlFor="customCheck">Remember
                                                            Me</label>
                                                    </div>
                                                </div>
                                                {serverError ? <p className='text-danger'>{serverError}</p> : null}
                                                <button className="btn btn-primary btn-user btn-block">
                                                    Login
                                                </button>
                                                <hr />
                                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </a>
                                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </a>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="register.html">Create an Account!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
