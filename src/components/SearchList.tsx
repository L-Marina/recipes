import React from 'react';
import { useAppSelector } from '../hooks';

type SearchListProps = {
	search: string;
}


export const SearchList = ({search}: SearchListProps) => {

	const recipes = useAppSelector(state=> state.recipes.recipesList);

	const filteredRecipe = recipes.filter((recipe) => {
		
		 if (search === '') {
			  return recipe;
		 }
		
		 else {
			  return recipe.name.toLowerCase().includes(search)
		 }
	});

	return (
		 <ul>
			  {filteredRecipe.map((recipe) => (
					<li key={recipe.id}>{recipe.name}</li>
			  ))}
		 </ul>
	)
}