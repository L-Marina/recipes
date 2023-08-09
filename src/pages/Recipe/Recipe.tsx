import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveRecipe } from '../../store/reducers/recipesSlice';
import { Grid,  Card, CardActions, CardMedia, CardContent, Typography } from '@mui/material';


export const Recipe = ()=> {
	const {id} = useParams();

	const dispatch = useAppDispatch();

	useEffect(() => {
		if(id) dispatch(setActiveRecipe(parseInt(id)))
	},[dispatch, id])

	const recipe = useAppSelector(state => state.recipes.activeRecipe);
	
		return (
			<>
				<Grid item sx={{m:'10px'}} >
					<Card sx={{ height: '100%', p:'10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor:'secondary.light'}} variant='outlined'>
						<CardMedia
							sx={{ height: 150, objectFit:'contain'}}
							image={recipe && recipe.image_url}
							component='img'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div' align='center' color='primary'>
								Name: {recipe && recipe.name}
							</Typography>
							<Typography variant='body2'>
								<Typography>Tagline: {recipe && recipe.tagline}. </Typography>
								<Typography>First_brewed: {recipe && recipe.first_brewed}. </Typography>
								<Typography>Description: {recipe && recipe.description}. </Typography>
								<Typography component='span'>abv: {recipe && recipe.abv}, </Typography>
								<Typography component='span'>ibu: {recipe && recipe.ibu}, </Typography>
								<Typography component='span'>target_fg: {recipe && recipe.target_fg}, </Typography>
								<Typography component='span'>target_og: {recipe && recipe.target_og}, </Typography>
								<Typography component='span'>ebc: {recipe && recipe.ebc}, </Typography>
								<Typography component='span'>srm: {recipe && recipe.srm}, </Typography>
								<Typography component='span'>ph: {recipe && recipe.ph}, </Typography>
								<Typography>attenuation_level: {recipe && recipe.attenuation_level}, </Typography>
								<Typography>volume: </Typography> 
									<Typography component='span'>value: {recipe && recipe.volume.value}, </Typography>
									<Typography component='span'>unit: {recipe && recipe.volume.unit}, </Typography>
								<Typography>boil_volume: </Typography>	 
									<Typography component='span'>value: {recipe && recipe.boil_volume.value}, </Typography>
									<Typography component='span'>unit: {recipe && recipe.boil_volume.unit}, </Typography>  
								<Typography>method:  </Typography>
									<Typography > mash_temp: </Typography> 
									
										<Typography component='span'> 1: </Typography>
											<Typography component='span'> temp: </Typography>
												<Typography component='span'> value: {recipe && recipe.method.mash_temp[0].temp.value}, </Typography>
												<Typography component='span'> unit: {recipe && recipe.method.mash_temp[0].temp.unit}, </Typography>
											<Typography component='span'> duration: {recipe && recipe.method.mash_temp[0].duration}, </Typography> 
										 
									<Typography> fermentation: </Typography> 
										<Typography component='span'> temp: </Typography>
											<Typography component='span'> value: {recipe && recipe.method.fermentation.temp.value}, </Typography>
											<Typography component='span'> unit: {recipe && recipe.method.fermentation.temp.unit}, </Typography>
										
									<Typography> twist: {recipe && recipe.method.twist}, </Typography>
								
								<Typography> ingredients: </Typography>  
									<Typography> malt: </Typography> 
										<Typography component='span'> 1: </Typography> 
											<Typography component='span'> name: {recipe && recipe.ingredients.malt[0].name}, </Typography> 
											<Typography component='span'> amount: </Typography> 
												<Typography component='span'> value: {recipe && recipe.ingredients.malt[0].amount.value}, </Typography> 
												<Typography component='span'> unit: {recipe && recipe.ingredients.malt[0].amount.unit}, </Typography> 
										
									<Typography> hops: </Typography>
										<Typography component='span'> 1: </Typography>
											<Typography component='span'> name: {recipe && recipe.ingredients.hops[0].name}, </Typography>
											<Typography component='span'> amount: </Typography>
												<Typography component='span'> value: {recipe && recipe.ingredients.hops[0].amount.value}, </Typography>
												<Typography component='span'> unit: {recipe && recipe.ingredients.hops[0].amount.unit}, </Typography>	
											<Typography component='span'> add: {recipe && recipe.ingredients.hops[0].add}, </Typography>	
											<Typography component='span'> attribute: {recipe && recipe.ingredients.hops[0].attribute}, </Typography>	
									<Typography> yeast: {recipe && recipe.ingredients.yeast}, </Typography>
								
								<Typography> food_pairing: </Typography>
									<Typography> 1: {recipe && recipe.food_pairing[0]}, </Typography>
									<Typography> 2: {recipe && recipe.food_pairing[1]}, </Typography>
									<Typography> 3: {recipe && recipe.food_pairing[2]}, </Typography>
								
								<Typography>{recipe && recipe.brewers_tips}, </Typography>
								<Typography>{recipe && recipe.contributed_by}. </Typography> 
							</Typography> 	  	
						</CardContent>
						<CardActions sx={{mb:'10px', display:'flex', justifyContent:'space-between'}} >
							<Typography component='div' variant='h6' color='primary'>
								Price: {(recipe && recipe.ibu * 3)}  UAH
							</Typography> 
						</CardActions>
					</Card>
				</Grid>
			</>
		)
}

