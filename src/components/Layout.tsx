import React from 'react';
import { Outlet} from 'react-router-dom';
import { Header } from './Header';
import { Footer }  from './Footer';
import { Box, Container } from '@mui/material';
import Background from './Background';


const Layout = () => {
	return (
			<Box 
				sx={{display:'flex', 
				flexDirection:'column',
				width: '100%',
				minHeight: '100%',
				maxWidth: '1400px',
				margin: '0px auto',
				backgroundColor: 'grey',
				overflow:'hidden',
				}}
			>
				<Header />
				<Background/>
				<Container sx={{height: '100%', overflow:'hidden'}}/>
				<Outlet /> 
				<Footer />
			</Box>
	)
}

export default Layout;