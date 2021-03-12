import axios from "axios";
import toast from "react-hot-toast";

import ErrorHandleResponses from "../../api-repositories/error-handler";
const REACT_APP_DUMMY_API_ENDPOINT = "https://dummyapi.io/data/api/";

axios.defaults.headers["app-id"] = "lTE5abbDxdjGplutvTuc";

export const getAuthors = async () => {
  try {
    const url = `${REACT_APP_DUMMY_API_ENDPOINT}user?limit=30`;
    const { data } = await axios.get(url);
    return data || [];
  } catch (err) {
    const errorCode = ErrorHandleResponses(err.response);
    if (errorCode.error) {
      toast.error(`${errorCode.error} Http Error code`);
    }
    return errorCode;
  }
};

export const getAuthorPosts = async (userId) => {
  const { data } = await axios.get(
    `${REACT_APP_DUMMY_API_ENDPOINT}user/${userId}/post?limit=10`
  );
  return data;
};

export const getAuthorDetail = async (userId) => {
  const { data } = await axios.get(
    `${REACT_APP_DUMMY_API_ENDPOINT}user/${userId}/`
  );
  return data;
};
