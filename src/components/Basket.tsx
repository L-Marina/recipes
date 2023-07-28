import { List, ShoppingBasket } from '@mui/icons-material';
import { Drawer, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { BasketItem } from './BasketItem';
import { useAppSelector } from '../hooks';

export const Basket = () => {

	const list = useAppSelector(state => state.basket.list);

	return(
		<Drawer
			anchor='right'
			open={cartOpen}
			onClose={cartClose}
		>
			<List sx={{width:'300px'}}>
				<ListItem>
					<ListItemIcon>
						<ShoppingBasket/>
					</ListItemIcon>
					<ListItemText primary='Basket'/>
				</ListItem>
				<Divider/>
				{!list.length ? (<ListItem>Shopping cart is empty</ListItem>) 
				:(list.map((item) => (
					<BasketItem key={item.name}{...item}/>))
				)}
			</List>
		</Drawer>
	)
}