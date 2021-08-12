import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/Profiles/Navbar';

const useStyles = makeStyles({
	profilesRoot: {
		width: '100vw',
		height: '100vh',
	},
	profilesContainer: {
		maxWidth: '70vw',
		margin: 'auto',
		width: '100vw',
		height: '100vh',
	},
});

const Profiles = () => {
	const classes = useStyles();

	return (
		<div className={classes.profilesRoot}>
			<Navbar />
		</div>
	);
};

export default Profiles;
