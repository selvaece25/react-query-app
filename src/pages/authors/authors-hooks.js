import { useQuery } from 'react-query';

import { getAuthors, getAuthorPosts, getAuthorDetail } from './author-api-repositories';

export function useAuthors() {
  return useQuery('authors', getAuthors, { retry: false });
}

export function useAuthorPosts(authorId) {
  return useQuery(['Authorpost', authorId], () => getAuthorPosts(authorId));
}
export function useAuthorDetail(authorId) {
  return useQuery(['AuthorDetail', authorId], () => getAuthorDetail(authorId));
}
