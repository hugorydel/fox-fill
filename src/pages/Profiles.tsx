import { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import { Container, Typography } from '@material-ui/core';
import mainLogo from '../assets/images/logo.png';
import NavigationItem from '../components/Profiles/NavigationItem';
import ProfilesContent from '../components/Profiles/ProfilesContent';
import SettingsContent from '../components/Settings/SettingsContent';

const useStyles = makeStyles((theme: Theme) => ({
	profileRoot: {
		color: '#FF993B',
		width: '100vw',
		height: '100vh',
		overflow: 'overlay',
		'&::-webkit-scrollbar': { width: '10px' } /* width */,
		'&::-webkit-scrollbar-track': { background: '#222' } /* Track */,
		'&::-webkit-scrollbar-thumb': { background: '#444' } /* Handle */,
		'&::-webkit-scrollbar-thumb:hover': { background: '#383838' } /* Handle on hover */,
	},
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
	content: {
		height: 'calc(100% - 66px)',
		color: '#fff',
		padding: '70px 100px 10px 100px',
	},
}));

const Profiles = () => {
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
			<Container className={classes.content} maxWidth='md'>
				{value === 0 && <ProfilesContent />}
				{value === 1 && <SettingsContent />}
			</Container>
		</div>
	);
};

export default Profiles;
