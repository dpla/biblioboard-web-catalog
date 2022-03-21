import * as React from "react";
import Config from "./config";

interface HeaderProps {
  collectionTitle?: string;
}

const Header : React.FC<HeaderProps> = ({ collectionTitle }) => {
  let interestFormUrl = Config.INTEREST_FORM_URL;
  if (collectionTitle) {
    interestFormUrl += collectionTitle;
  }

  return (
    <>
      <div className="dpla-header">
        <ul>
          <li><a href="/" target="_blank">
            <img src={"palace.png"} alt={"The Palace Project"}/>
          </a></li>
        </ul>
        <span className="divider"></span>
        <ul>
          <li><a href="https://thepalaceproject.org/">The Palace Project</a></li>
          <li><a href="https://market.thepalaceproject.org/">Palace Marketplace</a></li>
          <li><a href={interestFormUrl}>Request a Quote</a></li>
        </ul>
      </div>
      <div className="site-header"><h1>BibilioBoard Catalog</h1></div>
    </>
  );
};

export default Header;