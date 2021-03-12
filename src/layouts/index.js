import React from 'react';

const AppLayout = ({ main: Main, sidebar: Sidebar, type, ...rest }) => {
  const bodyTemplate = [];
  bodyTemplate[1] = (
    <>
      <div className='col-2 sidebar'>
        <Sidebar {...rest} />
      </div>
      <div className='col-10'>
        <Main {...rest} />
      </div>
    </>
  );
  bodyTemplate[2] = (
    <>
      <div className='col-10'>
        <Main {...rest} />
      </div>
      <div className='col-2 sidebar'>
        <Sidebar {...rest} />
      </div>
    </>
  );
  bodyTemplate[3] = (
    <>
      <div className='col-12'>
        <Main {...rest} />
      </div>
    </>
  );

  return <div className='row'>{bodyTemplate[type]}</div>;
};

AppLayout.displayName = 'App Layout';
export default AppLayout;
