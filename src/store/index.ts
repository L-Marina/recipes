import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './reducers/recipesSlice';
import basketReducer from './reducers/basketSlice';

const store = configureStore({
	reducer: {
		recipes: recipesReducer,
		basket: basketReducer,
	},
})

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;