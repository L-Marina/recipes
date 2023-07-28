import React from 'react';
import { useAppDispatch } from '../../hooks';
import { getRecipe } from '../../store/reducers/recipesSlice';
import { addToOrder, removeFromOrder } from '../../store/reducers/basketSlice';
import { IRecipe } from '../../types';
import { CheckboxItem } from './CheckboxItem';
import { Button,  Grid,  Card, CardActions, CardMedia, CardContent, Typography, IconButton, Stack } from '@mui/material';
import { AddCircleOutline,  RemoveCircleOutline } from '@mui/icons-material';

export const RecipesItem: React.FC<IRecipe> = ({id, name, description, image_url, ...recipes}) => {

	const dispatch = useAppDispatch();

	const getTask = () => dispatch(getRecipe(id));
		
	const path = '/recipes/' + id;

	const removeOrder = () => dispatch(removeFromOrder(id));

	const addOrder = () => dispatch(addToOrder(id))

	return(
			<Grid item sx={{m:'10px'}} >
				<Card sx={{ height: '100%', maxWidth: 340, p:'10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}} variant='outlined'>
					<CardMedia
						sx={{ height: 150, objectFit:'contain'}}
						image={image_url}
						component='img'
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
						<span>{name}</span>
						</Typography>
						<Typography variant='body2' color='text.secondary'>
						<span>{description}</span>
						</Typography>
					</CardContent>
					<CardActions sx={{display:'flex', justifyContent:'space-around'}}>
					<Stack direction='row' spacing={2}>
						<CheckboxItem id={id} />
						<IconButton color={'primary'} >
							<AddCircleOutline onClick={addOrder}/>
							<RemoveCircleOutline onClick={removeOrder}/>
						</IconButton>
						<Button size='small' variant='contained' href={path} onClick={getTask}>Show more</Button>	
					</Stack>
					</CardActions>
				</Card>
			</Grid>
		)
}

