import React, {useContext} from 'react'
import SurveyContext from '../../context/surveyContext'

export default function SurveyOptions() {
    const {dataArray, dataKeys, questionIndex, handleUserInput, userInput} = useContext(SurveyContext);
    var _ = require('lodash/core');
    var includes = require('lodash.includes');
    //replace user checked 
    if(dataArray){ 
        let idName = dataKeys[questionIndex]
        let nextIdName = dataKeys[(questionIndex + 1)]
        let type = dataArray[idName].question_type
        let skip = dataArray[idName].skip_on_positive_response
        
        let answerOptions = dataArray[idName].answer_options.map((option, i) => {
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
                  onChange={e => handleUserInput(e, idName, nextIdName, type, skip)}
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
