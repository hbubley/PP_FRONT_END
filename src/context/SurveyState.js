import React, { useReducer } from "react";
import axios from "axios";
import { getAllQuestions } from "../utility/api-helper";
import SurveyContext from "./surveyContext";
import SurveyReducer from "./surveyReducer";
import { sortFunction } from "../utility/sortFunction";
import {
  GET_DATA,
  INCREMENT,
  DECREMENT,
  ADD_USER_INPUT,
  SET_LOADING,
} from "./types";

const SurveyState = (props) => {
  const initialState = {
    dataArray: "",
    dataKeys: [],
    questionIndex: 0,
    userInput: [],
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
  //Increment
  const increment = async () => {
    dispatch({
      type: INCREMENT,
    });
  };
  //Decrement
  const decrement = async () => {
    dispatch({
      type: DECREMENT,
    });
  };
  //Add User Input
  const handleUserInput = async(id, input, type, skip) => {
      let userSelect = {id, input}
      //WORKING ON TRANSFORMING FORMER LOGIC
      // if (type === "single") {
      //   return userSelect={id, input}
      // } else {
      //   let value = [input];
      //   if (input.length) {
      //     const answerArr = input.split(",");
      //     if (input.checked) {
      //       userSelect = ([idName, [...answerArr, value].join(",")]);
      //     } else {
      //       const answerIndex = answerArr.indexOf(value);
      //       if (answerIndex > -1) {
      //         let replaceArray = [...answerArr];
      //         replaceArray.splice(answerIndex, 1);
      //         setInput([idName, answerArr.join(",")]);
      //       }
      //     }
      //   }
      if(skip === true && input==='No'){
        for(let i = 1; i<=2; i++){increment()}
      }
      else if(type === "single" && state.questionIndex<(state.dataKeys.length-2)){
         increment()
      }
      dispatch ({
        type: ADD_USER_INPUT,
        payload: userSelect
      });
    }
  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <SurveyContext.Provider
      value={{
        dataArray: state.dataArray,
        dataKeys: state.dataKeys,
        questionIndex: state.questionIndex,
        userInput: state.userInput,
        loading: state.loading,
        getData,
        increment,
        decrement,
        handleUserInput,
      }}
    >
      {props.children}
    </SurveyContext.Provider>
  );
};

export default SurveyState;
// const [currentQuestion, setCurrentQuestion] = useState ({})
// const [currentAnswerOptions, setCurrentAnswerOptions] = useState ([])
// const [questionIndex, setQuestionIndex] = useState(0)
// const [userInput, setUserInput] = useState({})
// const [keyName, setKeyName] = useState("")
