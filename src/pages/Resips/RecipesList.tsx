import React from 'react';
import { useAppSelector } from '../../hooks';
import { RecipesItem } from './RecipesItem';
import { Grid } from '@mui/material';
import { AdditionalLoading } from './AdditionalLoading';


export const RecipesList = () => {

	const recipes = useAppSelector(state => state.recipes.recipesList);

	return (
		<>
			<Grid container rowSpacing={2} >
				{recipes.filter((recipe, index) => index < 15 )
					.map ((recipe, index) => {
						return (
							<RecipesItem
								key={recipe.id}
									{...recipe}/>
							)
						}
					)
				}		
			</Grid>

			{(recipes.length === 0) ? <AdditionalLoading/> : null}
		</>
	)
}

