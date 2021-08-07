import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popup from './pages/Popup';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Popup />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
