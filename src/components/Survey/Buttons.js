import React from 'react'

export default function Buttons() {
    return (
        <>
            <p className="mt-4 pl-md-5 pr-4 pr-md-5">
            <a href="/app/result/12479/" className="submit btn btn-lg btn-primary disabled mr-2">Submit Responses</a>
            <span className="back-next-controls">
                <a href="#" className="backBtn btn btn-light disabled mr-2"><i className="fal fa-arrow-left"></i>&nbsp; Back</a>
                <a href="#" className="nextBtn btn btn-light disabled">Next &nbsp;<i className="fal fa-arrow-right"></i></a>
            </span>
        </p>
        </>
    )
}
