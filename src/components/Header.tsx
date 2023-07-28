import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from './Search';
import { Toolbar, AppBar, Typography, IconButton, Badge, Button, Stack,   } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';



export const Header = ({handleCart, listLen}) => {

	const navigate = useNavigate();
	
	return (
		
		<AppBar position='static'>

			<Toolbar sx={{display: 'flex', m:'5px'}}>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>  
					<Button color={'inherit'} href='/recipes' variant='outlined'>Show Recipes</Button> 
				</Typography>

				<Stack direction='row' spacing={2} sx={{m:'5px',display: 'flex', justifyContent: 'space-around'}}>
					<Button color={'inherit'} variant='outlined' size='small' onClick={() => navigate(-1)}>go back</Button>
					<Button color={'inherit'}  variant='outlined' size='small' onClick={() => navigate(1)}>go forward</Button>
					<IconButton color={'inherit'} onClick={handleCart} >
						<Badge 
							badgeContent={listLen}
							color='white'
						>
							<ShoppingBasket sx={{m:'-10px'}}/>
						</Badge>
					</IconButton>
				</Stack>
			</Toolbar>

			<Search/>	
			
		</AppBar>
	)
}


