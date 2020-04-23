import {
  GET_DATA,
  INCREMENT,
  DECREMENT,
  ADD_USER_INPUT,
  CALCULATE_PERCENT,
  SET_LOADING,
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
      return {
        ...state,
        userInput: action.payload
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
