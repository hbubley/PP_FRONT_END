import React, {useReducer} from 'react';
import axios from "axios";
import {getAllQuestions} from "../utility/api-helper"
import SurveyContext from "./surveyContext";
import SurveyReducer from "./surveyReducer"
import {sortFunction} from "../utility/sortFunction"
import {
    GET_DATA,
    GET_KEYS,
    CURRENT_KEY,
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
        setLoading()
        const res = await getAllQuestions();
        const res_data = await res[0]
        const keyArray = Object.keys(res_data).map((item) => item);
        await keyArray.sort(sortFunction).splice(0,1);
        dispatch({
           type: GET_DATA,
           payload: [res_data, keyArray]
        })
      };
    //currentKey
    //Increment
    //Decrement
    //Set Current Question
    const currentQuestion = async (index) => {
        
    }
    //Set Current Answer Options
    //Add User Input
    //Calculate Percent
    //Set Loading
      const setLoading = () => dispatch({ type: SET_LOADING })

    return <SurveyContext.Provider
        value={{
        dataArray: state.dataArray,
        dataKeys: state.dataKeys,
        questionIndex: state.questionIndex,
        currentQuestion: state.currentQuestion,
        currentAnswerOptions: state.currentAnswerOptions,
        userInput: state.userInput,
        keyName: state.keyName,
        percent: state.percent,
        loading: state.loading,
        getData
        // getKeys
      
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