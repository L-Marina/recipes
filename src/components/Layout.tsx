import React, {useState} from 'react';
import { Outlet} from 'react-router-dom';
import { Header } from './Header';
import { Footer }  from './Footer';
import { Box, Container } from '@mui/material';
import { Basket } from './Basket';


const Layout = () => {
	
	const[isCartOpen, setCartOpen] = useState(false);

	const handleCart = () => setCartOpen(true);

	return (
			
			<Box 
				sx={{display:'flex', 
				flexDirection:'column',
				width: '100%',
				minHeight: '100vw',
				maxWidth: '1400px',
				margin: '0px auto',
				backgroundColor:'grey',
				overflow:'hidden',
				}}
			>
				<Header  handleCart={ handleCart}/>
				<Container sx={{height: '100%', overflow:'hidden'}} />
				<Outlet /> 
				<Footer />
				<Basket cartOpen={isCartOpen} closeCart={() => setCartOpen(false)}/>
			</Box>
	)
}

export default Layout;