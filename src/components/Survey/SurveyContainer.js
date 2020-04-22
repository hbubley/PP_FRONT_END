import React, { useState, useEffect, useContext } from "react";
import PatientInfoBar from "./PatientInfoBar";
import ProgressBar from "./ProgressBar";
import SurveyQuestions from "./SurveyQuestions";
import SurveyOptions from "./SurveyOptions";
import Buttons from "./Buttons";
import SurveyContext from "../../context/surveyContext";

const SurveyContainer = () => {
  const surveyContext = useContext(SurveyContext);

 useEffect(() => {
      surveyContext.getData();
  }, []);
 
  return (
    <div className="bg-white bg-tab-content mt-4">
      <div className="content">
        <PatientInfoBar />
        <ProgressBar />
        <SurveyQuestions />
        <SurveyOptions />
        <Buttons />
      </div>
    </div>
  );
};
export default SurveyContainer;
