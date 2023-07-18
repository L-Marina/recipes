import { IRecipe } from '../types';
import  {useAppDispatch} from '../hooks';
import { removeRecipes} from '../store/reducers/recipesSlice';
import { NavLink } from 'react-router-dom';

const RecipesItem: React.FC<IRecipe> = ({id, name}) => {

	const dispatch = useAppDispatch();
	
	const removeTask = () => dispatch(removeRecipes(id));
	
	const path = '/recipes/' + id;

	return(
		<li className='list'>
			
			<input 
				type='checkbox' 
				id ='custom-checkbox'
			/> 
			<NavLink to= {path} className='link'> 
				<span>{id} </span>
				<span>{name}</span>
			</NavLink>
			<button className='delete' onClick={removeTask}>Delete</button>

		</li>
	)
}

export default RecipesItem;