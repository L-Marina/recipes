import React, {useEffect} from 'react';
import { useAppSelector, useAppDispatch} from '../../hooks';
import { RecipesItem } from './RecipesItem';
import Grid from '@mui/material/Grid/Grid';
import { fetchRecipes } from '../../store/reducers/recipesSlice';


export const AdditionalLoading = () => {

	const recipes = useAppSelector(state => state.recipes.recipesList);

	const dispatch = useAppDispatch();

	useEffect( () => {
		if(recipes.length <= 0) { 
		dispatch(fetchRecipes())
	}}, [dispatch,recipes.length]);

	return (
		<Grid container rowSpacing={2} >
			{recipes.map ((recipe) => {
					return (
						<RecipesItem
							key={recipe.id}
								{...recipe}/>
						)
					}
				)
			}		
		</Grid>
	)
}

