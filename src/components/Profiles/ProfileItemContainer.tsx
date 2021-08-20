import { Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import useSettings from '../../providers/settings';
import { Profile } from '../../providers/settings/types';
import React from 'react';
import cardBackground from '../../assets/images/card_bg.svg';
import ProfileItemActions from './ProfileItemActions';

const useStyles = makeStyles((theme: Theme) => ({
	profileItem: {
		background: '#171717',
		height: 100,
		display: 'flex',
		alignItems: 'center',
		padding: '0 20px 0 20px',
		justifyContent: 'space-between',
	},
	currentProfileItem: {
		background: `url(${cardBackground}), linear-gradient(90deg, rgba(255, 153, 59, 1) 44%, rgba(255, 57, 125, 1) 84%)`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center right',
	},
	popoverContent: {
		padding: theme.spacing(2),
	},
}));

interface ProfileItemContainerProps {
	profile: Profile;
	openFormOfType: (input: 'create' | 'edit') => void;
}

const ProfileItemContainer: React.FC<ProfileItemContainerProps> = ({
	profile,
	openFormOfType,
}) => {
	const classes = useStyles();

	const { profilesPage, changeData } = useSettings();
	const { currentProfile } = profilesPage;

	return (
		<Paper
			variant='outlined'
			onClick={() => changeData('profilesPage', 'currentProfile', profile)}
			className={`${classes.profileItem} ${
				profile.id === currentProfile?.id ? classes.currentProfileItem : ''
			}`}>
			<Grid container>
				<Grid item>{profile.shippingProfileTitle}</Grid>
			</Grid>
			<ProfileItemActions profile={profile} openFormOfType={openFormOfType} />
		</Paper>
	);
};

export default ProfileItemContainer;
