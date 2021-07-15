import React from "react";
import Alert from "../components/Alert";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar/RightSideBar";
import QuestionDisplay from "../components/Question/QuestionDisplay";
import { useState } from "react";

const AllQuestions = () => {
  window.scrollTo(0,0);
  const [tagsArray, setTagsArray] = useState([]);
  const getTags = (tags) => { setTagsArray(tags); };
  
  return (
    <React.Fragment>
      <div className="min-h-screen bg-white">
        <Alert />
        <LeftSideBar />
        <div className="bg-white flex flex-row pl-72">
          <QuestionDisplay tagsArray={tagsArray} title="All Questions" />
          <RightSideBar getTags={getTags} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllQuestions;
