import React from 'react';
import { Outlet} from 'react-router-dom';

import Header from './Header';
import Footer  from './Footer';

const Layout = () => {
	
	return (
		<div className='layout'>
				<Header />
				<div className='wrapper'>
					<Outlet />
				</div>
				<Footer />
		</div>
	)
}

export default Layout;