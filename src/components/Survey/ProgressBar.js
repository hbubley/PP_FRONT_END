import React, { useContext } from "react";
import SurveyContext from "../../context/surveyContext";

export default function ProgressBar() {
  const { dataKeys, questionIndex } = useContext(SurveyContext);
  if (dataKeys && dataKeys.length) {
    let percent = ((questionIndex) / (dataKeys.length-2)) * 100 + "%";
    console.log("DATAKEYLENGTH", dataKeys.length-1, questionIndex)
    return (
      <div className="progress ml-0 ml-md-5 mr-0 mr-md-5">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: percent }}
        ></div>
      </div>
    );
  } else {
    return <div id="loader" className="loader"></div>;
  }
}
