import  React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


export const  Progress = () => {
  	return (
    	<Box sx={{ width: '100%', mt:'30px' }}>
      	<LinearProgress />
    	</Box>
  );
}