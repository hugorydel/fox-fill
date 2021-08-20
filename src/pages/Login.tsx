import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import bigLogo from '../assets/images/big_logo.svg';
import InputMask from 'react-input-mask';

const useStyles = makeStyles(() => ({
	loginRoot: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		// justifyContent: 'row',
		color: '#FF993B',
		width: '600px',
		height: '600px',
		overflow: 'overlay',
		'&::-webkit-scrollbar': { width: '10px' } /* width */,
		'&::-webkit-scrollbar-track': { background: '#222' } /* Track */,
		'&::-webkit-scrollbar-thumb': { background: '#444' } /* Handle */,
		'&::-webkit-scrollbar-thumb:hover': { background: '#383838' } /* Handle on hover */,
	},
	bigLogo: {
		marginTop: '10px',
		marginRight: '20px',
		height: '120px',
		width: '117px',
	},
}));

const Login: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.loginRoot}>
			<img src={bigLogo} alt='Large Fox Fill Logo' className={classes.bigLogo} />
			<Typography variant='h3' style={{ color: '#fff', marginBottom: '70px' }}>
				Fox <strong>Fill</strong>
			</Typography>
			<InputMask mask='****-****-****-****'>
				{(inputProps: any) => (
					<TextField
						variant='outlined'
						inputProps={{
							style: {
								width: '400px',
								minWidth: '200px',
								fontSize: '28px',
								fontWeight: 300,
								textAlign: 'center',
								'&::-webkit-input-placeholder': { textAlign: 'center' },
								'&:-moz-placeholder': { textAlign: 'center' },
							},
						}}
						placeholder={'XXXX-XXXX-XXXX-XXXX'}
						{...inputProps}
					/>
				)}
			</InputMask>
			<Button
				style={{ marginTop: '30px' }}
				variant='contained'
				color='primary'
				size='large'>
				Activate
			</Button>
		</div>
	);
};

export default Login;
