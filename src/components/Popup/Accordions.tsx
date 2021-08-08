import { FormControlLabel, Switch } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ChangeEvent, useState } from 'react';
import AccordionItem from './AccordionItem';

const useStyles = makeStyles({
	accordions: {
		padding: '20px 0 20px 0',
	},
});

const Accordions: React.FC = () => {
	const classes = useStyles();

	const [expanded, setExpanded] = useState('');
	const [settings, setSettings] = useState({
		shopifyEnabled: false,
		shopifyNavigateThroughStepsEnabled: false,
		shopifyNavigateThroughStepsDelay: 10000,
		shopifyRequests: false,
		shopifyAutocart: false,
		shopifyShopifyAutocop: false,
		shopifyHybrid: false,
		shopifyProductMenu: false,
		stripeEnabled: false,
		stripeAutocop: false,
		stripeProcessPayment: false,
		stripeProductMenu: false,
		supremeACO: false,
		supremeATC: false,
		walmartACO: false,
		walmartATC: false,
		walmartAllowPickup: false,
		targetAdidasYeezySupply: false,
		targetOffWhite: false,
		targetFootsites: false,
		botsBandarsBounties: false,
		botsShrey: false,
		botsVelo: false,
		botsDiscordOAuth: false,
	});

	const changeOpenAccordion =
		(panel: string) => (_event: ChangeEvent<{}>, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : '');
		};

	return (
		<div className={classes.accordions}>
			<AccordionItem
				title='Shopify'
				expanded={expanded}
				changeExpanded={changeOpenAccordion}>
				<FormControlLabel
					control={
						<Switch
							checked={settings.shopifyEnabled}
							onChange={e =>
								setSettings({ ...settings, shopifyEnabled: e.target.checked })
							}
						/>
					}
					label='Enabled'
				/>
			</AccordionItem>
			<AccordionItem
				title='Stripe'
				expanded={expanded}
				changeExpanded={changeOpenAccordion}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
				lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
				lobortis eget.
			</AccordionItem>
			<AccordionItem
				title='Supreme'
				expanded={expanded}
				changeExpanded={changeOpenAccordion}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
				lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
				lobortis eget.
			</AccordionItem>
			<AccordionItem
				title='Walmart'
				expanded={expanded}
				changeExpanded={changeOpenAccordion}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
				lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
				lobortis eget.
			</AccordionItem>
			<AccordionItem
				title='Target'
				expanded={expanded}
				changeExpanded={changeOpenAccordion}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
				lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
				lobortis eget.
			</AccordionItem>
			<AccordionItem title='AIO' expanded={expanded} changeExpanded={changeOpenAccordion}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
				lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
				lobortis eget.
			</AccordionItem>
			<AccordionItem
				title='Bots'
				expanded={expanded}
				changeExpanded={changeOpenAccordion}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
				lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, lacus
				ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, lacus ex, sit
				amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
				elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
			</AccordionItem>
		</div>
	);
};

export default Accordions;
