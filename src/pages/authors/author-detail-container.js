import React, { lazy } from 'react';
import { useAuthorDetail } from './authors-hooks';

const Loader = lazy(() => import('../../components/loader'));

const AuthorProfileDetail = ({ match: { params } }) => {
   const { id } = params;
   const { data, isFetching } = useAuthorDetail(id);
   const user =  data || {};

    if (isFetching) {
      return <Loader />;
    }
    return (
      <div>
        <img src={user.picture} className="mw-240px mb-3" width="250" alt={user.firstName} />
        <div className="col-12 col-md-4">
            <div className="h5 whte-space">{user.firstName}</div>
            <div className="whte-space"><b>Gender: </b>{user.gender}</div>
            <div className="whte-space"><b>Date Of Birth: </b>{user.dateOfBirth}</div>
            <div className="whte-space"><b>Register Date: </b>{user.registerDate}</div><br />
            <div className="whte-space"><b>Email: </b>{user.email}</div>
            <div className="whte-space"><b>Phone: </b>{user.phone}</div>
          </div>
      </div>
    );
  };
  
  AuthorProfileDetail.displayName = 'Author Profile Detail';
  export default AuthorProfileDetail;
  