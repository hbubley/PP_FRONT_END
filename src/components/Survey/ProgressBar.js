import React, { useContext } from "react";
import SurveyContext from "../../context/surveyContext";

export default function ProgressBar() {
  const { allSurveyKeys, allUserResponses } = useContext(SurveyContext);
  if (allSurveyKeys && allSurveyKeys.length) {
    console.log("USER INPUT LENGTH")
    let percent = ((Object.keys(allUserResponses).length) / (allSurveyKeys.length-1)) * 100 + "%";
    console.log("DATAKEYLENGTH", allSurveyKeys.length-1, Object.keys(allUserResponses).length)
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
