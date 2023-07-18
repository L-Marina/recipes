import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Recipes from './components/Recipes';
import Layout from './components/Layout';


function App() {


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
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout/>}>
					<Route path='/recipes' element={<Recipes />}></Route>
				</Route>
			</Routes>
    </BrowserRouter>
		
  );
}

export default App;
