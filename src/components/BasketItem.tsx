import { useAppDispatch } from '../hooks';
import { removeFromOrder, incrementQuantity, decrementQuantity } from '../store/reducers/basketSlice';
import { ListItem, Typography, IconButton, Stack } from '@mui/material';
import { Close, AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { RecipeItem } from '../store/reducers/basketSlice';


export const BasketItem = ({id, name, quantity=0, price }: RecipeItem) => {
	const dispatch = useAppDispatch();

	const removeOrder = () => dispatch(removeFromOrder(id));

	return(
		<ListItem>
			<Typography variant='body1' color='secondary'>
				{name}
			</Typography>
			<Typography variant='body1' color='primary' sx={{p:'10px'}}> 
				{price} UAH
			</Typography>
			<IconButton
				onClick={removeOrder}>
				<Close/>
			</IconButton>
			<Stack direction='row' spacing={2}>
				<AddCircleOutline sx={{cursor:'pointer'}} color={'primary'} onClick={()=>dispatch(incrementQuantity(id))}/>
					<p>{quantity}</p>
				<RemoveCircleOutline sx={{cursor:'pointer'}}  color={'primary'} onClick={()=>dispatch(decrementQuantity(id))}/>
			</Stack>
		</ListItem>
	)
}