import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@material-ui/core';
import { TextField, Switch, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ChangeEvent, useState } from 'react';
import useSettings from '../../providers/settings';

const useStyles = makeStyles({
	accordionContainer: {
		padding: '20px 0 20px 0',
	},
	innerElements: {
		display: 'flex',
		flexDirection: 'column',
		gap: '10px',
	},
});

const Accordions: React.FC = () => {
	const { popupPage, changeData } = useSettings();
	const [expanded, setExpanded] = useState('');
	const classes = useStyles();

	const changeOpenTab =
		(panel: string) => (_event: ChangeEvent<{}>, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : '');
		};

	return (
		<div className={classes.accordionContainer}>
			{Object.entries({
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
			}).map(([categoryKey, options]) => {
				return (
					<Accordion
						key={categoryKey}
						square
						expanded={expanded === categoryKey}
						onChange={changeOpenTab(categoryKey)}>
						<AccordionSummary>
							<Typography>{categoryKey.split('_').join(' ')}</Typography>
						</AccordionSummary>
						<AccordionDetails className={classes.innerElements}>
							{Object.entries(options).map(([key, settings]) => {
								const optionKey = key as keyof typeof popupPage;
								const optionValue = popupPage[optionKey];
								if (typeof optionValue === 'boolean')
									return (
										<FormControlLabel
											control={
												<Switch
													key={optionKey}
													checked={optionValue}
													onChange={e =>
														changeData('popupPage', optionKey, e.target.checked)
													}
												/>
											}
											label={settings.title}
										/>
									);
								if (
									(typeof optionValue === 'string' || typeof optionValue === 'number') &&
									settings.display
								) {
									console.log(optionValue);
									console.log(typeof optionValue);
									return (
										<TextField
											key={optionKey}
											label={settings.title}
											value={optionValue}
											type={typeof optionValue}
											onChange={e =>
												changeData(
													'popupPage',
													optionKey,
													typeof optionValue === 'number'
														? parseInt(e.target.value) || 0
														: e.target.value
												)
											}
										/>
									);
								}
								return undefined;
							})}
						</AccordionDetails>
					</Accordion>
				);
			})}
		</div>
	);
};

export default Accordions;
