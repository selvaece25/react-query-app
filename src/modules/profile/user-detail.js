import React, { useEffect, useState } from 'react';
import { useUserDetail } from '../../queries';


const ProfileDetail = ({ match: { params } }) => {
    const { id } = params;
    const { status, data, error, isFetching, isLoading, refetch } = useUserDetail(id);
    if (error) {
        return <div>There was an Error {error}</div>;
      }
      if (!data) {
        return <div onClick={() => refetch()}>Loading....</div>;
      }
    
    return (
      <div>
        <img src={data.picture} className="w-100 mw-240px mb-3" alt={data.firstName} />
        <div className="col-12 col-md-4">
            <div className="h5 whte-space">{data.firstName} selva</div>
            <div className="whte-space"><b>Gender: </b>{data.gender}</div>
            <div className="whte-space"><b>Date Of Birth: </b>{data.dateOfBirth}</div>
            <div className="whte-space"><b>Register Date: </b>{data.registerDate}</div><br />
            <div className="whte-space"><b>Email: </b>{data.email}</div>
            <div className="whte-space"><b>Phone: </b>{data.phone}</div>
          </div>
      </div>
    );
  };
  
  ProfileDetail.displayName = 'profileDetail';
  export default ProfileDetail;
  