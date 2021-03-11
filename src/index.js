import React, { useState, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ReactQueryConfigProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/GlobalStyles';
import { useTheme } from './hooks/useTheme';

import _ from 'lodash';

import store from './store';

import { routes } from './routes';
import Layout from './layouts';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './i18n';

import * as themes from './theme/schema.json';
import { setToLocalStorage } from './utils/storage';


import Heading from './layouts/app-header';
import NavBar from './layouts/app-nav-bar';

const Loader = () => <div>Loading</div>;

const queryConfig = {
  suspense: false,
};

function App() {
  setToLocalStorage('all-themes', themes.default);
  const { theme, themeLoaded, setMode, themesFromStore } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [allTheme] = useState(_.keys(themesFromStore.data));

  const themeSwitcher = (selectedTheme) => {
    setMode(selectedTheme);
    setSelectedTheme(selectedTheme);
  };

  return (
      <ReactQueryConfigProvider config={queryConfig}>
        <Suspense fallback={<Loader />}>
          {themeLoaded && (
            <ThemeProvider theme={selectedTheme}>
              <GlobalStyles />
              <Router className='App'>
              <div className='container-fluid'>
                <div className='row d-flex align-items-center mt-4 mb-4'>
                  <Heading title='A to Z Fun' />
                  <NavBar
                    themes={allTheme}
                    data={themesFromStore.data}
                    themeSwitcher={themeSwitcher}
                  />
                </div>
                  <Switch>
                    {routes.map((route) => (
                      <Route
                        exact
                        key={route.path}
                        path={route.path}
                        render={(props) => (
                          <Layout
                            {...props}
                            type={route.layout_type}
                            sidebar={route.component.sidebar}
                            main={route.component.main}
                          />
                        )}
                      ></Route>
                    ))}
                  </Switch>
              </div>
              </Router>
            </ThemeProvider>
          )}
        </Suspense>
      </ReactQueryConfigProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </React.StrictMode>,
  rootElement,
);
