import { makeStyles } from '@material-ui/core/styles';
import bigLogo from '../assets/images/big_logo.svg';
import mainLogo from '../assets/images/logo.png';
import { Fragment } from 'react';

const useStyles = makeStyles({
	profilesRoot: {
		width: '100vw',
		height: '100vh',
	},
});

const Profiles = () => {
	const classes = useStyles();

	return <div className={classes.profilesRoot}>Hey There</div>;
};

export default Profiles;
