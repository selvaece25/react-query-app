import React, { Fragment, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, clearState } from './onboarding-slice';
import { signupUser } from './onboarding-api-repositories';

import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';

import './signup.css';

const Signup = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();

  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    userSelector,
  );
  const onSubmit = (data) => {
    dispatch(signupUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearState());
      history.push('/');
    }

    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

  const signUpStatus = isFetching ? (
    <p>Signing up</p>
  ) : (
    <button type='submit' className='btnSubmit'>
      Submit
    </button>
  );

  return (
    <Fragment>
      <div className='container register-form'>
        <div className='form'>
          <div className='note'>
            <p>Registration</p>
          </div>
          <form
            className='space-y-6'
            onSubmit={handleSubmit(onSubmit)}
            method='POST'
          >
            <div className='form-content'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      autoComplete='name'
                      placeholder='Your Name *'
                      name='name'
                      ref={register({ required: true })}
                    />
                    {errors.name && (
                      <span className='red-alert'>Name field is required</span>
                    )}
                  </div>
                  <div className='form-group'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email-id *'
                      name='email'
                      ref={register({
                        required: true,
                        pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                      })}
                    />
                    {errors.email && (
                      <span className='red-alert'>
                        Email-id field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='password'
                      className='form-control'
                      placeholder='Your Password *'
                      name='password'
                      ref={register({ required: true })}
                    />
                    {errors.password && (
                      <span className='red-alert'>
                        Password field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {signUpStatus}
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
