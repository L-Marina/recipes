import React from 'react';
import { useNavigate } from "react-router-dom";
import { Toolbar,AppBar, Typography } from '@mui/material';
import Button from '@mui/material/Button/Button';
import Stack from '@mui/material/Stack/Stack';

 const Header = () => {

	const navigate = useNavigate();
	
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					<Button color={'inherit'} href='/recipes' variant='outlined'>Recipes</Button>
				</Typography>
				<Stack direction="row" spacing={2} sx={{m:'5px'}}>
					<Button color={'inherit'} variant='outlined' size='small' onClick={() => navigate(-1)}>go back</Button>
					<Button color={'inherit'}  variant='outlined' size='small' onClick={() => navigate(1)}>go forward</Button>
				</Stack>
			</Toolbar>
		</AppBar>
	)
}

export default Header;
