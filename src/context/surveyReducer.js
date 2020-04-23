import {
  GET_DATA,
  INCREMENT,
  DECREMENT,
  ADD_USER_INPUT,
  CALCULATE_PERCENT,
  SET_LOADING
} from "./types";

export default (state, action) => {
  switch(action.type) {
    case GET_DATA:
      return {
        ...state,
        dataArray: action.payload[0],
        dataKeys: action.payload[1],
        loading: false
      }
    // case INCREMENT:
    //   return{
    //     ...state,
    //     questionIndex: questionIndex + 1
    //   }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
