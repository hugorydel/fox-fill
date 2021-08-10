import { TextField, Switch, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ChangeEvent, useState } from 'react';
import useSettings from '../../providers/settings';
import AccordionItem from './AccordionItem';

const useStyles = makeStyles({
	accordions: {
		padding: '20px 0 20px 0',
	},
});

const Accordions: React.FC = () => {
	const { changeData, data } = useSettings();

	const classes = useStyles();

	const [expanded, setExpanded] = useState('');

	const changeOpenAccordion =
		(panel: string) => (_event: ChangeEvent<{}>, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : '');
		};

	console.log('in state data', data);

	return (
		<div className={classes.accordions}>
			{Object.entries(data).map(([categoryKey, options], index) => {
				return (
					<AccordionItem
						title={categoryKey}
						expanded={expanded}
						changeExpanded={changeOpenAccordion}>
						{Object.entries(options).map(([optionKey, optionValue], index) => {
							const optionType = typeof optionValue;
							if (optionType === 'boolean')
								return (
									<FormControlLabel
										control={
											<Switch
												key={index}
												checked={optionValue}
												onChange={e =>
													changeData(categoryKey, optionKey, e.target.checked)
												}
											/>
										}
										label={optionKey}
									/>
								);
							if (optionType === 'string' || optionType === 'number')
								return (
									<TextField
										key={index}
										label={optionKey}
										value={optionValue}
										type={optionType}
										onChange={e => changeData(categoryKey, optionKey, e.target.value)}
									/>
								);
							return undefined;
						})}
					</AccordionItem>
				);
			})}
		</div>
	);
};

export default Accordions;
