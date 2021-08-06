import Accordion from '@material-ui/core/Accordion';
// import { makeStyles } from '@material-ui/core/styles';
import { AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import { ChangeEvent, useState, Fragment } from 'react';

// const useStyles = makeStyles({
// });

interface AccordionsProps {}

const Accordions: React.FC<AccordionsProps> = () => {
	// const classes = useStyles();

	const [expanded, setExpanded] = useState<string | false>('panel1');

	const handleChange =
		(panel: string) => (event: ChangeEvent<{}>, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		};

	return (
		<Fragment>
			<Accordion
				square
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}>
				<AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
					<Typography>Shopify</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
						lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
						leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				square
				expanded={expanded === 'panel2'}
				onChange={handleChange('panel2')}>
				<AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
					<Typography>Stripe</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
						lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
						leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				square
				expanded={expanded === 'panel3'}
				onChange={handleChange('panel3')}>
				<AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
					<Typography>Supreme</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
						lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
						leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				square
				expanded={expanded === 'panel4'}
				onChange={handleChange('panel4')}>
				<AccordionSummary aria-controls='panel4d-content' id='panel4d-header'>
					<Typography>Walmart</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
						lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
						leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				square
				expanded={expanded === 'panel5'}
				onChange={handleChange('panel5')}>
				<AccordionSummary aria-controls='panel5d-content' id='panel5d-header'>
					<Typography>Target</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
						lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
						leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Fragment>
	);
};

export default Accordions;
