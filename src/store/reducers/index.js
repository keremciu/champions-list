import { combineReducers } from 'redux';

import listReducer from './list'
import detailReducer from './detail'

export default combineReducers({
  list: listReducer,
  detail: detailReducer,
});

