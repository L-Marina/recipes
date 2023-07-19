import React from 'react'
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";

 const Header = () => {

	const navigate = useNavigate();
	
	return (
		<header className = 'header'>
			<Navbar/>

         <button className='btn' onClick={() => navigate(-1)}>go back</button>
         <button  className='btn' onClick={() => navigate(1)}>go forward</button>
           
		</header>
	)
}

export default Header;
