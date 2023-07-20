import React from 'react';
import  {useAppDispatch} from '../../hooks';
import { removeRecipes} from '../../store/reducers/recipesSlice';
import { NavLink} from 'react-router-dom';
import { IRecipe } from '../../types';



const RecipesItem: React.FC<IRecipe> = ({id, name, ...recipes}) => {

	const dispatch = useAppDispatch();
	
	const removeTask = () => dispatch(removeRecipes(id));
	
	 const path = '/recipes/' + id;

	// const handleMouseEvent = (e: MouseEvent<HTMLInputElement>) => {
	// 	e.preventDefault();
	// };

	// const checkedMouseEvent = (e: MouseEvent<HTMLAnchorElement>) => {
	// 	e.preventDefault();
	// };

	return(
		<>
			<li className='list'>
 				
				<input type='checkbox' /> 
				<NavLink to= {path} className='link' > 
					<span>{name}</span>
				</NavLink>
				<button className='btn' onClick={removeTask}>Delete</button>

			</li>
			
		</>
	)
}

export default RecipesItem;