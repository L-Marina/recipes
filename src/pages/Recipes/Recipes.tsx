import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { RecipesList } from './RecipesList';
import { fetchRecipes } from '../../store/reducers/recipesSlice';
import { Progress } from '../../components/Progress';
import { Container,  Typography } from '@mui/material';


export const Recipes = () => {
	const dispatch = useAppDispatch();

	useEffect( () => {
		dispatch(fetchRecipes());
	}, [dispatch]);

	const {loading, error} = useAppSelector(state => state.recipes);

	return (
		<>
			<Container sx={{marginBottom:'70px'}}>
				<Typography variant='h3' color='white' textAlign='center' sx={{m:'20px'}}>Recipes of beers</Typography>
				{loading && <Progress/>}
				{error && <Typography variant='h3' color='primary' textAlign='center' sx={{mt:'15px'}}>An error occurred: {error}</Typography>} 
				<RecipesList/>
			</Container>
		</>
	)
}


