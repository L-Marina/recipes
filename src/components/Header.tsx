import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchFormDialog } from './SearchFormDialog';
import { useAppSelector } from '../hooks';
import { Grid, Toolbar, AppBar, Typography, IconButton, Badge, Button, Stack } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';
import { Basket } from './Basket';


export const Header = () => {
	const[isCartOpen, setCartOpen] = useState(false);

	const handleCart = () => setCartOpen(true);

	const navigate = useNavigate();
	
	const order = useAppSelector(state => state.basket.cart);
	
	const listLength = order.length;

	return (
		<AppBar position='static'>
			<Toolbar sx={{display: 'flex', m:'5px', }} >
				<Grid container spacing={1} direction={'column'}>
					<Grid container item xs={12} >
						<Typography variant='h6' component='div'  sx={{ flexGrow: 1, mt: '5px', }}>  
							<Button color={'inherit'} href='/recipes' variant='outlined'>Show Recipes</Button> 
						</Typography>
						<Stack direction='row' spacing={2} sx={{mt: '5px', display: 'flex', justifyContent: 'center'}}>
							<Button color={'inherit'} variant='outlined' size='small' onClick={() => navigate(-1)}>go back</Button>
							<Button color={'inherit'}  variant='outlined' size='small' onClick={() => navigate(1)}>go forward</Button>
							<IconButton  onClick={handleCart} >
								<Badge badgeContent={listLength} color='primary'>
									<ShoppingBasket/>
								</Badge>
							</IconButton>
							<Basket cartOpen={isCartOpen} closeCart={() => setCartOpen(false)}/>
						</Stack>
					</Grid>
					<Grid container item xs={12}>
						<SearchFormDialog/>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}




