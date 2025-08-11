import React from 'react';
import './Login.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';


export default function Login(){

    return (
        <div className='login_wrapper'>
            <div className='login_screen_container'>
                <span>Welcome to Funiro</span>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Email is required';
                    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.password) {
                        errors.password = 'Password is required';
                    } else if (values.password.length < 6) {
                        errors.password = 'Password must be at least 6 characters';
                    }

                    return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                    //   onSubmit(values); // call your login handler
                    setSubmitting(false);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="login_form">
                            <div>
                                <label>Email</label>
                                <Field type="email" name="email" placeholder="Enter your email" />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>

                            <div>
                                <label>Password</label>
                                <Field type="password" name="password" placeholder="Enter your password" />
                                <ErrorMessage name="password" component="div" className="error" />
                            </div>

                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </button>
                        </Form>
                    )}
                </Formik>

                <NavLink to="/signup">Click here to Sign up</NavLink>
            </div>
        </div>    
    )
}