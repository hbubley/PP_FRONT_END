import {
  GET_DATA,
  INCREMENT,
  DECREMENT,
  ADD_USER_INPUT,
  SET_LOADING,
  SET_PERCENT
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        dataArray: action.payload[0],
        dataKeys: action.payload[1],
        loading: false,
      };
    case INCREMENT:
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
      };
    case DECREMENT:
      return {
        ...state,
        questionIndex: state.questionIndex - 1,
      };
    case ADD_USER_INPUT:
      console.log("USER INPU REDUCER", state.userInput)
      const newUserInput = [...state.userInput, action.payload]
      return {
        ...state,
        userInput: newUserInput
      }
    case SET_PERCENT:
      let percent = ((state.questionIndex+1) / state.keysData.length) * 100 + "%";
      return {
        ...state,
        percent: percent
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
