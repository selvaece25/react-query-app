import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ReactQueryConfigProvider } from 'react-query';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createReduxStore } from './redux';

import SidebarLayout from './layouts/left-sidebar';
import RightSidebarLayout from './layouts/right-sidebar';

import List from './modules/movies/listing';
import ProfileListing from './modules/profile/listing';
import PostListing from './modules/profile/post-listing';
import UserDetail from './modules/profile/user-detail';
import Filters from './components/filters';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Loader = () => <div>Loading</div>;

const queryConfig = {
  suspense: false,
};
function App() {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <Suspense fallback={<Loader />}>
        <Router className='App'>
          <Route
            exact
            path='/authors'
            render={() => (
              <SidebarLayout sidebar={<Filters />} main={<List />} />
            )}
          ></Route>
          <Route
            exact
            path='/profile/:id'
            render={(props) => (
              <RightSidebarLayout side_bar_type= { 2 }  sidebar={<UserDetail {...props}  />} main={<ProfileListing {...props} />} />
            )}
          ></Route>
          <Route
            exact
            path='/posts'
            render={(props) => (
              <RightSidebarLayout side_bar_type= { 3 }  main={<PostListing {...props} />} />
            )}
          ></Route>
        </Router>
      </Suspense>
    </ReactQueryConfigProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={createReduxStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement,
);
