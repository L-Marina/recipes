import { IRecipe } from '../types';


const RecipesItem: React.FC<IRecipe> = ({id, name}) => {

	return(
		<li>
			<input type='checkbox'  /> 
			<span>{id} </span>
			<span>{name}</span>
			<button>Delete</button> 
		</li>
	)
}

export default RecipesItem;