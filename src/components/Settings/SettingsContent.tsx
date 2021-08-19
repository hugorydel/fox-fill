import { Grid, Button, Paper, ButtonGroup, makeStyles } from '@material-ui/core';
import { Fragment } from 'react';
import SettingsContentInput from './SettingsContentInput';

const useStyles = makeStyles({});

const settingsSchema = {
	notifications: { title: 'Notifications', heading: true },
	discordWebhook: {
		title: 'Discord Webhook',
		textFieldSize: 9,
		placeholder: 'Enter discord webhook',
		button: (
			<Button
				style={{
					width: `100%`,
					height: '100%',
				}}
				variant='contained'
				color='primary'>
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
		textFieldSize: 9,
		title: 'URL',
		placeholder: 'https://wrathbots.com',
		button: (
			<Button
				style={{
					width: `100%`,
					height: '100%',
				}}
				variant='contained'
				color='primary'>
				Test
			</Button>
		),
	},
	proxy: { title: 'Browser Proxy', heading: true },
	browserProxy: {
		textFieldSize: 8,
		title: 'Proxy',
		placeholder: 'ip:port:username:password',
		button: (
			<ButtonGroup
				style={{
					width: `100%`,
					height: '100%',
				}}
				variant='contained'
				color='primary'>
				<Button
					style={{
						width: `100%`,
						height: '100%',
					}}>
					Test
				</Button>
				<Button
					style={{
						width: `100%`,
						height: '100%',
					}}>
					Apply
				</Button>
			</ButtonGroup>
		),
	},
	blacklisted: { title: 'Blacklisted Websites', heading: true },
	blacklistedWebsites: {
		title: 'URL',
		placeholder: 'Enter URL',
	},
};

const SettingsContent: React.FC = () => {
	const classes = useStyles();

	return (
		<Grid justifyContent='space-between' container spacing={1}>
			<Grid xs={12} item>
				<Paper style={{ height: '100px' }} elevation={3}>
					User Details
				</Paper>
			</Grid>
			{Object.entries(settingsSchema).map(([itemName, settings]: [string, any]) => (
				<SettingsContentInput key={itemName} itemName={itemName} settings={settings} />
			))}
		</Grid>
	);
};

export default SettingsContent;
