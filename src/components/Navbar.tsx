import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

	return (
		<nav className='navbar'>
			<div className='item'>
				<NavLink to='/recipes' className={navData => navData.isActive ? 'active' : 'item'}>Recipes</NavLink>
			</div>
		</nav>
	)
}

export default Navbar;