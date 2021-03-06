import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="col col-9">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/authors">
                  Authors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/posts">
                  Posts
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/tags">
                  Tags
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
