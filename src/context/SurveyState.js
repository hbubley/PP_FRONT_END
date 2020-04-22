import React, {useReducer} from 'react';
import axios from "axios";
import {getAllQuestions} from "../utility/api-helper"
import SurveyContext from "./surveyContext";
import SurveyReducer from "./surveyReducer"
import {
    GET_DATA,
    GET_KEYS
    INCREMENT,
    DECREMENT,
    SET_CURRENT_QUESTION,
    SET_CURRENT_ANSWER_OPTIONS,
    ADD_USER_INPUT,
    CALCULATE_PERCENT,
    SET_LOADING
} from "./types";

const SurveyState = props => {
    const initialState = {
        dataArray: '',
        dataKeys: [],
        questionIndex: 0,
        currentQuestion: {},
        currentAnswerOptions: [],
        userInput: {},
        keyName: '',
        percent: 0,
        loading: false
    }

    const [state, dispatch] = useReducer(SurveyReducer, initialState)
    //Get Data
      const getData = async () => {
        const res = await getAllQuestions();
        const res_data = await res[0];
        dispatch({
           type: GET_DATA,
           payload: res_data
        })
      };
    //Get Keys
      const getKeys = async () => {
          
      }
    //Increment
    //Decrement
    //Set Current Question
    //Set Current Answer Options
    //Add User Input
    //Calculate Percent
    //Set Loading
      const setLoading = () => dispatch({ type: SET_LOADING })

    return <SurveyContext.Provider
        value={{
        dataArray: state.dataArray,
        questionIndex: state.questionIndex,
        currentQuestion: state.currentQuestion,
        currentAnswerOptions: state.currentAnswerOptions,
        userInput: state.userInput,
        keyName: state.keyName,
        percent: state.percent,
        loading: state.loading,
        getData
        }}
    >
        {props.children}
    </SurveyContext.Provider>
}

export default SurveyState
// const [currentQuestion, setCurrentQuestion] = useState ({})
// const [currentAnswerOptions, setCurrentAnswerOptions] = useState ([])
// const [questionIndex, setQuestionIndex] = useState(0)
// const [userInput, setUserInput] = useState({})
// const [keyName, setKeyName] = useState("")