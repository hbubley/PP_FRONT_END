import React, { useReducer } from "react";
import { getAllQuestions } from "../utility/api-helper";
import SurveyContext from "./surveyContext";
import SurveyReducer from "./surveyReducer";
import { sortFunction } from "../utility/sortFunction";
import {
  GET_DATA,
  INCREMENT,
  DECREMENT,
  ADD_USER_RESPONSE,
  SET_LOADING,
} from "./types";
const SurveyState = (props) => {
  const initialState = {
    allSurveyData: "",
    allSurveyKeys: [],
    questionIndex: 0,
    allUserResponses: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(SurveyReducer, initialState);
  //Get Data
  const getData = async () => {
    setLoading();
    const res = await getAllQuestions();
    const res_data = await res[0];
    const keyArray = Object.keys(res_data).map((item) => item);
    await keyArray.sort(sortFunction).splice(0, 1);
    dispatch({
      type: GET_DATA,
      payload: [res_data, keyArray],
    });
  };
  const increment = async () => {
    dispatch({
      type: INCREMENT,
    });
  };
  const decrement = async () => {
    dispatch({
      type: DECREMENT,
    });
  };
  const handleUserResponses = async (
    e,
    id,
    nextId,
    type,
    skip,
    nextQuestion_DefaultAnswer
  ) => {
    const input = e.target;
    const value = input.value;
    let userSelect = {};
    let updatedInput =
      typeof state.allUserResponses[id] !== "undefined"
        ? state.allUserResponses[id]
        : "";
    if (type === "single") {
      updatedInput = value;
    } else {
      let answerArr = [];
      if (updatedInput.length) {
        answerArr = updatedInput.split(",");
      }
      if (input.checked) {
        if (answerArr.length) {
          updatedInput = [...answerArr, value].join(",");
        } else {
          updatedInput = value;
        }
      } else {
        const answerIndex = answerArr.indexOf(value);
        if (answerIndex > -1) {
          let replaceArray = [...answerArr];
          replaceArray.splice(answerIndex, 1);
          updatedInput = replaceArray.join(",");
        }
      }
    }
    userSelect[id] = updatedInput;
    if (skip === true && updatedInput === "No") {
      //change none of the above to the back-end property
      userSelect[nextId] = nextQuestion_DefaultAnswer;
      for (let i = 1; i <= 2; i++) {
        increment();
      }
    } else if (
      type === "single" &&
      state.questionIndex < state.allSurveyKeys.length - 2
    ) {
      increment();
    }
    dispatch({
      type: ADD_USER_RESPONSE,
      payload: userSelect,
    });
  };
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <SurveyContext.Provider
      value={{
        allSurveyData: state.allSurveyData,
        allSurveyKeys: state.allSurveyKeys,
        questionIndex: state.questionIndex,
        allUserResponses: state.allUserResponses,
        loading: state.loading,
        getData,
        increment,
        decrement,
        handleUserResponses,
      }}
    >
      {props.children}
    </SurveyContext.Provider>
  );
};

export default SurveyState;
