import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	navigationItem: {
		display: 'flex',
		flexDirection: 'row',
		gap: '7px',
		padding: '20px',
		cursor: 'pointer',
	},
	currentNavigationItem: { borderBottom: `2px solid ${theme.palette.primary.main}` },
}));

interface NavigationItemProps {
	children?: React.ReactNode;
	handleChange: (value: number) => void;
	index: number;
	value: number;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
	index,
	value,
	handleChange,
	children,
}) => {
	const classes = useStyles();
	return (
		<div
			className={`${classes.navigationItem} ${
				index === value && classes.currentNavigationItem
			}`}
			onClick={() => handleChange(index)}>
			{children}
		</div>
	);
};

export default NavigationItem;
