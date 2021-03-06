import axios from "axios";
import { useQuery } from 'react-query';

axios.defaults.headers["app-id"] = "lTE5abbDxdjGplutvTuc";


const getAuthors = async () => {
  const url = `https://dummyapi.io/data/api/user?limit=30`;
  const { data } = await axios.get(url);
  return data || [];
};

export function useAuthors() {
  return useQuery("authors", getAuthors);
}


const getAuthorPosts = async (userId) => {
  const { data } = await axios.get(
    `https://dummyapi.io/data/api/user/${userId}/post?limit=10`
  );
  return data;
};

export function useAuthorPosts(userId) {
  return useQuery(["post", userId], () => getAuthorPosts(userId));
}


const getUserDetail = async (userId) => {
  const { data } = await axios.get(
    `https://dummyapi.io/data/api/user/${userId}/`
  );
  return data;
};

export function useUserDetail(userId) {
  return useQuery(["user", userId], () => getUserDetail(userId));
}


const getPosts = async () => {
  const url = `https://dummyapi.io/data/api/post?limit=30`;
  const { data } = await axios.get(url);
  return data || [];
};

export function usePosts() {
  return useQuery("posts", getPosts);
}
