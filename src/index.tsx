import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popup from './pages/Popup';
import Profiles from './pages/Profiles';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { HashRouter, Route } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<HashRouter>
				<Route path='/popup' exact component={Popup} />
				<Route path='/profiles' exact component={Profiles} />
			</HashRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
