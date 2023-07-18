import React, {useEffect} from 'react';
import { useAppSelector, useAppDispatch} from '../hooks';
import RecipesList from './RecipesList';
import { fetchRecipes } from '../store/reducers/recipesSlice';


const Recipes = () => {

	const dispatch = useAppDispatch();

	useEffect( () => {
		dispatch(fetchRecipes() );
	}, [dispatch]);

	const {loading, error} = useAppSelector(state => state.recipes);

	return (
		<div className="recipes">
	
			<h1>Recipes of beers</h1>
			{loading && <h1>Loading...</h1>}
			{error && <h1>An error occurred: {error}</h1>}

			<RecipesList/>
		</div>
	)
}

export default Recipes;