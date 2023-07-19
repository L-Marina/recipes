import React from 'react';
import { useParams } from 'react-router-dom';


const Recipe = () => {

	const {id} = useParams();
	
	return(
		<>
			<h2>{id}</h2>
		</>
	)
}

export default Recipe;