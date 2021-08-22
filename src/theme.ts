import { createTheme } from '@material-ui/core';

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
		button: { fontWeight: 500, textTransform: 'none' },
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 700,
			md: 820,
			lg: 1280,
			xl: 1920,
		},
	},
	palette: {
		type: 'dark',
		background: {
			paper: '#171717',
			default: '#171717',
		},
		divider: '#1b1b1b',
		primary: { main: '#FF993B' },
		secondary: { main: '#FF993B' },
	},
	overrides: {
		MuiButton: {
			root: {
				fontSize: '13px',
			},
		},
		MuiOutlinedInput: {
			notchedOutline: { borderColor: '#222' },
			root: {
				fontSize: 14,
				fontWeight: 400,
			},
		},
	},
});

export default theme;
