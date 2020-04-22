import {
  GET_DATA,
  GET_KEYS,
  INCREMENT,
  DECREMENT,
  SET_CURRENT_QUESTION,
  SET_CURRENT_ANSWER_OPTIONS,
  ADD_USER_INPUT,
  CALCULATE_PERCENT,
  SET_LOADING
} from "./types";

export default (state, action) => {
  switch(action.type) {
    case GET_DATA:
      return {
        ...state,
        dataArray: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
