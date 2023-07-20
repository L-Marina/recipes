import React, {useEffect} from 'react';
import {useAppDispatch} from '../../hooks';
import RecipesList from './RecipesList';
import { fetchRecipes } from '../../store/reducers/recipesSlice';
import { Outlet } from 'react-router-dom';


export const Recipes = () => {
	
	const dispatch = useAppDispatch();

	useEffect( () => {
		dispatch(fetchRecipes());
	}, [dispatch]);

	// const {loading, error} = useAppSelector(state => state.recipes);

	return (
		<div className="recipes">
			
				<h1>Recipes of beers</h1>
				{/* {loading && <h1>Loading...</h1>}
				{error && <h1>An error occurred: {error}</h1>} */}
				<RecipesList />
				<Outlet/>
				
		</div>
	)
}


