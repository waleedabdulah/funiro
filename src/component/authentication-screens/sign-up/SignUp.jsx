import React from 'react';
import './Signup.scss'; // You can rename this to Signup.scss if needed
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='signup_wrapper'>
      <div className='signup_screen_container'>
        <div>
            <span>Welcome to Funiro</span>
            <span>- Create Your Account</span>
        </div>
        <Formik
          initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
          validate={(values) => {
            const errors = {};

            if (!values.name) {
              errors.name = 'Name is required';
            }

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

            if (!values.confirmPassword) {
              errors.confirmPassword = 'Please confirm your password';
            } else if (values.confirmPassword !== values.password) {
              errors.confirmPassword = 'Passwords do not match';
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            // Call your signup API or handler here
            console.log('Signup values:', values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="signup_form">
              <div>
                <label>Name</label>
                <Field type="text" name="name" placeholder="Enter your name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

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

              <div>
                <label>Confirm Password</label>
                <Field type="password" name="confirmPassword" placeholder="Re-enter your password" />
                <ErrorMessage name="confirmPassword" component="div" className="error" />
              </div>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Signing up...' : 'Sign Up'}
              </button>
            </Form>
          )}
        </Formik>

        <NavLink to="/login">Already have an account</NavLink>
      </div>
    </div>
  );
}
