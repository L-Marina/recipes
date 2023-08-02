import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks';
import { setActiveRecipe } from '../../store/reducers/recipesSlice';


export const Recipe = ()=> {
	const {id} = useParams();

	const dispatch = useAppDispatch();

	useEffect(() => {
		if(id) dispatch(setActiveRecipe(parseInt(id)))
	},[dispatch, id])

	const recipe = useAppSelector(state => state.recipes.activeRecipe);
	
	return (
		<>
			<div>{id}</div>
			<div>{recipe && recipe.name}</div>
			<div>{recipe && recipe.description} </div>
		</>
	)
}

