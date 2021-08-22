import {
	Grid,
	Typography,
	TextField,
	Button,
	Paper,
	makeStyles,
	useMediaQuery,
	useTheme,
} from '@material-ui/core';
import { Fragment, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import useSettings from '../../providers/settings';

const useStyles = makeStyles({
	blackListedWebsiteStyle: {
		padding: '15px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

const BlacklistedWebsites: React.FC = () => {
	const { settingsPage, changeData } = useSettings();
	const classes = useStyles();
	const theme = useTheme();

	const matchesSmallView = useMediaQuery(theme.breakpoints.up('sm'));
	const [newBlacklistedWebsite, setNewBlacklistedWebsite] = useState('');

	return (
		<Fragment>
			<Grid direction='row' container>
				<Grid item xs={12} sm={12}>
					<Typography variant='h6'>URL</Typography>
				</Grid>
				<Grid item xs={12} sm={10}>
					<TextField
						fullWidth
						autoComplete='on'
						variant='outlined'
						placeholder={'Add New Blacklisted Website'}
						value={newBlacklistedWebsite}
						onChange={e => setNewBlacklistedWebsite(e.target.value)}
					/>
				</Grid>
				<Grid style={{ paddingLeft: matchesSmallView ? '5px' : '0' }} item xs={6} sm={2}>
					<Button
						style={{
							width: `100%`,
							height: '100%',
						}}
						onClick={e => {
							if (newBlacklistedWebsite) {
								changeData({
									parentKey: 'settingsPage',
									childKey: 'blackListedWebsites',
									newValue: [newBlacklistedWebsite, ...settingsPage.blackListedWebsites],
								});
								setNewBlacklistedWebsite('');
							}
						}}
						variant='contained'
						color='primary'>
						+ Add URL
					</Button>
				</Grid>
			</Grid>
			<Grid
				style={{ marginTop: '10px', marginBottom: '30px' }}
				spacing={1}
				container
				direction='column'>
				{settingsPage.blackListedWebsites.map(websiteTitle => (
					<Grid item>
						<Paper
							className={classes.blackListedWebsiteStyle}
							variant='outlined'
							elevation={1}>
							<div>{websiteTitle}</div>
							<Button
								onClick={() =>
									changeData({
										parentKey: 'settingsPage',
										childKey: 'blackListedWebsites',
										newValue: [
											...settingsPage.blackListedWebsites.filter(
												item => item !== websiteTitle
											),
										],
									})
								}>
								<DeleteIcon fontSize='small' />
							</Button>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Fragment>
	);
};

export default BlacklistedWebsites;
