import React from 'react'

export default function SurveyOptions() {
    return (
        <>
    <label className="answer btn btn-lg btn-light text-primary mr-2">
        <input style={{"display": "inline-block", "verticalAlign": "baseline"}} id="CFRA1_1" data-negative="true" value="Yes" type="radio" name="CFRA1" />&nbsp; <span style={{"display": "inline-block", "verticalAlign": "middle"}}>Yes</span>
    </label>

    <label className="answer btn btn-lg btn-light text-primary mr-2">
        <input style={{"display": "inline-block", "verticalAlign": "baseline"}} id="CFRA1_2" value="No" type="radio" name="CFRA1" />&nbsp; <span style={{"display": "inline-block", "verticalAlign": "middle"}}>No</span>
    </label>

    <label className="answer btn btn-lg btn-light text-primary mr-2">
        <input style={{"display": "inline-block", "verticalAlign": "baseline"}} id="CFRA1_3" value="Unknown" type="radio" name="CFRA1" />&nbsp; <span style={{"display": "inline-block", "verticalAlign": "middle"}}>Unknown</span>
    </label>
    </>
    )
}
