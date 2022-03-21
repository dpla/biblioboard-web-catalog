import * as React from "react";
const OPDSCatalog = require("opds-web-client");
import { ActionsProvider } from "opds-web-client/lib/components/context/ActionsContext";
import Config from "./config";
import Header from "./Header";
import DataFetcher from "opds-web-client/lib/DataFetcher";
import ActionCreator from "opds-web-client/lib/actions";

interface CatalogProps {
  match: {
    params: {
      collectionUrl: string;
      bookUrl: string;
    }
  };
}

const Catalog : React.FC<CatalogProps> = ({ match }) => {
  let params = match && match.params;
  let pageTitleTemplate = (collectionTitle, bookTitle) => {
    let details = bookTitle || collectionTitle;
    return (
      "BiblioBoard Catalog" + (details ? " - " + details : "")
    );
  };

  let collectionUrl, bookUrl;
  if (params) {
    collectionUrl = params.collectionUrl;
    bookUrl = params.bookUrl;
  }
  if (collectionUrl) {
    collectionUrl = decodeURIComponent(collectionUrl);
  }
  if (bookUrl) {
    bookUrl = decodeURIComponent(bookUrl);
  }
  if (!collectionUrl) {
    collectionUrl = Config.OPDS_URL;
  }

  const fetcher = new DataFetcher();
  const actionsCreator = new ActionCreator(fetcher);

  return (
    <ActionsProvider actions={actionsCreator} fetcher={fetcher}>
      <OPDSCatalog
        collectionUrl={collectionUrl}
        bookUrl={bookUrl}
        Header={Header}
        pageTitleTemplate={pageTitleTemplate}
      />
    </ActionsProvider>
  );
}
export default Catalog;