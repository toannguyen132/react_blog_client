import {
  STATUS_LOADING,
  STATUS_SUCCESS,
  STATUS_ERROR } from './constants';

const defaultState = {
  isLoading: false,
  hasErrors: false,
  errors: null,
  article: {},
}

const singleReducer = (state = defaultState, action) => {
  console.log(state);
  switch (action.type) {
    case STATUS_LOADING:
      return Object.assign({}, state, {
        isLoading: true
      });
    case STATUS_SUCCESS:
      return Object.assign({}, state,{
        isLoading: false,
        hasErrors: false,
        article: action.article
      });
    case STATUS_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        hasErrors: true,
        error: action.error
      });
    default: 
      return state;
  }
}

export default singleReducer;