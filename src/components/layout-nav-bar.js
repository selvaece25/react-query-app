import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="col col-9">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/movies">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hotels">
                  Hotels
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/schools">
                  Schools
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
