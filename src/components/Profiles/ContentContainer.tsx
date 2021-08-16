import { Box, makeStyles } from '@material-ui/core';

interface ContentContainerProps {}

const useStyles = makeStyles(() => ({
	content: {
		color: '#fff',
		padding: '100px 100px 0 100px',
		display: 'grid',
		placeItems: 'center',
	},
}));

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
	const classes = useStyles();
	return (
		<Box className={classes.content} p={3}>
			{children}
		</Box>
	);
};

export default ContentContainer;
