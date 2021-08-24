import { makeStyles } from '@material-ui/core/styles';
import ProfileSelect from '../components/Popup/ProfileSelect';
import PopupTabs from '../components/Popup/PopupTabs';
import { Button, Grid, Typography } from '@material-ui/core';
import { ChangeEvent } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import useSettings from '../providers/settings';
import Login from '../components/Login/Login';

const useStyles = makeStyles({
	popupRoot: {
		width: '560px',
		height: '560px',
	},
	content: {
		padding: '30px 40px 0px 40px',
		// height: '1550px',
	},
	settingsButton: {
		background: '#171717',
		borderRadius: 3,
		border: '1px solid #232323',
		fontSize: 13,
		height: '100%',
	},
});

const Popup = () => {
	const { data } = useSettings();
	const { user } = data;
	const { activationKey } = user;
	const classes = useStyles();

	const goToSettings = (_event: ChangeEvent<{}>) => {
		window.open(`${window.location.href.split('#')[0]}#/profiles`);
	};

	return activationKey ? (
		<div className={classes.popupRoot}>
			<div className={classes.content}>
				<Grid
					container
					justifyContent='space-between'
					alignItems='stretch'
					direction='row'
					spacing={2}>
					<Grid xs={9} sm={9} item>
						<ProfileSelect />
					</Grid>
					<Grid xs={3} sm={3} item>
						<Button
							className={classes.settingsButton}
							variant='outlined'
							fullWidth
							onClick={goToSettings}>
							<Typography style={{ marginRight: 10, fontSize: 14 }}>Settings</Typography>
							<SettingsIcon style={{ height: 18 }} />
						</Button>
					</Grid>
				</Grid>
				<PopupTabs />
			</div>
		</div>
	) : (
		<Login />
	);
};

export default Popup;
