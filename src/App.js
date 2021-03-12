import React, { useState, Suspense, useEffect } from 'react';
import { ReactQueryConfigProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/GlobalStyles';
import { useTheme } from './hooks/useTheme';

import _ from 'lodash';

import { routes } from './routes';
import Layout from './layouts';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './i18n';

import Heading from './components/app-header';
import NavBar from './components/app-nav-bar';

const Loader = () => <div>Loading</div>;

const queryConfig = {
  suspense: false,
};

function App() {
  const { theme, themeLoaded, setMode, themes } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);

  const themeSwitcher = (selectedTheme) => {
    setMode(selectedTheme);
  };

  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <Suspense fallback={<Loader />}>
        {themeLoaded && (
          <ThemeProvider theme={selectedTheme}>
            <Router className='App'>
              <div className='container-fluid'>
                <div className='row d-flex align-items-center mt-4 mb-4'>
                  <Heading title='SK Fun' />
                  <NavBar
                    themes={_.keys(themes.data)}
                    data={themes.data}
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
            <GlobalStyles />
          </ThemeProvider>
        )}
      </Suspense>
    </ReactQueryConfigProvider>
  );
}

export default App;
