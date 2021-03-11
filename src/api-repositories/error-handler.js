const ErrorHandleResponses = (result) => {
    let text = '';
    const status = result.status;
    const { code, data  } = result.data && result.data.errors ? result.data.errors[0] : {};
    switch (status) {
      case 204:
        return { success: 'OK' };
      case 400:
        if (code && data && data.length) {
          text = code + data.toString();
        } else {
          text = { error: '400' };
        }
        return { error: text };
      case 401:
      case 403:
        return { error: '403' };
      case 404:
      case 500:
      case 503:
        return { error: '404, 500, 503' };
  
      case 409:
        return { error: '409' };
  
      default:
        return { error: 'Default error' };
    }
  };

  export default ErrorHandleResponses;