import React from 'react';
import Button from '@mui/material/Button/Button';

const Navbar = () => {

	return (
		<nav className='navbar'>
			<Button color={'inherit'} href='/recipes' variant='outlined'>
				Recipes
			</Button>
		</nav>
	)
}

export default Navbar;