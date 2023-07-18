import {useEffect} from 'react';
import { useAppDispatch, useAppSelector} from './hooks';
import { fetchRecipes } from './store/reducers/recipesSlice';
import RecipesList from './components/RecipesList';
import './App.css';


function App() {

	const dispatch = useAppDispatch();

	const {loading, error} = useAppSelector(state => state.recipes);
	
	useEffect( () => {
		dispatch(fetchRecipes() );
	}, [dispatch]);


	// useEffect( () => {
	// 	document.addEventListener('scroll', scrollHandler)

	// 	return function() {
	// 		document.removeEventListener('scroll', scrollHandler)
	// 	};
	// }, [])

	// const scrollHandler = (e: any) => {
	// 	if(e.target.documentElement.scrollHeight - ( e.target.documentElement.scrollTop + window.innerHeight) < 100
	// 		&& recipes.length < totalCount) {
	// 		setFetching(true)
	// 	}	
	// }

  	return (
		<div className="recipes">

				{loading && <h1>Loading...</h1>}
				{error && <h1>An error occurred: {error}</h1>}

				<RecipesList/>
		</div>
  );
}

export default App;
