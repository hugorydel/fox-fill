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
	const { popup, changeData } = useSettings();
	const [expanded, setExpanded] = useState('');
	const classes = useStyles();

	const changeOpenTab =
		(panel: string) => (_event: ChangeEvent<{}>, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : '');
		};

	const capitalizeFirstLetter = (text: string): string =>
		text.charAt(0).toUpperCase() + text.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2');

	return (
		<div className={classes.accordionContainer}>
			{Object.entries({
				shopify: {
					shopifyEnabled: '',
					shopifyNavigateThroughStepsEnabled: '',
					shopifyNavigateThroughStepsDelay: '',
					shopifyRequests: '',
					shopifyAutocart: '',
					shopifyShopifyAutocop: '',
					shopifyHybrid: '',
					shopifyProductMenu: '',
				},
				stripe: {
					stripeEnabled: '',
					stripeRefreshPageUntilClickEnabled: '',
					stripeRefreshPageUntilClickURL: '',
					stripeACO: '',
				},
				supreme: {
					supremeEnabled: '',
					supremeAutocop: '',
					supremeProcessPayment: '',
					supremeProductMenu: '',
				},
				walmart: {
					walmartACO: '',
					walmartATC: '',
				},
				target: {
					targetACO: '',
					targetATC: '',
					targetAllowPickup: '',
				},
				AIOScripts: {
					AIOScriptsAdidasYeezySupply: '',
					AIOScriptsOffWhite: '',
					AIOScriptsFootsites: '',
				},
				bots: {
					botsBandarsBounties: '',
					botsShrey: '',
					botsVelo: '',
					botsDiscordOAuth: '',
				},
			}).map(([categoryKey, options]) => {
				return (
					<Accordion
						key={categoryKey}
						square
						expanded={expanded === categoryKey}
						onChange={changeOpenTab(categoryKey)}>
						<AccordionSummary>
							<Typography>{capitalizeFirstLetter(categoryKey)}</Typography>
						</AccordionSummary>
						<AccordionDetails className={classes.innerElements}>
							{Object.entries(options).map(([option]) => {
								const optionKey = option as keyof typeof popup;
								const optionValue = popup[optionKey];
								if (typeof optionValue === 'boolean')
									return (
										<FormControlLabel
											control={
												<Switch
													key={optionKey}
													checked={optionValue}
													onChange={e => changeData('popup', optionKey, e.target.checked)}
												/>
											}
											label={capitalizeFirstLetter(optionKey)}
										/>
									);
								if (typeof optionValue === 'string' || typeof optionValue === 'number')
									return (
										<TextField
											key={optionKey}
											label={capitalizeFirstLetter(optionKey)}
											value={optionValue}
											type={typeof optionValue}
											onChange={e => changeData('popup', optionKey, e.target.value)}
										/>
									);
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
