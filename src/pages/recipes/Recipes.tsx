import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { RecipesList } from './RecipesList';
import { fetchRecipes } from '../../store/reducers/recipesSlice';
import Container from '@mui/material/Container/Container';
import Typography from '@mui/material/Typography/Typography';



export const Recipes = () => {
	
	const dispatch = useAppDispatch();

	useEffect( () => {
		dispatch(fetchRecipes());
	}, [dispatch]);

	// const {loading, error} = useAppSelector(state => state.recipes);

	return (
		<Container sx={{marginBottom:'70px'}}>
			<Typography variant='h3' color='white' textAlign='center'>Recipes of beers</Typography>
			{/* {loading && <h1>Loading...</h1>}
				{error && <h1>An error occurred: {error}</h1>} */}
			<RecipesList />
		</Container>
	)
}


