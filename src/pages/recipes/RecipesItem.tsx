import React from 'react';
import  {useAppDispatch} from '../../hooks';
import { removeRecipes, getRecipe} from '../../store/reducers/recipesSlice';
import { IRecipe } from '../../types';
import Button from '@mui/material/Button/Button';
import Grid from '@mui/material/Grid/Grid';
import Card from '@mui/material/Card/Card';
import CardActions from '@mui/material/CardActions/CardActions';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import CardContent from '@mui/material/CardContent/CardContent';
import Typography from '@mui/material/Typography/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckboxItem from './CheckboxItem';
import Stack from '@mui/material/Stack/Stack';


const RecipesItem: React.FC<IRecipe> = ({id, name, description, image_url, ...recipes}) => {

	const dispatch = useAppDispatch();
	
	const removeTask = () => dispatch(removeRecipes(id));

	const getTask = () => dispatch(getRecipe(id));
	
	const path = '/recipes/' + id;

	return(
			<Grid item sx={{m:'10px'}}>
				<Card sx={{ height: '100%', maxWidth: 340, p:'10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}} variant='outlined'>
					
					<CardMedia
						sx={{ height: 150, objectFit:'contain'}}
						image={image_url}
						component="img"
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
						<CheckboxItem />
						<Stack direction="row" spacing={2}>
							<Button size='small' variant='contained' href={path} onClick={getTask}>Show more</Button>
							<Button size='small' variant='contained' startIcon={<DeleteIcon />} onClick={removeTask}>Delete</Button>
						</Stack>
					</CardActions>
				</Card>
			</Grid>
		)
}

export default RecipesItem;