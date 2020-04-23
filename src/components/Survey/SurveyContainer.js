import React, { useEffect, useContext } from "react";
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
      console.log("render")
  }, []);


if(surveyContext.loading===false){
 console.log("dataKeys, dataArray - SurveyContainer", surveyContext.dataKeys, surveyContext.dataArray)
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
  }else{
    console.log("LOAD") 
  return <>loading</>}
};
export default SurveyContainer;
