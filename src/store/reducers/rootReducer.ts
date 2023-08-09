import { combineReducers } from '@reduxjs/toolkit';
import recipesReducer from './recipesSlice';
import basketReducer from './basketSlice';

export const rootReducer = combineReducers({
	recipes: recipesReducer,
	basket: basketReducer,
});
