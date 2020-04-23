import React, {useContext} from 'react'
import SurveyContext from '../../context/surveyContext'

export default function SurveyOptions() {
    const {dataArray, dataKeys, questionIndex} = useContext(SurveyContext);
    if(dataArray){
        let idName = dataKeys[questionIndex]
        let answerOptions = dataArray[idName].answer_options.map((option, i) => {
          console.log(option.question_type)
            return (
              <label
                className="answer btn btn-lg btn-light text-primary mr-2"
                key={idName + "_" + i} 
              >
                <input
                  style={{"display": "inline-block", "verticalAlign": "baseline"}}
                  id={idName + "_" + i}
                  value={option}
                  type={dataArray[idName].question_type === "single" ? "radio" : "checkbox"}
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
