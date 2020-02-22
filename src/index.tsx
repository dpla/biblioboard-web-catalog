import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import ContextProvider from "./ContextProvider";
import Catalog from "./Catalog";

const path = "/:collectionUrl?/:bookUrl?";

ReactDOM.render(
  <Router>
    <ContextProvider>
      <Route path={path} component={Catalog} />
    </ContextProvider>
  </Router>,
  document.getElementById("biblioboard-web-catalog")
);