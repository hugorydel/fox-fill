import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popup from './pages/Popup';
import Profiles from './pages/Profiles';
import Login from './pages/Login';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { HashRouter, Route } from 'react-router-dom';
import SettingsProvider from './providers/settings/SettingsProvider';

ReactDOM.render(
	<React.StrictMode>
		<SettingsProvider>
			<ThemeProvider theme={theme}>
				<HashRouter>
					<Route path='/popup' exact component={Popup} />
					<Route path='/profiles' exact component={Profiles} />
					<Route path='/login' exact component={Login} />
				</HashRouter>
			</ThemeProvider>
		</SettingsProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
