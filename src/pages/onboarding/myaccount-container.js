import React, { Fragment, useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from './onboarding-slice';
import { useHistory } from 'react-router-dom';
import { fetchUserBytoken } from './onboarding-api-repositories';
import toast from 'react-hot-toast';

const Loader = lazy(() => import('../../components/loader'));


const Dashboard = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { isFetching, errorMessage } = useSelector(userSelector);
  useEffect(() => {
    dispatch(fetchUserBytoken({ token: localStorage.getItem('token') }));
  }, []);

  const { username, email } = useSelector(userSelector);

  if(errorMessage) {
    toast.error(`${errorMessage}`);
    localStorage.removeItem('token');
    history.push('/login');
    window.location.reload();
  }

  const onLogOut = () => {
    localStorage.removeItem('token');
    history.push('/login');
    window.location.reload();
  };

  if (isFetching) {
    return <Loader />;
  }

  return (
        <Fragment>
           <div className="row py-5 px-4">
    <div className="col-md-11 mx-auto">
        <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-4 pb-4 cover">
                <div className="media align-items-end profile-head">
                    <div className="profile mr-3"><img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="..." width="130" className="rounded mb-2 img-thumbnail" />
                    <a href onClick={onLogOut} className="btn btn-outline-dark btn-sm btn-block">Log out</a></div>
                    <div className="media-body mb-5 text-white">
                        <h4 className="mt-0 mb-0">{username}</h4>
                        <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2"></i>{ email }</p>
                    </div>
                </div>
            </div>
            <div className="bg-light p-4 d-flex justify-content-end text-center">
                <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                        <h5 className="font-weight-bold mb-0 d-block">215</h5><small className="text-muted"> <i className="fas fa-image mr-1"></i>Photos</small>
                    </li>
                    <li className="list-inline-item">
                        <h5 className="font-weight-bold mb-0 d-block">745</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>Followers</small>
                    </li>
                    <li className="list-inline-item">
                        <h5 className="font-weight-bold mb-0 d-block">340</h5><small className="text-muted"> <i className="fas fa-user mr-1"></i>Following</small>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
        </Fragment>
  );
};

export default Dashboard;