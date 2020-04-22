import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import SurveyContainer from "./components/Survey/SurveyContainer";
import Refer from "./components/Refer/Refer";
import Results from "./components/Results/Results";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <div class="container">
          <div class="self-service-container"></div>
          <Route exact path="/" render={(props) => <SurveyContainer />} />
          <Route path="/refer" render={(props) => <Refer />} />
          <Route path="/results" render={(props) => <Results />} />
          <p class="text-center mt-5 footer-logo">
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
    </div>
  );
}

export default App;
