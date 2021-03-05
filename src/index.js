import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { ReactQueryConfigProvider } from "react-query";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SidebarLayout from "./layouts/left-sidebar";

import List from "./modules/movies/listing";
import Filters from "./components/filters";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Loader = () => <div>Loading</div>;

const queryConfig = {
  suspense: false
};
function App() {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <Suspense fallback={<Loader />}>
        <Router className="App">
          <Route
            path="/"
            render={() => (
              <SidebarLayout sidebar={<Filters />} main={<List />} />
            )}
          ></Route>
        </Router>
      </Suspense>
    </ReactQueryConfigProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
