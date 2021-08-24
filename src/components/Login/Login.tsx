import { Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import bigLogo from '../../assets/images/big_logo.svg';
import InputMask from 'react-input-mask';
import { useState } from 'react';
import useSettings from '../../providers/settings';
import { useHistory } from 'react-router';

const useStyles = makeStyles(() => ({
	loginRoot: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#FF993B',
		width: '600px',
		height: '600px',
		overflow: 'overlay',
		'&::-webkit-scrollbar': { width: '10px' },
		'&::-webkit-scrollbar-track': { background: '#222' },
		'&::-webkit-scrollbar-thumb': { background: '#444' },
		'&::-webkit-scrollbar-thumb:hover': { background: '#383838' },
	},
	foxFillTitle: {
		color: '#fff',
		marginBottom: '70px',
	},
	bigLogo: {
		marginTop: '10px',
		marginRight: '20px',
		height: '120px',
		width: '117px',
	},
	activationButton: {
		marginTop: '40px',
		width: 130,
		height: 45,
	},
}));

const Login: React.FC = () => {
	const { setData } = useSettings();
	const classes = useStyles();
	const history = useHistory();

	const [activationKey, setActivationKey] = useState('');
	const [keyError, setKeyError] = useState(false);

	const saveActivationKey = () => {
		const bareActivationKey = activationKey.replace(/[_-]/g, '');
		if (bareActivationKey.length !== 16) return setKeyError(true);
		setData({
			parentKey: 'user',
			childKey: 'activationKey',
			newValue: bareActivationKey,
		});
		history.push('/popup');
	};

	return (
		<div className={classes.loginRoot}>
			<img src={bigLogo} alt='Large Fox Fill Logo' className={classes.bigLogo} />
			<Typography variant='h3' className={classes.foxFillTitle}>
				Fox <strong>Fill</strong>
			</Typography>
			<InputMask
				mask='****-****-****-****'
				onChange={e => setActivationKey(e.target.value)}>
				{(inputProps: any) => (
					<TextField
						variant='outlined'
						error={keyError}
						helperText={
							keyError ? (
								<Typography color='error'>Key must be 16 characters</Typography>
							) : (
								''
							)
						}
						inputProps={{
							style: {
								width: '400px',
								minWidth: '200px',
								fontSize: '25px',
								fontWeight: 300,
								textAlign: 'center',
							},
						}}
						placeholder={'XXXX-XXXX-XXXX-XXXX'}
						{...inputProps}
					/>
				)}
			</InputMask>
			<Button
				onClick={saveActivationKey}
				className={classes.activationButton}
				variant='contained'
				color='primary'
				size='large'>
				Activate
			</Button>
		</div>
	);
};

export default Login;
