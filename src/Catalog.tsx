import * as React from "react";
const OPDSCatalog = require("opds-web-client");
import { ActionsProvider } from "opds-web-client/lib/components/context/ActionsContext";
import Config from "./config";
import Header from "./Header";

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
      "Biblioboard | DPLA Exchange" + (details ? " - " + details : "")
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

  return (
    <ActionsProvider>
      <OPDSCatalog
        collectionUrl={collectionUrl}
        bookUrl={bookUrl}
        Header={Header}
        //Footer={Footer}
        // BookDetailsContainer={BookDetailsContainer}
        pageTitleTemplate={pageTitleTemplate}
      />
    </ActionsProvider>
  );
}
export default Catalog;