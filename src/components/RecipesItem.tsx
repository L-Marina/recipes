import { IRecipe } from '../types';
import  {useAppDispatch} from '../hooks';
import { removeRecipes } from '../store/reducers/recipesSlice';

const RecipesItem: React.FC<IRecipe> = ({id, name}) => {
	const dispatch = useAppDispatch();
	

	const removeTask = () => dispatch(removeRecipes(id));
	
	return(
		<li>
			<input type='checkbox' /> 
			<span>{id} </span>
			<span>{name}</span>
			
			
			<button onClick={removeTask}>Delete</button>
		
		</li>
	)
}

export default RecipesItem;