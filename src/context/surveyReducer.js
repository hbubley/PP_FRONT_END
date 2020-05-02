import {
  GET_DATA,
  INCREMENT,
  DECREMENT,
  ADD_USER_RESPONSE,
  SET_LOADING
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        allSurveyData: action.payload[0],
        allSurveyKeys: action.payload[1],
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
    case ADD_USER_RESPONSE:  
      const newUserResponse = {...state.allUserResponses, ...action.payload}
      return {
        ...state,
        allUserResponses: newUserResponse
        
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
