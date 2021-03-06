import React, { useEffect, lazy } from 'react';
import { useAuthors } from '../../queries';

import { useSelector, useDispatch } from 'react-redux';

import { ACTIONS } from '../../redux';

const MovieList = lazy(() => import('../../components/movie-card'));

const MovieListingView = () => {
  const { status, data, error, isFetching, isLoading, refetch } = useAuthors();

  const authors = useSelector((state) => state.authors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFetching && data && data.data) {
      dispatch({
        type: ACTIONS.SET_ALL_AUTHORS,
        payload: {
          authors: data.data,
        },
      });
    }
  }, [data, isFetching]); // eslint-disable-line react-hooks/exhaustive-deps

  if (error) {
    return <div>There was an Error {error}</div>;
  }
  if (!data) {
    return <div onClick={() => refetch()}>Loading....</div>;
  }
  return (
    <div>
      {authors.map((userDetails) => (
        <MovieList
          key={`${userDetails.firstName}-${userDetails.lastName}`}
          user={userDetails}
        />
      ))}
    </div>
  );
};

MovieListingView.displayName = 'MovieListingView';

export default MovieListingView;
