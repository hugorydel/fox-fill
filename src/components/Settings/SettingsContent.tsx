import { Grid, Button, ButtonGroup, makeStyles } from '@material-ui/core';
import SettingsContentInput from './SettingsContentInput';
import BlacklistedWebsites from './BlacklistedWebsites';
import UserInfoDisplay from './UserInfoDisplay';
import ImportExport from './ImportExport';

const useStyles = makeStyles({
	buttons: {
		width: `100%`,
		height: '54px',
	},
});

const SettingsContent: React.FC = () => {
	const classes = useStyles();
	const settingsSchema = {
		notifications: { title: 'Notifications', heading: true },
		discordWebhook: {
			title: 'Discord Webhook',
			textFieldSize: 10,
			placeholder: 'Enter discord webhook',
			button: (
				<Button className={classes.buttons} variant='contained' color='primary'>
					Test
				</Button>
			),
		},
		supremeMonitor: { title: 'Supreme Monitor', heading: true },
		supremeMonitorKeywords: {
			title: 'Keywords',
			containerSize: 12,
			placeholder: 'Enter keywords',
		},
		supremeMonitorColor: {
			title: 'Color',
			containerSize: 6,
			placeholder: 'Enter monitor color',
		},
		supremeMonitorSize: {
			title: 'Size',
			containerSize: 6,
			placeholder: 'Enter monitor size',
		},
		shopifyMonitor: { title: 'Shopify Monitor', heading: true },
		shopifyMonitorKeywords: {
			title: 'Keywords',
			placeholder: 'Enter keywords',
		},
		shopifyMonitorColor: {
			title: 'Color',
			containerSize: 6,
			placeholder: 'Enter monitor color',
		},
		shopifyMonitorSize: {
			title: 'Size',
			containerSize: 6,
			placeholder: 'Enter monitor size',
		},
		promo: { title: 'Promo/Discount Code', heading: true },
		promoCode: {
			title: 'Code',
			placeholder: 'Enter promo/discount code',
		},
		appender: { title: 'Link Appender', heading: true },
		linkAppender: {
			textFieldSize: 10,
			title: 'URL',
			placeholder: 'https://wrathbots.com',
			button: (
				<Button className={classes.buttons} variant='contained' color='primary'>
					Test
				</Button>
			),
		},
		proxy: { title: 'Browser Proxy', heading: true },
		browserProxy: {
			textFieldSize: 9,
			title: 'Proxy',
			placeholder: 'ip:port:username:password',
			button: (
				<ButtonGroup className={classes.buttons} variant='contained' color='primary'>
					<Button className={classes.buttons}>Test</Button>
					<Button className={classes.buttons}>Apply</Button>
				</ButtonGroup>
			),
		},
		blacklisted: { title: 'Blacklisted Websites', heading: true },
		// Blacklisted Websites component is created below, without array mapping. Doing otherwise, with this design, would create additional complexity.
	};

	return (
		<Grid justifyContent='space-between' container direction='row'>
			<Grid xs={12} item>
				<UserInfoDisplay />
			</Grid>
			{Object.entries(settingsSchema).map(([itemName, settings]: [string, any]) => (
				<SettingsContentInput key={itemName} itemName={itemName} settings={settings} />
			))}
			<BlacklistedWebsites />
			<ImportExport />
		</Grid>
	);
};

export default SettingsContent;
