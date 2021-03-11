import React  from 'react';

const NoResult = () => {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='error-template'>
            <img src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png" alt="empty" />
            </div>
          </div>
        </div>
      </div>
    );
  };

NoResult.displayName = 'empty-list';
export default NoResult;
