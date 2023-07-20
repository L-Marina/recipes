import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Recipe from './pages/recipe';
import Recipes from './pages/recipes';


function App ()  {


  	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout/>}>
					<Route path='recipes' element={<Recipes/>}/>
					<Route path='recipes/:id' element={<Recipe/>}/>
					<Route path='*' element={<h1>Not found Page</h1>}/>
				</Route>
			</Routes>
		</BrowserRouter>
		
	)
}

export default App;
