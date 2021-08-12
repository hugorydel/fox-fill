import { makeStyles } from '@material-ui/core/styles';
import bigLogo from '../assets/images/big_logo.svg';
import mainLogo from '../assets/images/logo.png';
import ProfileSelect from '../components/Popup/ProfileSelect';
import Accordions from '../components/Popup/Accordions';
import { Button } from '@material-ui/core';
import { ChangeEvent } from 'react';

const useStyles = makeStyles({
	popupRoot: {
		width: '600px',
		height: '600px',
	},
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
	content: {
		padding: '18px 40px 0px 40px',
		height: '500px',
		overflow: 'overlay',
		'&::-webkit-scrollbar': { width: '10px' } /* width */,
		'&::-webkit-scrollbar-track': { background: '#222' } /* Track */,
		'&::-webkit-scrollbar-thumb': { background: '#444' } /* Handle */,
		'&::-webkit-scrollbar-thumb:hover': { background: '#383838' } /* Handle on hover */,
	},
});

const Popup = () => {
	const classes = useStyles();

	const goToSettings = (_event: ChangeEvent<{}>) => {
		window.open(`${window.location.href.split('#')[0]}#/profiles`);
	};

	return (
		<div className={classes.popupRoot}>
			<header className={classes.headers}>
				<img src={mainLogo} alt='Fox Fill Logo' className={classes.mainLogo} />
				<img src={bigLogo} alt='Large Fox Fill Logo' className={classes.bigLogo} />
			</header>
			<div className={classes.content}>
				<ProfileSelect />
				<Accordions />
				<Button onClick={goToSettings} variant='contained' color='secondary'>
					Go To Settings
				</Button>
			</div>
		</div>
	);
};

export default Popup;
