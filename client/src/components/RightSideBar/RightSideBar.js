import React from "react";
import TopTags from "./TopTags";
import { useSelector } from "react-redux";

const RightSideBar = (props) => {
  const { loading } = useSelector((state) => state.question);

  return (
    <>
      {!loading && (
        <div className="flex flex-col w-1/3 ml-10 mr-10 mt-16" style={{ backgroundColor: "rgb(50, 50, 50)"}}>
          <TopTags />
        </div>
      )}
    </>
  );
};

export default RightSideBar;
