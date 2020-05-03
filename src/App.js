import React from "react";
import { Switch, Route } from "react-router-dom";
import SurveyContainer from "./components/Survey/SurveyContainer";
import Refer from "./components/Refer/Refer";
import Results from "./components/Results/Results";
import Nav from "./components/Nav";
import SurveyState from "./context/SurveyState";
import LogRocket from 'logrocket';

function App() {
  LogRocket.init('shaqrs/fraility_score')
  return (
    <SurveyState>
      <Nav />
      <Switch>
        <div className="container">
          <div className="self-service-container"></div>
          <Route exact path="/" component={SurveyContainer} />
          <Route path="/refer" component = {Refer} />
          <Route path="/results" component= {Results} />
          <p className="text-center mt-5 footer-logo">
            <a href="/">
              <img
                height="80"
                src="https://patientpattern-static.s3.amazonaws.com/static/2016/img/pp-logo.png"
                alt=""
              />
            </a>
          </p>
        </div>
      </Switch>
    </SurveyState>
  );
}

export default App;
