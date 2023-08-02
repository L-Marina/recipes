import React from 'react';
import { BasketItem } from './BasketItem';
import { useAppSelector } from '../hooks';
import { List, ShoppingBasket } from '@mui/icons-material';
import { Drawer, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';

type BasketProps={
	cartOpen: boolean;
	closeCart:() => void;
}


export const Basket = ({cartOpen, closeCart}: BasketProps) => {

	const order = useAppSelector(state => state.basket.cart);

	const getTotalQuantity = () => {
		let total = 0
		order.forEach(item => {
			total += item.quantity
		})
		return total
	};

	return(
		<Drawer
			anchor='right'
			open={cartOpen}
			onClose={closeCart}
		>
			<List sx={{width:'300px'}} >
				<ListItem >
					<ListItemIcon>
						<ShoppingBasket/>
					</ListItemIcon>
					<ListItemText primary='Basket'/>
				</ListItem>
				<Divider/>

				{! order.length 
					? (<ListItem>Shopping cart is empty</ListItem>)
				 	: ( 
					<>
						{order.map((item) => (
						<BasketItem key={item.id} id={item.id} name={item.name} quantity={item.quantity}
						// {...item}
						/>))
						}
						<Divider/>
						<ListItem >
						<Typography sx={{fontWeight: 700}} color='yellow'>{getTotalQuantity()|| 0}</Typography>
						</ListItem>
					</>
				)}
			</List>
		</Drawer>
		
	)
}