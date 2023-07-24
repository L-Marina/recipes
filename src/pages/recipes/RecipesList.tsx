import React from 'react';
import { useAppSelector } from '../../hooks';
import RecipesItem from './RecipesItem';
// import InfiniteScroll from 'react-infinite-scroll-component';
import Grid from '@mui/material/Grid/Grid';


const RecipesList = () => {

	const recipes = useAppSelector(state => state.recipes.recipesList);

	//const loading = useAppSelector(state => state.recipes.loading);

	return (
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
	)
}

export default RecipesList;