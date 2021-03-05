import React from "react";

const MovieList = ({ user }) => {
  const { picture, firstName, lastName } = user;
  return (
    <div className="bg-white rounded shadow p-3 h-100">
      <img src={picture} alt="movie"></img>
      <div className="overlay d-flex align-items-center justify-content-center"></div>
      <span className="mr-2">{`${firstName} - ${lastName}`} </span>
    </div>
  );
};

export default MovieList;
