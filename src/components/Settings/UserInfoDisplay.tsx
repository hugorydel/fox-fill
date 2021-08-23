import { Grid, Button, Paper, FormControlLabel } from '@material-ui/core';
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
		<div
			style={{
				fontSize: 13,
				padding: '0 10px 10px 20px',
			}}>
			<div style={{ paddingBottom: 7 }}>{title}</div>
			<div style={{ color: '#111', fontWeight: 700 }}>{dataToDisplay}</div>
		</div>
	);
};

interface UserInfoDisplayProps {}

const UserInfoDisplay: React.FC<UserInfoDisplayProps> = () => {
	const { data } = useSettings();
	const { user } = data;
	const [licenseKeyVisible, setLicenseKeyVisible] = useState(false);

	return (
		<Paper elevation={2}>
			<Grid
				style={{
					borderRadius: 3,
					padding: '15px 20px 15px 15px',
					background: `url(${cardBackground}), linear-gradient(90deg, rgba(255, 153, 59, 1) 44%, rgba(255, 57, 125, 1) 84%)`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center right',
				}}
				alignItems='center'
				container
				direction='row'>
				<img
					src={'--unknown--'}
					style={{ height: 60, width: 60, backgroundColor: '#111', borderRadius: 3 }}
					alt='user'
				/>
				<InfoDisplayItem dataToDisplay={user.username} title='Username' />
				<InfoDisplayItem dataToDisplay={user.memberSince} title='Member Since' />
				<InfoDisplayItem dataToDisplay={user.email} title='Email' />
			</Grid>
			<Grid container justifyContent='space-between'>
				<FormControlLabel
					style={{ marginLeft: 0, padding: '15px 20px 15px 15px' }}
					labelPlacement='start'
					control={
						<div style={{ marginLeft: 50, color: '#FF993B', fontSize: '1rem' }}>
							{licenseKeyVisible
								? user.activationKey.match(/.{1,4}/g)?.join('-')
								: '•••• •••• •••• ••••'}
						</div>
					}
					label={<div style={{ fontSize: 12 }}>License Key</div>}
				/>
				<Button
					style={{ color: '#FF993B' }}
					onClick={() => setLicenseKeyVisible(visible => !visible)}>
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
