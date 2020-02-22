import * as React from "react";
import * as PropTypes from "prop-types";
import OPDSRouterContextProvider from "opds-web-client/lib/components/context/RouterContext";
import PathForProvider from "opds-web-client/lib/components/context/PathForContext";
import { useHistory, matchPath, useLocation } from "react-router-dom";


const pathFor = (collectionUrl: string, bookUrl: string) => {
  let path = "/";
  if (collectionUrl) {
    path += encodeURIComponent(collectionUrl);
  }
  if (bookUrl) {
    path += "/" + encodeURIComponent(bookUrl);
  }
  return path;
};

interface ContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const history = useHistory();
  const realLocation = useLocation();
  const router = {
    push: history.push,
    createHref: (location: string | Location) =>
    typeof location === "string"
      ? history.createHref({
          pathname: location
        })
      : history.createHref(location),
    isActive: (location: string | Location) =>
    typeof location === "string"
      ? !!matchPath(realLocation.pathname, {
          path: location,
          exact: false,
          strict: false
        })
      : !!matchPath(realLocation.pathname, {
          path: location.pathname,
          exact: false,
          strict: false
        })
  };

  return (
    <OPDSRouterContextProvider router={router}>
      <PathForProvider pathFor={pathFor}>
        <>
          {children}
        </>
      </PathForProvider>
    </OPDSRouterContextProvider>
  );
}

export default ContextProvider;