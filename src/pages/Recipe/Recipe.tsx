import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveRecipe } from '../../store/reducers/recipesSlice';
import { Grid,  Card, CardActions, CardMedia, CardContent, Typography } from '@mui/material';
// import { AddShoppingCart } from '@mui/icons-material';
// import { addToOrder } from '../../store/reducers/basketSlice';

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
					<Card sx={{ height: '100%', p:'10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}} variant='outlined'>
						<CardMedia
							sx={{ height: 150, objectFit:'contain'}}
							image={recipe && recipe.image_url}
							component='img'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div' align='center'>
								Name: {recipe && recipe.name}
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								<Typography>Tagline: {recipe && recipe.tagline}</Typography>
								<Typography>First_brewed: {recipe && recipe.first_brewed}</Typography>
								<Typography>Description: {recipe && recipe.description}</Typography>
								<Typography>abv: {recipe && recipe.abv},</Typography>
								<Typography>ibu: {recipe && recipe.ibu},</Typography>
								<Typography>target_fg: {recipe && recipe.target_fg},</Typography>
								<Typography>target_og: {recipe && recipe.target_og},</Typography>
								<Typography>ebc: {recipe && recipe.ebc},</Typography>
								<Typography>srm: {recipe && recipe.srm},</Typography>
								<Typography>ph: {recipe && recipe.ph},</Typography>
								<Typography>attenuation_level: {recipe && recipe.attenuation_level},</Typography>
								<Typography>volume: 
									<Typography>value: {recipe && recipe.volume.value},</Typography>
									<Typography>unit: {recipe && recipe.volume.unit},</Typography>
								</Typography>
								<Typography>boil_volume:
									<Typography>value: {recipe && recipe.boil_volume.value},</Typography>
									<Typography>value: {recipe && recipe.boil_volume.unit},</Typography>  
								</Typography>		
								<Typography>method: 
									<Typography> mash_temp: 
									
										<Typography> 1:
											<Typography> temp: </Typography>
												<Typography> value: {recipe && recipe.method.mash_temp[0].temp.value}</Typography>
												<Typography> unit: {recipe && recipe.method.mash_temp[0].temp.unit}</Typography>
											<Typography> duration: {recipe && recipe.method.mash_temp[0].duration}</Typography> 
										</Typography> 
										<Typography> 2: 
											<Typography> temp: </Typography>
												<Typography> value: {recipe && recipe.method.mash_temp[1].temp.value}</Typography>
												<Typography> unit: {recipe && recipe.method.mash_temp[1].temp.unit}</Typography>
											<Typography> duration: {recipe && recipe.method.mash_temp[1].duration}</Typography> 
										</Typography> 
										<Typography> 3: 
											<Typography> temp: </Typography>
												<Typography> value: {recipe && recipe.method.mash_temp[2].temp.value}</Typography>
												<Typography> unit: {recipe && recipe.method.mash_temp[2].temp.unit}</Typography>
											<Typography> duration: {recipe && recipe.method.mash_temp[2].duration}</Typography> 
										</Typography>
										<Typography> 4: 
											<Typography> temp:
												<Typography> value: {recipe && recipe.method.mash_temp[3].temp.value}</Typography>
												<Typography> unit: {recipe && recipe.method.mash_temp[3].temp.unit}</Typography>
											<Typography> duration: {recipe && recipe.method.mash_temp[3].duration}</Typography> 
										</Typography>
									</Typography> 
									<Typography> fermentation: 
										<Typography> temp: </Typography>
											<Typography> value: {recipe && recipe.method.fermentation.temp.value}</Typography>
											<Typography> unit: {recipe && recipe.method.fermentation.temp.unit}</Typography>
									</Typography>	
									<Typography> twist: {recipe && recipe.method.twist}</Typography>
								</Typography>
								<Typography> ingredients: 
									<Typography> malt:  
										<Typography> 1: 
											<Typography> name: {recipe && recipe.ingredients.malt[0].name} </Typography> 
											<Typography> amount: </Typography> 
												<Typography> value: {recipe && recipe.ingredients.malt[0].amount.value} </Typography> 
												<Typography> unit: {recipe && recipe.ingredients.malt[0].amount.unit} </Typography> 
										</Typography>
										<Typography> 2:  
											<Typography> name: {recipe && recipe.ingredients.malt[1].name} </Typography> 
											<Typography> amount: </Typography> 
												<Typography> value: {recipe && recipe.ingredients.malt[1].amount.value} </Typography> 
												<Typography> unit: {recipe && recipe.ingredients.malt[1].amount.unit}</Typography>
										</Typography>
										<Typography> 3: 
											<Typography> name: {recipe && recipe.ingredients.malt[2].name} </Typography> 
											<Typography> amount: </Typography> 
												<Typography> value: {recipe && recipe.ingredients.malt[2].amount.value} </Typography> 
												<Typography> unit: {recipe && recipe.ingredients.malt[2].amount.unit}</Typography> 
										</Typography>
										<Typography> 4: 
											<Typography> name: {recipe && recipe.ingredients.malt[3].name} </Typography> 
											<Typography> amount: </Typography> 
												<Typography> value: {recipe && recipe.ingredients.malt[3].amount.value} </Typography> 
												<Typography> unit: {recipe && recipe.ingredients.malt[3].amount.unit} </Typography> 
										</Typography> 
									</Typography>
									<Typography> hops:
										<Typography> 1:
											<Typography> name: {recipe && recipe.ingredients.hops[0].name} </Typography>
											<Typography> amount: 
												<Typography> value: {recipe && recipe.ingredients.hops[0].amount.value} </Typography>
												<Typography> unit: {recipe && recipe.ingredients.hops[0].amount.unit} </Typography>	
											</Typography>
											<Typography> add: {recipe && recipe.ingredients.hops[0].add} </Typography>	
											<Typography> attribute: {recipe && recipe.ingredients.hops[0].attribute} </Typography>	
										</Typography>
									</Typography>	
										<Typography> yeast: {recipe && recipe.ingredients.yeast}</Typography>
								</Typography> 

								<Typography> food_pairing:
									<Typography> 1: {recipe && recipe.food_pairing[0]} </Typography>
									<Typography> 2: {recipe && recipe.food_pairing[1]} </Typography>
									<Typography> 3: {recipe && recipe.food_pairing[2]} </Typography>
								</Typography>
								<Typography>{recipe && recipe.brewers_tips}</Typography>
								<Typography>{recipe && recipe.contributed_by}</Typography> 
							</Typography>
							{/* <Typography component='div' variant='h6' align='left' color='primary'>
									{/* {price} UAH */}
							</Typography> 
							  	
						</CardContent>
						<CardActions>
						 	{/* <Button size='small' variant='contained' endIcon={<AddShoppingCart/>} >Buy</Button>  */}
						</CardActions>
					</Card>
				</Grid>
			</>
	)
}

