import { useAppSelector } from '../hooks';
import RecipesItem from './RecipesItem';

const RecipesList = () => {
	const recipes = useAppSelector(state => state.recipes.recipesList)

	return (
		<ul >
			{recipes.filter((recipe, index) => index < 15 )
				.map ((recipe, index) => {
						return (
								<RecipesItem
									key={recipe.id}
									{...recipe}
								/>
							)
						}
					)
			}		
		</ul>
	)
}

export default RecipesList;