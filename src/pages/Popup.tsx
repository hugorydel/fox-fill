import { makeStyles } from '@material-ui/core/styles';
import bigLogo from '../assets/images/big_logo.svg';
import mainLogo from '../assets/images/logo.png';
import { Fragment } from 'react';
import ProfileSelect from '../components/Popup/ProfileSelect';
import Accordions from '../components/Popup/Accordions';

const useStyles = makeStyles({
	headers: {
		background: '#171717',
		height: '80px',
		overflow: 'hidden',
		display: 'flex',
		justifyContent: 'space-between',
	},
	mainLogo: {
		marginLeft: '40px',
		marginTop: '18px',
		width: '45px',
		height: '45px',
	},
	bigLogo: {
		marginTop: '10px',
		marginRight: '20px',
		height: '260px',
		width: '266px',
	},
});

const Popup = () => {
	const classes = useStyles();

	return (
		<Fragment>
			<header className={classes.headers}>
				<img src={mainLogo} alt='Fox Fill Logo' className={classes.mainLogo} />
				<img src={bigLogo} alt='Large Fox Fill Logo' className={classes.bigLogo} />
			</header>
			<ProfileSelect />
			<Accordions />
		</Fragment>
	);
};

export default Popup;
