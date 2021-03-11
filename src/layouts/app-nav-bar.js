import React, { lazy } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../routes';
import useSwitchLanguage from '../hooks/useLanguageSwitch';

const ToggleButton = lazy(() => import('../components/toggle-button'));

const Menu = () => {
  return (
    <ul className='navbar-nav'>
      {routes
        .filter((route) => !route.hide_on_auth)
        .map((route, index) => (
          <li key={index} className='nav-item'>
            <NavLink
              className='nav-link'
              activeClassName='active'
              key={index}
              to={route.path}
            >
              {route.label}
            </NavLink>
          </li>
        ))}
    </ul>
  );
};

const NavBar = ({ themes, data, themeSwitcher }) => {
  const { handleSwitchLanguage } = useSwitchLanguage('en');
  return (
    <div className='col col-9'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark static-top'>
        <div className='container'>
          <div className='collapse navbar-collapse'>
            <Menu />
          </div>
          <span className='white-block'>Change Theme : </span>
          {themes.length > 0 &&
            themes.map((theme, index) => (
              <button
                key={index}
                onClick={() => {
                  themeSwitcher(data[theme]);
                }}
                type='button'
                className={`margin-right btn btn-${theme}`}
              ></button>
            ))}
          <span className='white-block'>Lang : </span>
          <ToggleButton onChange={handleSwitchLanguage} defaultChecked={true} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
