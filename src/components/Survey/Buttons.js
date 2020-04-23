import React, {useContext} from 'react'
import SurveyContext from '../../context/surveyContext'

export default function Buttons() {
    const {increment, decrement, questionIndex} = useContext(SurveyContext)
    return (
        <>
        <p className="mt-4 pl-md-5 pr-4 pr-md-5">
            <a href="/app/result/12479/" className="submit btn btn-lg btn-primary disabled mr-2">Submit Responses</a>
            <span className="back-next-controls">
                <button className="backBtn btn btn-light mr-2" disabled = {questionIndex===0} onClick={decrement}><i className="fal fa-arrow-left"></i>&nbsp; Back</button>
                <button className="nextBtn btn btn-light" onClick={increment}>Next &nbsp;<i className="fal fa-arrow-right"></i></button>
            </span>
        </p>
        </>
    )
}
