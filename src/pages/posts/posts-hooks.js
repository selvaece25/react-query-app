import { useQuery } from 'react-query';

import { getPosts } from './post-api-repositories'

export function usePosts() {
  return useQuery('posts', getPosts);
}