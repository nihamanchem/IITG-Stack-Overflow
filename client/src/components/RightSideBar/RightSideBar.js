import React from "react";
import TopTags from "./TopTags";
import WatchedTags from "./WatchedTags";
import { useSelector } from "react-redux";

const RightSideBar = (props) => {
  const { loading } = useSelector((state) => state.question);

  return (
    <>
      {!loading && (
        <div className="flex flex-col w-1/3 ml-10 mr-10 mt-16 bg-gray-800">
          <WatchedTags getTags={props.getTags} />
          <TopTags />
        </div>
      )}
    </>
  );
};

export default RightSideBar;
