import React, { useState } from 'react';
import { searchRecipe } from '../store/reducers/recipesSlice';
import { TextField } from '@mui/material';
import { useAppDispatch } from '../hooks';


export const Search = () => {
	
	const[search, setSearch] = useState('');

	const dispatch = useAppDispatch();

	const searchItem = () => dispatch(searchRecipe(name))

	// const handleChange = (e) => {

	// 	if(!e.target.value) {
	// 		searchItem();
	// 		setSearch('');
	// 		return;
	// 	}

	// 	setSearch(e.target.value);
	// 	searchItem(
	// 		resipesList.filter((recipe) => 
	// 			recipe.name.toLowerCase().includes(e.target.value.toLowerCase())
	// 			))
	// 	}
	
	return (
		
		<TextField  
			type= 'search' 
			label= 'search' 
			variant ='filled' 
			size='medium'
			color= 'secondary'
			multiline
			maxRows={4}
			value={search} 
			onChange={handleChange} 
		/>
	)
}

