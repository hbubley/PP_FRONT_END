import React, {useContext} from 'react'
import SurveyContext from "../../context/surveyContext"
import surveyContext from '../../context/surveyContext'

export default function ProgressBar() {
   const {dataKeys, questionIndex} = useContext(SurveyContext)
   if(dataKeys && dataKeys.length){
    let percent = ((questionIndex) / dataKeys.length) * 100 + "%";
   console.log("Percent", percent)
    return (
        <div className="progress ml-0 ml-md-5 mr-0 mr-md-5">
            <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{ width: percent }}></div>
        </div>
    )
   }else{return <div id="loader" class="loader">
   <img
     className="spin"
     src="https://patientpattern-static.s3.amazonaws.com/static/2016/img/pp-logo-badge.png"
     height="83"
     width="75"
     alt= ''
   />
 </div>}
}
