import React, { lazy } from 'react';
import { usePosts } from './posts-hooks';

const PostListView = lazy(() => import('./post-listing-view'));
const NoResult = lazy(() => import('../../components/empty-list'));
const Loader = lazy(() => import('../../components/loader'));

const PostsListing = () => {
  const { data, isFetching } = usePosts();
  const posts = (data && data.data) || [];

  const postItemList = posts.map((postDetails) => {
    return <PostListView key={`${postDetails.text}`} post={postDetails} />;
  });

  if (isFetching) {
    return <Loader />;
  }
  return <div>{posts.length ? postItemList : <NoResult />}</div>;
};

PostsListing.displayName = 'PostsListing';
export default PostsListing;
