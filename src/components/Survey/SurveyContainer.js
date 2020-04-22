import React from 'react'
import PatientInfoBar from "./PatientInfoBar"
import ProgressBar from "./ProgressBar"
import SurveyQuestions from "./SurveyQuestions"
import Buttons from "./Buttons"


export default function SurveyContainer() {
    return (
        <div class="bg-white bg-tab-content mt-4">
            <div className="content">
                <PatientInfoBar />
                <ProgressBar />
                <SurveyQuestions />
                <Buttons />
           </div>
        </div>
    )
}
