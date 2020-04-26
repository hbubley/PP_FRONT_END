import {
  GET_DATA,
  INCREMENT,
  DECREMENT,
  ADD_USER_INPUT,
  SET_LOADING
} from "./types";
var _ = require('lodash/core');

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
      const newUserInput = {...state.userInput, ...action.payload}
      console.log("newUserInput ", newUserInput )
      
      // _.join(array, [separator=',']) for multi input
      // _.pullAt(array, [indexes]) 
      // _.pullAllBy(array, values, [iteratee=_.identity])
      // _.pullAllWith(array, values, [comparator])
      return {
        ...state,
        userInput: newUserInput
        
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
