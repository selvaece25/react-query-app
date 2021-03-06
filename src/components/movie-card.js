import React,{ memo } from 'react';
import { Link } from "react-router-dom";


const truncate = (text) => {
  return text.length > 14 ? text.substring(0, 14) + "..." : text;
}



const MovieList = memo(({ user }) => {
  const { picture, firstName, lastName, id } = user;
  return (
    <div className='bg-white rounded shadow p-3 h-100 image-container'>
      <img src={picture} className='mb-3' alt={firstName} width="250" />
      <div className='h6 mt-2 mb-0 text-truncate'>{ truncate(`${firstName} ${lastName}`) }</div>
      <div className='border-top mt-2 pt-2 text-left'>
        <div className='out-a small pointer text-underline left'>
         <Link className="nav-link" to={`/profile/${id}`}>Full Profile</Link>
        </div>
        <div className='out-a small pointer text-underline right'>
        <Link className="nav-link" to={`/profile/${id}`} to="/profile/">Posts List</Link>
        </div>
      </div>
    </div>
  );
});

export default MovieList;
