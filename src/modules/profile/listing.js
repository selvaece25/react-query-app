import React, { useEffect, lazy } from 'react';
import { useAuthorPosts } from '../../queries';



const POSTCARD = lazy(() => import('../../components/post-card'));

const ProfileListingView = ({ match: { params }}) => {
  const { id } = params;
  
  const { status, data, error, isFetching, isLoading, refetch } = useAuthorPosts(id);
  if (error) {
    return <div>There was an Error {error}</div>;
  }
  if (!data) {
    return <div onClick={() => refetch()}>Loading....</div>;
  }
  return (
    <div className="wrapper">
      {data.data.map((post) => (
        <POSTCARD
          key={`${post.text}`}
          post={post}
        />
      ))}
    </div>
  );
};

ProfileListingView.displayName = 'ProfileListingView';

export default ProfileListingView;
