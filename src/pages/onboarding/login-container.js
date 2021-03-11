import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, clearState } from './onboarding-slice';
import { loginUser } from './onboarding-api-repositories';

import toast from 'react-hot-toast';

const Login = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const { register, errors, handleSubmit } = useForm();
  const { isFetching, isSuccess, errorMessage } = useSelector(
    userSelector
  );
  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  dispatch(clearState());

    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      history.push('/');
      window.location.reload();
    }

  const loginStatus = isFetching ? ( <p>Checking up ... </p>) : (<button type="submit" className="btnSubmit">Login</button>);

  
  return (
    <Fragment>
      <div className="container register-form">
                <div className="form">
                    <div className="note">
                        <p>Login</p>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} method="POST">
                    <div className="form-content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email-id *" name="email" ref={register({ required: true, pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,})}/>
                                    {errors.email && <span className="red-alert">Email-id field is required</span>}
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Your Password *" name="password" ref={register({ required: true })}/>
                                    {errors.password && <span className="red-alert">Password field is required</span>}
                                </div>
                            </div>
                        </div>
                        { loginStatus }
                    </div>
                    </form>
                </div>
            </div>
    </Fragment>
  );
};

export default Login;