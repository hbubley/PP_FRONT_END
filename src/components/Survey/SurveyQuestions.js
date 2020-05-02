import React, {useContext} from 'react'
import SurveyContext from '../../context/surveyContext'
import SurveyOptions from "./SurveyOptions"
export default function SurveyQuestions() {
    const {allSurveyData, allSurveyKeys, questionIndex} = useContext(SurveyContext);
    if(allSurveyData){
    let dataCurrent = allSurveyData[allSurveyKeys[questionIndex]]
    return (
        <div className="questions">
            <div className="question mb-4 pt-4 pt-4 pb-4 p-md-5 active">
                <h3 className="mb-4">{dataCurrent.question}</h3>
                <SurveyOptions />
            </div>
        </div>
    )
    }else{return <>LOADING</>}
}
