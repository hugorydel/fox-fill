import { createTheme } from '@material-ui/core';

const theme = createTheme({
	palette: {
		type: 'dark',
		background: {
			paper: '#222',
		},
		divider: '#1b1b1b',
		text: {
			primary: '#d6d6d6',
		},
	},
});

export default theme;
