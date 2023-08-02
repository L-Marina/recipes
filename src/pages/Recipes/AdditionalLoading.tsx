import React, {useEffect} from 'react';
import { useAppSelector, useAppDispatch} from '../../hooks';
import { RecipesItem } from './RecipesItem';
import { fetchRecipes } from '../../store/reducers/recipesSlice';
import { Grid } from '@mui/material';


export const AdditionalLoading = () => {

	const recipes = useAppSelector(state => state.recipes.recipesList);

	const dispatch = useAppDispatch();

	useEffect( () => {
		if(recipes.length <= 0) { 
		dispatch(fetchRecipes())
	}}, [dispatch,recipes.length]);

	return (
		<Grid container rowSpacing={2}>
			{recipes.map ((recipe) => {
					return (
						<RecipesItem
							key={recipe.id}
							// recipe={recipe}/>
							{...recipe}/>
						)
					}
				)
			}		
		</Grid>
	)
}

