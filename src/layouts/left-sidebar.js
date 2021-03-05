import React from "react";

import Heading from "../components/layout-header";
import NavBar from "../components/layout-nav-bar";

const SidebarLayout = ({ main, sidebar }) => {
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Heading title="A to Z Fun" />
        <NavBar />
      </div>
      <div className="row">
        <div className="col-2">{sidebar}</div>
        <div className="col-10">{main}</div>
      </div>
    </div>
  );
};

export default SidebarLayout;
