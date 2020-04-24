import React, { useEffect, useContext } from "react";
import PatientInfoBar from "./PatientInfoBar";
import ProgressBar from "./ProgressBar";
import SurveyQuestions from "./SurveyQuestions";
import Buttons from "./Buttons";
import SurveyContext from "../../context/surveyContext";

const SurveyContainer = () => {
  const surveyContext = useContext(SurveyContext);
  useEffect(() => {
    surveyContext.getData();
  }, []);

  if (surveyContext.loading === false) {
    return (
      <div className="bg-white bg-tab-content mt-4">
        <div className="content">
          <PatientInfoBar />
          <ProgressBar />
          <SurveyQuestions />
          <Buttons />
        </div>
      </div>
    );
  } else {
    return (
      <div id="loader" className="loader">
        <img
          className="spin"
          src="https://patientpattern-static.s3.amazonaws.com/static/2016/img/pp-logo-badge.png"
          height="83"
          width="75"
          alt= ''
        />
      </div>
    );
  }
};
export default SurveyContainer;
