import React from 'react'

export default function SurveyQuestions() {
    return (
        <div class="questions">
        
            <div id="CFRA1" class="question mb-4 pt-4 pt-4 pb-4 p-md-5 active" data-question-type="single"  data-related-question="CFRA2" data-skip-on-positive="true">
                <h3 class="mb-4">Has the person been told they are gay?</h3>
                
                    <label class="answer btn btn-lg btn-light text-primary mr-2">
                        <input style={{"display": "inline-block", "vertical-align": "baseline;"}} id="CFRA1_1" data-negative="true" value="Yes" type="radio" name="CFRA1" />&nbsp; <span style={{"display": "inline-block", "vertical-align": "middle"}}>Yes</span>
                    </label>
                
                    <label class="answer btn btn-lg btn-light text-primary mr-2">
                        <input style={{"display": "inline-block", "vertical-align": "baseline;"}} id="CFRA1_2" value="No" type="radio" name="CFRA1" />&nbsp; <span style={{"display": "inline-block", "vertical-align": "middle"}}>No</span>
                    </label>
                
                    <label class="answer btn btn-lg btn-light text-primary mr-2">
                        <input style={{"display": "inline-block", "vertical-align": "baseline;"}} id="CFRA1_3" value="Unknown" type="radio" name="CFRA1" />&nbsp; <span style={{"display": "inline-block", "vertical-align": "middle"}}>Unknown</span>
                    </label>
                
            </div>
        
            </div>
    )
}
