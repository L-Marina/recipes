import React from 'react';
import { useAppDispatch } from '../../hooks';
import { addToOrder } from '../../store/reducers/basketSlice';
import { CheckboxItem } from './CheckboxItem';
import { Grid,  Card, CardActions, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export const RecipesItem: React.FC<any> = (props) => {
	const dispatch = useAppDispatch();
	
	const {id, name, description, image_url, ibu } = props.recipe;

	const path = '/recipes/' + id;

	const quantity = 0;

	const price = ibu * 3;

	const addOrder = () => dispatch(addToOrder({id, name, quantity, price}))

	return(
			<Grid item sx={{m:'10px'}} >
				<Card sx={{ height: '100%', 
						maxWidth: 340, 
						p:'10px', 
						display: 'flex', 
						flexDirection: 'column', 
						justifyContent: 'space-around', 
						backgroundColor:'primary.light'}} 
						variant='outlined'>
					<CardMedia
						sx={{ height: 150, objectFit:'contain'}}
						image={image_url}
						component='img'
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div' align='center'>
							{name}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							{description }
						</Typography>
						<Typography  component='div' align='right'>
							<Typography component='div' variant='h6' align='left' color='primary'>
								{price} UAH
							</Typography>
							<Link to={path}>
								Show more
							</Link>
						</Typography>
					</CardContent>
					<CardActions sx={{display:'flex', justifyContent:'space-around'}}>
						<CheckboxItem id={id} />
						<Button size='small' variant='contained' endIcon={<AddShoppingCart/>} onClick={addOrder}>Buy</Button> 
					</CardActions>
				</Card>
			</Grid>
		)
}

