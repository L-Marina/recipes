import React from 'react';
import { useAppDispatch } from '../../hooks';
import { addToOrder, removeFromOrder } from '../../store/reducers/basketSlice';
import { CheckboxItem } from './CheckboxItem';
import { Link,  Grid,  Card, CardActions, CardMedia, CardContent, Typography, Stack } from '@mui/material';
import { AddCircleOutline,  RemoveCircleOutline } from '@mui/icons-material';

export type RecipeItemProps={
	id: number;
	name: string;
	description: string;
 	image_url: string;
}

export const RecipesItem = ({id, name, description, image_url}: RecipeItemProps) => {

	const dispatch = useAppDispatch();
		
	const path = '/recipes/' + id;

	const removeOrder = () => dispatch(removeFromOrder(id));
	
	const addOrder = () => dispatch(addToOrder({id, name}))

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
						<CheckboxItem id={id} />
						<Stack direction='row' spacing={2}>
						<AddCircleOutline sx={{cursor:'pointer'}} color={'primary'} onClick={addOrder}/>
						<RemoveCircleOutline sx={{cursor:'pointer'}}  color={'primary'} onClick={removeOrder}/>
						<Link 
							underline='hover'
  							variant='h6' 
							href={path}>Show more
						</Link>	
					</Stack>
					</CardActions>
				</Card>
			</Grid>
		)
}

