import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IRecipe } from '../../types';

interface RecipeState  {
	recipesList: IRecipe[];
	loading: boolean;
	error: null | string;
}

const initialState: RecipeState = {
	recipesList: [],
	loading: false,
	error: null,
}


export const fetchRecipes = createAsyncThunk<IRecipe[], undefined, {rejectValue: string}>(
	'recipes/fetchRecipes',
	async function(_, {rejectWithValue}) {
			const response = await fetch('https://api.punkapi.com/v2/beers');
			
			if(!response.ok) {
				return rejectWithValue('Server Error');
			}
			const data = await response.json();

			return data;
		}
);

export const recipesSlice = createSlice({
		name: 'recipes',
		initialState,
		reducers: {
			removeRecipes (state, action: PayloadAction<number>) {
				state.recipesList = state.recipesList.filter(recipe => recipe.id !== action.payload);
			},
			getRecipe (state, action: PayloadAction<number>) {
				state.recipesList.find(recipe => action.payload === recipe.id );
			},
		},
	
		extraReducers: {
			[fetchRecipes.pending.type]: (state) => {
				state.loading = true;
			},

			[fetchRecipes.fulfilled.type]: (state, action: PayloadAction<IRecipe[]>) => {
				state.loading = false;
				state.error = '';
				state.recipesList = action.payload;
			},

			[fetchRecipes.rejected.type]: (state, action: PayloadAction<string>) => {
				state.loading = false;
				state.error = action.payload;
			},
		}
	}
)

export const {removeRecipes, getRecipe} = recipesSlice.actions;

export default recipesSlice.reducer;
