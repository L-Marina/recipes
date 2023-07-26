import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store  from './store';
import App from './App';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main:'#b6303d',
		},
		secondary: {
			main: '#4169e1',
		}
	},
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<ThemeProvider theme ={theme}>
		<Provider store={store}>
			<App />
		</Provider>
  </ThemeProvider>
);


