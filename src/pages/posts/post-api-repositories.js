import axios from 'axios';
import toast from 'react-hot-toast';

import ErrorHandleResponses from '../../api-repositories/error-handler';
const { REACT_APP_DUMMY_API_ID, REACT_APP_DUMMY_API_ENDPOINT } = process.env;
axios.defaults.headers['app-id'] = REACT_APP_DUMMY_API_ID;


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