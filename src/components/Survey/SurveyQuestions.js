import React, {useContext} from 'react'
import SurveyContext from '../../context/surveyContext'
export default function SurveyQuestions() {
    const surveyContext = useContext(SurveyContext);
    console.log(surveyContext.dataArray[surveyContext.dataKeys[surveyContext.questionIndex]])
    
    
  
    return (
        <div className="questions">
            <div id="CFRA1" className="question mb-4 pt-4 pt-4 pb-4 p-md-5 active" data-question-type="single"  data-related-question="CFRA2" data-skip-on-positive="true">
                <h3 className="mb-4">{}</h3>
            </div>
        
        </div>
    )
}
