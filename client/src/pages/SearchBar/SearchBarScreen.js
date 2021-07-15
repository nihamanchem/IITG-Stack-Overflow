import React from "react";
import { useLocation } from "react-router-dom";
import SearchResults from "./SearchResults";
import LeftSideBar from "../../components/LeftSideBar"

const SearchBarScreen = () => {
  window.scrollTo(0, 0);
  const location = useLocation();
  const url = location.pathname.split("/")[2];

  return (
    <React.Fragment>
      <div className="min-h-screen" style={{ backgroundColor: "rgb(50, 50, 50)"}}>
        <LeftSideBar />
        <div className="flex flex-row pl-72">
          <SearchResults url={url} />
        </div>
      </div>
    </React.Fragment>
  );
};
export default SearchBarScreen;

