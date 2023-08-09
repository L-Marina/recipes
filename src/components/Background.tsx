import React from "react";
import { Box } from '@mui/material';
import Image from '../images/imageBeer.jpg';


export default function Background() {
 
  return (
				<Box
					component="div"
					sx={{
						backgroundImage: `url(${Image})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						height: '100vh',
						width: '100%',
						m:'5px', 
						}}
				/>
  			);
}