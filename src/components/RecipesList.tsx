import React from 'react';
import { useAppSelector } from '../hooks';
import RecipesItem from './RecipesItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchRecipes } from '../store/reducers/recipesSlice';


const RecipesList = () => {

	const recipes = useAppSelector(state => state.recipes.recipesList);

	const loading = useAppSelector(state => state.recipes.loading);

	return (
		<>
			<InfiniteScroll 
					dataLength = {recipes.length} 
					next = {fetchRecipes} 
					hasMore = { true }  
					loader = {loading && <h1>Loading...</h1>}  
					endMessage >
				<ul className='flex'>
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
				</ul>
			
			</InfiniteScroll>
		</>
	)
}

export default RecipesList;