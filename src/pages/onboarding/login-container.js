import React, { Fragment, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, clearState } from './onboarding-slice';
import { loginUser } from './onboarding-api-repositories';
import { useTranslation } from "react-i18next";

import toast from 'react-hot-toast';

const Login = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { t: translation  } = useTranslation();

  const { register, errors, handleSubmit } = useForm();
  const { isFetching, isError, isSuccess, errorMessage } = useSelector(
    userSelector
  );
  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      history.push('/');
      window.location.reload();
    }
  }, [isError, isSuccess]);

  const loginStatus = isFetching ? ( <p>{ translation('checking_up') } ... </p>) : (<button type="submit" className="btnSubmit">{ translation('login') }</button>);

  return (
    <Fragment>
      <div className="container register-form">
                <div className="form">
                    <div className="note">
                        <p>{ translation('login') }</p>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} method="POST">
                    <div className="form-content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email-id *" name="email" ref={register({ required: true, pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,})}/>
                                    {errors.email && <span className="red-alert">{ translation('email_required')}</span>}
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder={ translation('your_password')} name="password" ref={register({ required: true })}/>
                                    {errors.password && <span className="red-alert">{ translation('password_required')}</span>}
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