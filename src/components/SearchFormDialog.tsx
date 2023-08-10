import React, { useState } from 'react';
import { useAppSelector } from '../hooks';
import { SearchList } from './SearchList';
import { TextField, IconButton, Dialog, Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


export const SearchFormDialog = () => {
	const[open, setOpen] = React.useState(false);

	const[search, setSearch] = useState('');

	const recipes = useAppSelector(state => state.recipes.recipesList);

	const[list, setList] = useState(recipes);

	const handleClickOpen = () => {
	  setOpen(true);
	};
 
	const handleClose = () => {
	  setOpen(false);
	};
	
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.value) {
			 setList(recipes);
			 setSearch('');
			 return;
		}
	
		setSearch(e.target.value);
		setList(list.filter((recipe) =>
			recipe.name.toLowerCase().includes(e.target.value.toLowerCase())
			 ))
			 return;
	};

	return (
		<> 
			<TextField
				autoFocus
				margin='dense'
				type= 'search' 
				label= 'search' 
				variant ='filled' 
				value={search}
				size='medium'
				onChange={handleChange}
			/>
				<IconButton type='button' size='small' onClick={handleClickOpen}>
					<SearchIcon />
				</IconButton>	
		 	<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Search Recipe</DialogTitle>
				<DialogContent>
			  		<TextField
						autoFocus
						margin='dense'
						type= 'search' 
						label= 'search' 
						variant ='filled' 
						value={search}
						size='small'
						onChange={handleChange}
						sx={{width: '250px'}} 
					/>
					<SearchList search={search}/>		
				</DialogContent>
				<DialogActions>
			  		<Button onClick={handleClose}>Cancel</Button>
			  		<Button onClick={handleClose}>Search</Button>
				</DialogActions>
		 	</Dialog>
		</>
	);
 }
			
				






























