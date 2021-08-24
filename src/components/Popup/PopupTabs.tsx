import { faShopify, faStripeS } from '@fortawesome/free-brands-svg-icons';
import { faBullseye, faCode, faRobot } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Close } from '../../assets/images/supreme_icon.svg';
import { ReactComponent as Logout } from '../../assets/images/walmart_icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	AppBar,
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
	scrollableSettings: {
		height: '350px',
		overflow: 'overlay',
		overflowX: 'hidden',
		'&::-webkit-scrollbar': { width: '10px' } /* width */,
		'&::-webkit-scrollbar-track': { background: '#222' } /* Track */,
		'&::-webkit-scrollbar-thumb': { background: '#444' } /* Handle */,
		'&::-webkit-scrollbar-thumb:hover': { background: '#383838' } /* Handle on hover */,
	},
	innerElements: {
		display: 'flex',
		flexDirection: 'column',
		gap: '10px',
	},
});

const PopupTabs: React.FC = () => {
	const { data, setData } = useSettings();
	const { popupPage } = data;
	const [value, setValue] = useState(0);
	const classes = useStyles();

	const icons = {
		Shopify: faShopify,
		Stripe: faStripeS,
		Supreme: <Close style={{ height: 24, width: 17, paddingTop: 5 }} />,
		Walmart: <Logout style={{ height: 18, width: 18, paddingTop: 5 }} />,
		Target: faBullseye,
		Scripts: faCode,
		Bots: faRobot,
	};

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
				type: 'string',
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
			<AppBar position='static' color='default'>
				<Tabs
					style={{ background: '#171717' }}
					value={value}
					onChange={handleChange}
					indicatorColor='primary'
					textColor='primary'
					variant='scrollable'
					scrollButtons='on'>
					{Object.keys(popupSchema).map(key => (
						<Tab
							key={key}
							label={
								<Grid
									justifyContent='center'
									alignItems='center'
									container
									style={{ fontSize: 16 }}>
									<div style={{ paddingRight: 10 }}>
										{React.isValidElement(icons[key as keyof typeof icons]) ? (
											icons[key as keyof typeof icons]
										) : (
											<FontAwesomeIcon
												icon={icons[key as keyof typeof icons] as IconProp}
											/>
										)}
									</div>
									{key}
								</Grid>
							}
						/>
					))}
				</Tabs>
			</AppBar>

			{Object.values(popupSchema).map((options, index) => {
				return (
					<Paper
						key={index}
						className={classes.scrollableSettings}
						style={{ paddingTop: 10 }}
						role='tabpanel'
						hidden={value !== index}>
						{value === index && (
							<Grid
								container
								direction='column'
								spacing={2}
								style={{ padding: '10px 25px' }}>
								{Object.entries(options).map(([optionTitle, optionSettings]: any) => {
									const optionKey = optionTitle as keyof typeof popupPage;
									const optionValue = popupPage[optionKey];
									const optionType = optionSettings.type;
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
																setData({
																	parentKey: 'popupPage',
																	childKey: optionKey,
																	newValue: e.target.checked,
																})
															}
														/>
													}
													label={optionSettings.title}
												/>
											</Grid>
										);
									if (
										(optionType === 'string' || optionType === 'number') &&
										optionSettings.display
									) {
										return (
											<Grid item style={{ paddingTop: 5 }}>
												<TextField
													fullWidth
													key={optionKey}
													label={optionSettings.title}
													value={optionValue}
													type={optionType}
													onChange={e =>
														setData({
															parentKey: 'popupPage',
															childKey: optionKey,
															newValue:
																optionType === 'number'
																	? Math.abs(parseInt(e.target.value)) || 1
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
