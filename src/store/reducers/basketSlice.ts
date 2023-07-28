import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RecipeId } from '../../types';

type RecipeItem ={
	id: RecipeId;
	name: string;
	quantity: number;
}

type RecipeItemAction ={
	id: RecipeId;
	name: string;
}

type BasketState = {
	list: RecipeItem [];
}
	
const initialState: BasketState = {
	list: [],
}

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addToOrder (state, action: PayloadAction<RecipeItemAction>) {
			state.list.push({
				id: action.payload.id,
				name: action.payload.name,
				quantity:1,
			});
		},
			
		removeFromOrder (state, action: PayloadAction<RecipeId>) {
			state.list = state.list.filter(recipe => recipe.id !== action.payload);
		},
	},
})

export const {addToOrder, removeFromOrder} = basketSlice.actions;

export default basketSlice.reducer;
