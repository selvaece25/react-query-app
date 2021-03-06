import React from "react";

import Heading from "../components/layout-header";
import NavBar from "../components/layout-nav-bar";

const RightSidebarLayout = ({ main, sidebar, side_bar_type: sideBarType }) => {

  const bodyTemplate = [];
  bodyTemplate[1] = <><div className="col-2">{sidebar}</div><div className="col-10">{main}</div> </>;
  bodyTemplate[2] = <><div className="col-10">{main}</div><div className="col-2">{sidebar}</div> </>;
  bodyTemplate[3] = <><div className="col-12">{main}</div> </>;
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Heading title="A to Z Fun" />
        <NavBar />
      </div>
      <div className="row">
         { bodyTemplate[sideBarType] }
      </div>
    </div>
  );
};

export default RightSidebarLayout;
