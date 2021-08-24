import {
	Grid,
	Button,
	Paper,
	FormControlLabel,
	makeStyles,
	Typography,
} from '@material-ui/core';
import { useState } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import useSettings from '../../providers/settings';
import cardBackground from '../../assets/images/card_bg.svg';

interface InfoDisplayItemProps {
	title: string;
	dataToDisplay: string;
}

const InfoDisplayItem: React.FC<InfoDisplayItemProps> = ({ title, dataToDisplay }) => {
	return (
		<div style={{ padding: '0 10px 10px 20px' }}>
			<div style={{ paddingBottom: 7 }}>
				<Typography variant='subtitle2'>{title}</Typography>
			</div>
			<div style={{ color: '#111', fontWeight: 700 }}>{dataToDisplay}</div>
		</div>
	);
};

interface UserInfoDisplayProps {}

const useStyles = makeStyles({
	infoDisplayContainer: {
		borderRadius: 3,
		padding: '15px 20px 15px 15px',
		background: `url(${cardBackground}), linear-gradient(90deg, rgba(255, 153, 59, 1) 44%, rgba(255, 57, 125, 1) 84%)`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center right',
	},
	licenseKeyContainer: { marginLeft: 0, padding: '15px 20px 15px 15px' },
	userImage: { height: 60, width: 60, backgroundColor: '#111', borderRadius: 3 },
});

const UserInfoDisplay: React.FC<UserInfoDisplayProps> = () => {
	const classes = useStyles();
	const { data } = useSettings();
	const { user } = data;
	const [licenseKeyVisible, setLicenseKeyVisible] = useState(false);

	return (
		<Paper elevation={2}>
			<Grid
				className={classes.infoDisplayContainer}
				alignItems='center'
				container
				direction='row'>
				<img src={'--FILL WITH REAL VALUE--'} className={classes.userImage} alt='user' />
				<InfoDisplayItem dataToDisplay={user.username} title='Username' />
				<InfoDisplayItem dataToDisplay={user.memberSince} title='Member Since' />
				<InfoDisplayItem dataToDisplay={user.email} title='Email' />
			</Grid>
			<Grid container justifyContent='space-between'>
				<FormControlLabel
					className={classes.licenseKeyContainer}
					labelPlacement='start'
					control={
						<div style={{ marginLeft: 50, fontSize: '1rem' }}>
							<Typography color='primary'>
								{licenseKeyVisible
									? user.activationKey.match(/.{1,4}/g)?.join('-')
									: '•••• •••• •••• ••••'}
							</Typography>
						</div>
					}
					label={<Typography variant='subtitle2'>License Key</Typography>}
				/>
				<Button color='primary' onClick={() => setLicenseKeyVisible(visible => !visible)}>
					{licenseKeyVisible ? (
						<VisibilityIcon fontSize='small' />
					) : (
						<VisibilityOffIcon fontSize='small' />
					)}
				</Button>
			</Grid>
		</Paper>
	);
};

export default UserInfoDisplay;
