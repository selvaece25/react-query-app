import React, { useState, lazy } from "react";
import { getMoviesList, getPokemonList } from "../../queries";

import { useQuery } from "react-query";

const MovieList = lazy(() => import("../../components/movie-card"));
const AddFavourites = lazy(() => import("../../components/add-favourite"));

const MovieListingView = () => {
  const { data, refetch, error } = useQuery("Movies", getMoviesList, {});
  // Short circut if there is an error state and return.
  if (error) {
    return <div>There was an Error {error}</div>;
  }
  // If there is no data do return nothing
  if (!data) {
    return <button onClick={() => refetch()}>Fetch Pokemon</button>;
  }
  return (
    <div>
      {data.data.map((userDetails) => (
        <MovieList key={userDetails.firstName} user={userDetails} />
      ))}
    </div>
  );
};

MovieListingView.displayName = "MovieListingView";

export default MovieListingView;
