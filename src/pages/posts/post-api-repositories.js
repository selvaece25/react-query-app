import axios from "axios";
import toast from "react-hot-toast";

import ErrorHandleResponses from "../../api-repositories/error-handler";
const REACT_APP_DUMMY_API_ENDPOINT = "https://dummyapi.io/data/api/";

axios.defaults.headers["app-id"] = "lTE5abbDxdjGplutvTuc";

export const getPosts = async () => {
  try {
    const url = `${REACT_APP_DUMMY_API_ENDPOINT}post?limit=60`;
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
