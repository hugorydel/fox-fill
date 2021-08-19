import { createTheme } from '@material-ui/core';

const buttonSpacing = '24px';

const theme = createTheme({
	typography: {
		fontFamily: [
			'Poppins',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		button: { fontWeight: 600, textTransform: 'none' },
	},
	palette: {
		type: 'dark',
		background: {
			paper: '#222',
		},
		divider: '#1b1b1b',
		primary: { main: '#FF993B' },
		secondary: { main: '#FF993B' },
	},
});

export default theme;
