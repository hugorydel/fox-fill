import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@material-ui/core';
import { ChangeEvent } from 'react';

interface AccordionsItemProps {
	expanded: string;
	changeExpanded: (
		input: string
	) => ((event: ChangeEvent<{}>, expanded: boolean) => void) | undefined;
	title: string;
	children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionsItemProps> = ({
	expanded,
	changeExpanded,
	title,
	children,
}) => {
	return (
		<Accordion square expanded={expanded === title} onChange={changeExpanded(title)}>
			<AccordionSummary>
				<Typography>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</Accordion>
	);
};

export default AccordionItem;
