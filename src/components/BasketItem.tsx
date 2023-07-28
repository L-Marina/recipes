import { ListItem, Typography, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useAppDispatch } from '../hooks';
import { removeFromOrder } from '../store/reducers/basketSlice';


export const BasketItem = ({id, name, quantity}) => {

	const dispatch = useAppDispatch();

	const removeOrder = () => dispatch(removeFromOrder(id));

	return(
		<ListItem>
			<Typography variant='body1'>
				{name}
				{quantity}
			</Typography>
			<IconButton
				onClick={removeOrder}>
				<Close/>
			</IconButton>
		</ListItem>
	)
}