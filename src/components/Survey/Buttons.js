import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import SurveyContext from '../../context/surveyContext'

export default function Buttons() {
    const {increment, decrement, questionIndex, userInput, loading, dataKeys} = useContext(SurveyContext)
    if(loading === false){
        let idName = dataKeys[questionIndex]
    return (
        <>
        <p className="mt-4 pl-md-5 pr-4 pr-md-5">
            {(Object.keys(userInput).length) === (dataKeys.length-1) ? 
                <Link to="/results">
                    <button className="btn btn-lg btn-primary mr-2">
                        Submit Responses
                    </button>
                </Link>
            : null}
            <span className="back-next-controls">
                <button 
                    className="backBtn btn btn-light mr-2" 
                    disabled = {questionIndex===0} 
                    onClick={decrement}
                >
                        <i className="fal fa-arrow-left"></i>
                        &nbsp;Back
                </button>
                <button 
                    className="nextBtn btn btn-light" 
                    onClick={increment} 
                    disabled={(typeof userInput[idName] === "undefined" || (Object.keys(userInput).length) === (dataKeys.length-1))}
                    >
                        Next &nbsp;
                        <i className="fal fa-arrow-right"></i>
                </button>
            </span>
        </p>
        </>
    )
    }else{
        return <>loading</>
    }
}
//standards are better than better

//HW
//backend add answer when skipped
//Variable and function naming (userInput = responses)