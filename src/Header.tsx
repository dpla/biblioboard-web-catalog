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
          <li><a href="https://pro.dp.la/">Home</a></li>
          <li><a href="https://pro.dp.la/hubs">Hubs</a></li>
          <li><a href="https://pro.dp.la/ebooks">Ebooks</a></li>
          <li><a href="https://pro.dp.la/projects">Projects</a></li>
        </ul>
        <span className="divider"></span>
        <ul>
          <li><a href="https://pro.dp.la/about">About</a></li>
          <li><a href="https://pro.dp.la/events">Events</a></li>
        </ul>
        <span className="divider"></span>
        <ul>
          <li><a href="https://dp.la/">DPLA Main Site</a></li>
          <li><a href="https://dp.la/news">News</a></li>
        </ul>
      </div>

      <div className="dpla-header">
        <ul>
          <li><a href="https://dp.la" target="_blank">
            <img alt="Home Page" src="https://pro.dp.la/static/images/dpla-logo.svg" height="32px"/>
          </a></li>
        </ul>
        <ul>
          <li><a href="https://pro.dp.la/ebooks">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 198 120">
              <path d="M78.75 32.5h38.5a1.839 1.839 0 0 0 1.833-1.833 1.839 1.839 0 0 0-1.833-1.834h-38.5a1.839 1.839 0 0 0-1.833 1.834c0 1.008.825 1.833 1.833 1.833zm0 9.717h38.5a1.839 1.839 0 0 0 1.833-1.834 1.839 1.839 0 0 0-1.833-1.833h-38.5a1.839 1.839 0 0 0-1.833 1.833c0 1.009.825 1.834 1.833 1.834zm0 9.625h38.5a1.839 1.839 0 0 0 1.833-1.834 1.839 1.839 0 0 0-1.833-1.833h-38.5a1.839 1.839 0 0 0-1.833 1.833c0 1.009.825 1.834 1.833 1.834zm0 9.716h38.5a1.839 1.839 0 0 0 1.833-1.833 1.839 1.839 0 0 0-1.833-1.833h-38.5a1.839 1.839 0 0 0-1.833 1.833c0 1.008.825 1.833 1.833 1.833zm0 9.625h38.5a1.839 1.839 0 0 0 1.833-1.833 1.839 1.839 0 0 0-1.833-1.833h-38.5a1.839 1.839 0 0 0-1.833 1.833c0 1.008.825 1.833 1.833 1.833zm0 9.717h38.5a1.839 1.839 0 0 0 1.833-1.833 1.839 1.839 0 0 0-1.833-1.834h-38.5a1.839 1.839 0 0 0-1.833 1.834c0 1.008.825 1.833 1.833 1.833z"></path><path d="M128.158 16.55l-60.133-.092c-1.558 0-2.75 1.284-2.75 2.75l-.092 81.492c0 1.558 1.284 2.75 2.75 2.75l60.134.092c1.558 0 2.75-1.284 2.75-2.75l.091-81.492c0-1.558-1.283-2.75-2.75-2.75zM98 98.958c-2.017 0-3.575-1.558-3.575-3.575 0-2.016 1.65-3.575 3.575-3.575 2.017 0 3.575 1.65 3.575 3.575 0 1.925-1.65 3.575-3.575 3.575zm27.317-11.733l-54.634-.092.092-65.083 54.633.092-.091 65.083z"></path>
            </svg>
            Ebooks
          </a></li>
        </ul>
      </div>

      <div className="dpla-header">
        <ul>
          <li><a href={interestFormUrl}>Request a Quote</a></li>
        </ul>
        <span className="divider"></span>
        <ul>
          <li><a href="https://exchange.dp.la">DPLA Exchange Main Site</a></li>
        </ul>
      </div>
    </>
  );
};

export default Header;