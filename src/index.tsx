import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store, {persistor}  from './store';
import App from './App';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { PersistGate } from 'redux-persist/es/integration/react';

const theme = createTheme({
	palette: {
		primary: {
			main:'#b6303d',
			light: '#edd8d8',
  			
		},
		secondary: {
			main: '#808080',
			light: '#c4b5b5',
		}
	},
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<ThemeProvider theme ={theme}>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
  </ThemeProvider>
);


