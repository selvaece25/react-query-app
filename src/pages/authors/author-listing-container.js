import React, { useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useAuthors } from './authors-hooks';
import { authorSelector, authorsReceived } from './author-slice';

const AuthorListView = lazy(() => import('./author-listing-view'));
const NoResult = lazy(() => import('../../components/empty-list'));
const Loader = lazy(() => import('../../components/loader'));

const AuthorListing = () => {
  
  const { authors, filters: authorFilter } = useSelector(authorSelector);
  const dispatch = useDispatch();

  const { data, isFetching } = useAuthors();
  const renderStatus = data && data.data;

  useEffect(() => {
    if (renderStatus) {
      dispatch(authorsReceived(data.data));
    }
  }, [renderStatus]); // eslint-disable-line react-hooks/exhaustive-deps

  const authorItemList = authors.map((authorDetails) => {
    return (
      <AuthorListView
        key={`${authorDetails.firstName}-${authorDetails.lastName}`}
        user={authorDetails}
      />
    );
  });

  const authorFilterView = Object.keys(authorFilter).map((filter) => {
    return (
      <button class="btn btn-secondary ml-4">{filter.toUpperCase()} <span class="badge">{ authorFilter[filter] } </span></button>
    );
  });

  if (isFetching) {
    return <Loader />;
  }
  return <div>
    <div>{ authorFilterView }</div>
    {authors.length ? authorItemList : <NoResult />}
    </div>;
};

AuthorListing.displayName = 'AuthorsListing';
export default AuthorListing;
