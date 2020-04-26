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
            {questionIndex>=(dataKeys.length-2) ? 
            <Link to="/results">
            <button className="btn btn-lg btn-primary mr-2">Submit Responses</button></Link>
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
                    disabled={(typeof userInput[idName] === "undefined")}
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
//tie progress bar to userInput Length
//give some answer for skipped question
//backend add answer when skipped
//look at next question and set answer with userInput[]
//Fix submit button! only show up for userInput length = dataKeys length
//Variable and function naming