import Accordion from '@material-ui/core/Accordion';
import { makeStyles } from '@material-ui/core/styles';
import { AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { ChangeEvent, useState } from 'react';
import AccordionItem from './AccordionItem';

const useStyles = makeStyles({
	accordions: {
		paddingTop: '20px',
	},
});

const Accordions: React.FC = () => {
	const classes = useStyles();

	const [expanded, setExpanded] = useState('');

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
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
				lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
				lobortis eget.
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
