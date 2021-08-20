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
	palette: {
		type: 'dark',
		background: {
			paper: '#222',
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
			notchedOutline: { borderColor: '#303030' },
			root: {
				fontSize: 14,
				fontWeight: 400,
				background: '#171717',
				// borderColor: '#202020',
			},
		},
	},
});

export default theme;
