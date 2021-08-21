import { faShopify, faStripeS } from '@fortawesome/free-brands-svg-icons';
import { faBullseye, faCode, faRobot } from '@fortawesome/free-solid-svg-icons';
import supremeLogo from '../../assets/images/supreme-logo.png';
import walmartLogo from '../../assets/images/walmart-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	AppBar,
	Box,
	FormControlLabel,
	Grid,
	Paper,
	Switch,
	Tab,
	Tabs,
	TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { ChangeEvent, useState } from 'react';
import useSettings from '../../providers/settings';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const useStyles = makeStyles({
	tabsContainer: {
		padding: '20px 0 20px 0',
	},
	innerElements: {
		display: 'flex',
		flexDirection: 'column',
		gap: '10px',
	},
});

const icons = {
	Shopify: faShopify,
	Stripe: faStripeS,
	Supreme: supremeLogo,
	Walmart: walmartLogo,
	Target: faBullseye,
	Scripts: faCode,
	Bots: faRobot,
};

const PopupTabs: React.FC = () => {
	const { popupPage, changeData } = useSettings();
	const [value, setValue] = useState(0);
	const classes = useStyles();

	const popupSchema = {
		Shopify: {
			shopifyEnabled: { title: 'Enabled' },
			shopifyNavigateThroughStepsEnabled: { title: 'Navigate Through Steps' },
			shopifyNavigateThroughStepsDelay: {
				display: popupPage.shopifyNavigateThroughStepsEnabled,
				title: 'Navigate Through Steps Delay',
				type: 'number',
			},
			shopifyRequests: { title: 'Requests' },
			shopifyAutocart: { title: 'Autocart' },
			shopifyShopifyAutocop: { title: 'Autocop' },
			shopifyHybrid: { title: 'Hybrid' },
			shopifyProductMenu: { title: 'Product Menu' },
		},
		Stripe: {
			stripeEnabled: { title: 'Enabled' },
			stripeRefreshPageUntilClickEnabled: { title: 'Refresh Page Until Click' },
			stripeRefreshPageUntilClickURL: {
				display: popupPage.stripeRefreshPageUntilClickEnabled,
				title: 'Refresh Page Until Click URL',
			},
			stripeACO: { title: 'ACO' },
		},
		Supreme: {
			supremeEnabled: { title: 'Enabled' },
			supremeAutocop: { title: 'Autocop' },
			supremeProcessPayment: { title: 'Process Payment' },
			supremeProductMenu: { title: 'Product Menu' },
		},
		Walmart: {
			walmartACO: { title: 'ACO' },
			walmartATC: { title: 'ATC' },
		},
		Target: {
			targetACO: { title: 'ACO' },
			targetATC: { title: 'ATC' },
			targetAllowPickup: { title: 'Allow Pickup' },
		},
		Scripts: {
			AIOScriptsAdidasYeezySupply: { title: 'Yeezy Supply' },
			AIOScriptsOffWhite: { title: 'Off White' },
			AIOScriptsFootsites: { title: 'Footsites' },
		},
		Bots: {
			botsBandarsBounties: { title: `Bandar's Bounties` },
			botsShrey: { title: 'Shrey' },
			botsVelo: { title: 'Velo' },
			botsDiscordOAuth: { title: 'Discord OAuth' },
		},
	};

	const handleChange = (_event: ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	return (
		<div className={classes.tabsContainer}>
			<AppBar style={{ background: '#171717' }} position='static' color='default'>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor='primary'
					textColor='primary'
					variant='scrollable'
					scrollButtons='on'>
					{Object.keys(popupSchema).map(key => (
						<Tab
							label={
								<div
									style={{
										display: 'flex',
										flexDirection: 'row',
										color: '#fff',
										fontSize: 18,
									}}>
									<div style={{ height: 20, width: 20, paddingRight: 10 }}>
										{typeof icons[key as keyof typeof icons] === 'string' ? (
											<img
												style={{ height: 20 }}
												src={icons[key as keyof typeof icons] as string}
												alt='descriptive icon'
											/>
										) : (
											<FontAwesomeIcon
												icon={icons[key as keyof typeof icons] as IconProp}
											/>
										)}
									</div>
									{key}
								</div>
							}
						/>
					))}
				</Tabs>
			</AppBar>

			{Object.values(popupSchema).map((options, index) => {
				return (
					<Paper
						style={{ background: '#171717', paddingTop: 10 }}
						role='tabpanel'
						hidden={value !== index}>
						{value === index && (
							<Grid container direction='column' spacing={2} style={{ padding: 15 }}>
								{Object.entries(options).map(([optionTitle, optionSettings]: any) => {
									const optionKey = optionTitle as keyof typeof popupPage;
									const optionValue = popupPage[optionKey];
									if (typeof optionValue === 'boolean')
										return (
											<Grid item>
												<FormControlLabel
													control={
														<Switch
															size='small'
															key={optionKey}
															checked={optionValue}
															onChange={e =>
																changeData('popupPage', optionKey, e.target.checked)
															}
														/>
													}
													label={optionSettings.title}
												/>
											</Grid>
										);
									if (
										(typeof optionValue === 'string' ||
											typeof optionValue === 'number') &&
										optionSettings.display
									) {
										return (
											<Grid item style={{ paddingTop: 5 }}>
												<TextField
													fullWidth
													key={optionKey}
													label={optionSettings.title}
													value={optionValue}
													type={typeof optionValue}
													onChange={e =>
														changeData({
															parentKey: 'popupPage',
															childKey: optionKey,
															newValue:
																typeof optionValue === 'number'
																	? parseInt(e.target.value) || 0
																	: e.target.value,
														})
													}
												/>
											</Grid>
										);
									}
									return undefined;
								})}
							</Grid>
						)}
					</Paper>
				);
			})}
		</div>
	);
};

export default PopupTabs;
