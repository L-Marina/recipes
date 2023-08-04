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
		reducers: {
			removeRecipes (state, action: PayloadAction<number>) {
				console.log(state)
				console.log(state.recipesList)
				console.log(action.payload)
				debugger
				state.recipesList = state.recipesList.filter(recipe => recipe.id !== action.payload);
			},
			setActiveRecipe (state, action: PayloadAction<number>) {

				console.log(state)
				console.log(state.recipesList)

             if (action.payload === undefined) state.activeRecipe = null;
            const countRecipes = state.recipesList.length
				for(let i = 0; i < countRecipes; i++){
					console.log(state.recipesList[i].id)
					console.log(typeof  state.recipesList[i].id)
					console.log( typeof action.payload)
               if (state.recipesList[i].id === action.payload){
						debugger
                  state.activeRecipe = state.recipesList[i];
						console.log('if',state.activeRecipe)
               	break;
               }
            }
				console.log(state.activeRecipe)
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

export const {removeRecipes, setActiveRecipe} = recipesSlice.actions;

export default recipesSlice.reducer;
