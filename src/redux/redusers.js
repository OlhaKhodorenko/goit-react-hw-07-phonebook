import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { changeFilter } from './actions';

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ filter });
