import { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import { Box, Typography } from '@material-ui/core';
import mainLogo from '../../assets/images/logo.png';
import NavigationItem from './NavigationItem';
import ProfileContent from './ProfileContent';
import SettingsContent from './SettingsContent';

const useStyles = makeStyles((theme: Theme) => ({
	profileRoot: { flexGrow: 1, color: '#FF993B' },
	mainLogo: { height: '48px', width: '48px' },
	navigation: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '0px 40px',
		backgroundColor: theme.palette.background.paper,
	},
	navigationItems: {
		display: 'flex',
		flexDirection: 'row',
		gap: '40px',
	},
}));

const SimpleTabs = () => {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (newValue: number) => {
		setValue(newValue);
	};

	return (
		<div className={classes.profileRoot}>
			<nav className={classes.navigation}>
				<img className={classes.mainLogo} src={mainLogo} alt='Fox Fill Logo' />
				<div className={classes.navigationItems}>
					<NavigationItem handleChange={handleChange} index={0} value={value}>
						<PersonIcon />
						<Typography>Profiles</Typography>
					</NavigationItem>
					<NavigationItem handleChange={handleChange} index={1} value={value}>
						<SettingsIcon />
						<Typography>Settings</Typography>
					</NavigationItem>
				</div>
				<div>PROFILE</div>
			</nav>
			{value === 0 && <ProfileContent />}
			{value === 1 && <SettingsContent />}
		</div>
	);
};

export default SimpleTabs;
