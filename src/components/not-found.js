import React  from 'react';

const NotFound = () => {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='error-template'>
            <img src="https://i.pinimg.com/originals/8b/d8/c4/8bd8c42fc38edf71fbb2f9d51cf08345.png" alt="404 found" />
            <br />
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div class="error-details">
                    Sorry, an error has occured, Requested page not found!
             </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

NotFound.displayName = 'not-found';
export default NotFound;
