import React from 'react'

export default function Results() {
    return (
        <div id="frailtyModal" className="modal fade">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Frailty Risk</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    
                    
                        <h4 className="text-success"><strong>Low - Pre-Frail (under 25%)</strong></h4>
                        <p>A Frailty Risk Score <strong>under 25%</strong> indicates someone who is <strong>very fit</strong>, robust and motivated.  The person <strong>will likely do well in rehab and return to baseline health and function</strong>. Our clinical care is  designed to support a speedy recovery while avoiding any new health problems.</p>
                    
                        <h4 className="text-success"><strong>Mildly Frail (between 25% and 29%)</strong></h4>
                        <p>A Frailty Risk Score <strong>between 25% and 29%</strong> indicates someone who is managing well but is less fit now and likely not as physically active. Even so, the person <strong>will likely do well in rehab and return to baseline health and function</strong>. Our clinical care is  designed to support a full recovery while avoiding any new health problems.</p>
                    
                        <h4 className="text-warning"><strong>Moderately Frail (between 30% and 39%)</strong></h4>
                        <p>A Frailty Risk Score <strong>between 30% and 39%</strong> indicates someone who is moderately frail. Fatigue and other symptoms may have limited activities and now they are <strong>less likely to return to baseline health and function</strong>. Completing rehab may be difficult.  Optimized clinical approach should be personalized, and every effort will be made to support recovery and prevent bad outcomes from occurring. <strong>Understanding care priorities and preference are very important and documenting advance directives will help honor their wishes.</strong></p>
                    
                        <h4 className="text-danger"><strong>Severely Frail (over 40%)</strong></h4>
                        <p>A Frailty Risk Score <strong>40% and greater</strong> indicates someone who is Severely Frail and as the score increases so does the risk for complications, in spite of excellent care.  They are <strong>likely to decline rapidly with the next illness or procedure</strong>. Honest communications, managing complications, and addressing new issues quickly are recommended. <strong>Completion of Advance Care Documents is critical.</strong></p>
                    
                </div>
            </div>
        </div>
    </div>
    )
}
