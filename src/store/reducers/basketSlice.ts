import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type RecipeItem ={
	id: number;
	name: string;
	quantity:number;
}

type BasketState = {
	cart: RecipeItem [];
}
	
const initialState: BasketState = {
	cart: [],
}


export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {

		addToOrder (state, action: PayloadAction<RecipeItem>) {
			const itemCart = state.cart.find((item) => item.id === action.payload.id);
			if (itemCart) {
				itemCart.quantity++;
			} else {
				state.cart.push({...action.payload, quantity: 1})
			}
		},

		incrementQuantity(state, action: PayloadAction<number>) {
			const item = state.cart.find((item) => item.id === action.payload);
			if(item) {
				item.quantity--;
			}
		},
		
		decrementQuantity(state, action: PayloadAction<number>){
			const item = state.cart.find((item) => item.id === action.payload);
			if(item && item.quantity === 1){
				item.quantity = 1
			} else {
				item && item.quantity--;
			}
		},

		removeFromOrder (state, action: PayloadAction<number>) {
			state.cart = state.cart.filter(recipe => recipe.id !== action.payload);
		},
	}
})

export const {addToOrder, incrementQuantity, decrementQuantity, removeFromOrder} = basketSlice.actions;

export default basketSlice.reducer;
