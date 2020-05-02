import React, {useContext} from 'react'
import SurveyContext from '../../context/surveyContext'

export default function SurveyOptions() {
    const {allSurveyData, allSurveyKeys, questionIndex, handleUserInput, userInput} = useContext(SurveyContext);
    var _ = require('lodash/core');
    var includes = require('lodash.includes');
    //replace user checked 
    if(allSurveyData){ 
        let idName = allSurveyKeys[questionIndex]
        let nextIdName = allSurveyKeys[(questionIndex + 1)]
        let type = allSurveyData[idName].question_type
        let skip = allSurveyData[idName].skip_on_positive_response
        let nextQuestion_DefaultAnswer = allSurveyData[nextIdName].default_answer
        
        let answerOptions = allSurveyData[idName].answer_options.map((option, i) => {
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
                  onChange={e => handleUserInput(e, idName, nextIdName, type, skip, nextQuestion_DefaultAnswer)}
                  checked={(typeof userInput[idName] !== "undefined") ? includes(userInput[idName].split(','), option): false}
                  // checked={userInput}
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
