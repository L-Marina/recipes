import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IRecipe } from '../../types';

interface RecipeState  {
	recipesList: IRecipe[],
	activeRecipe: IRecipe | null | any,
	loading: boolean,
	error: null | string,
}

const initialState: RecipeState = {
	recipesList: [],
	activeRecipe: null,
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
		reducers:{
			removeRecipes (state, action: PayloadAction<number>) {
				state.recipesList = state.recipesList.filter(recipe => recipe.id !== action.payload);
			},
			setActiveRecipe (state, action: PayloadAction<number>) {
                if (action.payload === undefined) state.activeRecipe = null;
                const countRecipes = state.recipesList.length
				for(let i = 0; i < countRecipes; i++){
                    if (state.recipesList[i].id === action.payload){
                        state.activeRecipe = state.recipesList[i];
                        break;
                    }
                }
			},
		},
		extraReducers: (builder) => {
			builder.addCase(fetchRecipes.pending,(state) => {
				state.loading = true;
				state.error = null;
			});
			builder.addCase(fetchRecipes.fulfilled,(state, action: PayloadAction<IRecipe[]>) => {
				state.loading = false;
				 state.error = '';
				 state.recipesList = action.payload;
			});
			builder.addCase(fetchRecipes.rejected,(state, action: PayloadAction<string | undefined>) => {
				if (action.payload) {
					state.error = action.payload;
				} state.loading = false;
			});
		},
	}
)

export const {removeRecipes, setActiveRecipe} = recipesSlice.actions;

export default recipesSlice.reducer;
