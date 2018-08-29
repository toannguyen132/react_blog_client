import {
  STATUS_LOADING,
  STATUS_SUCCESS,
  STATUS_ERROR } from 'containers/Home/constants';

const defaultState = {
  isLoading: false,
  hasErrors: false,
  errors: null,
  articles: []
}

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case STATUS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    break;
    case STATUS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasErrors: false,
        articles: action.articles
      };
    break;
    case STATUS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasErrors: true,
        error: action.error
      };
    break;
    default: 
      return state;
  }
}

export default homeReducer;