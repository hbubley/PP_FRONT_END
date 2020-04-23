import React, {useContext} from 'react'
import SurveyContext from '../../context/surveyContext'

export default function SurveyOptions() {
    const surveyContext = useContext(SurveyContext);
    if(surveyContext.dataArray){
        let dataCurrent = surveyContext.dataArray[surveyContext.dataKeys[surveyContext.questionIndex]]
        let idName = surveyContext.dataKeys[surveyContext.questionIndex]
        let type = dataCurrent.question_type
        let answerOptions = dataCurrent.answer_options.map((option, i) => {
            return (
              <label
                className="answer btn btn-lg btn-light text-primary mr-2"
                key={idName + "_" + i} 
              >
                <input
                  style={{"display": "inline-block", "verticalAlign": "baseline"}}
                  id={idName + "_" + i}
                  value={option}
                  type={type === "single" ? "radio" : "checkbox"}
                  name={idName}
                />
                &nbsp;
                <span style={{"display": "inline-block", "verticalAlign": "middle"}}>{option}</span>
              </label>
            );
          });
    return (
        <>
            {answerOptions}
        </>
    )
    }else{return <>LOADING</>}
}
