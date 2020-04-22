import React from 'react'

export default function Nav() {
    return (
<div id="pp-navbar" className="navbar-container container" style={{"background": "#007bff"}}>
  <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/livepac/"><img height="26" src="https://patientpattern-static.s3.amazonaws.com/static/2016/img/pp-logo-badge-white.png" style={{"display": "inline"}} alt="" /></a>
      <div className="collapse navbar-collapse navbar-light" id="navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><a className="nav-link" href="/accounts/logout/?next=/app/begin"><i className="fal fa-sign-out fa-fw"></i>Exit</a></li>
        </ul>
      </div>
  </nav>
</div>
    )
}
