import { combineReducers } from 'redux';
import homeReducer from 'containers/Home/reducer';
import singleReducer from 'containers/ArticleSingle/reducer';

export default combineReducers({
  home: homeReducer,
  single: singleReducer
});