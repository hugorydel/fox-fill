import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Typography, TextField, Switch, FormControlLabel } from '@material-ui/core';
import useSettings from '../../providers/settings';
import { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Profile } from '../../providers/settings/types';
import formatObjectKey from '../../utils/formatObjectKey';

const shipping = {
	profileTitle: '',
	firstName: '',
	lastName: '',
	cardNumber: '',
	expirationDate: '',
	cvv: '',
	addressOne: '',
	addressTwo: '',
	country: '',
	state: '',
	phoneNumber: '',
	email: '',
	discord: '',
	twitter: '',
	city: '',
	zipCode: '',
};

const billing = {
	firstName: '',
	lastName: '',
	addressOne: '',
	addressTwo: '',
	country: '',
	state: '',
	city: '',
	zipCode: '',
	phoneNumber: '',
	email: '',
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modalRoot: {
			display: 'grid',
			placeItems: 'center',
		},
		paper: {
			display: 'grid',
			placeItems: 'center',
			width: 400,
			backgroundColor: theme.palette.background.paper,
			border: '2px solid #000',
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
			overflow: 'overlay',
			height: '80vh',
			'&::-webkit-scrollbar': { width: '10px' } /* width */,
			'&::-webkit-scrollbar-track': { background: '#222' } /* Track */,
			'&::-webkit-scrollbar-thumb': { background: '#444' } /* Handle */,
			'&::-webkit-scrollbar-thumb:hover': { background: '#383838' } /* Handle on hover */,
		},
	})
);

interface FormModalProps {
	setModalOpen: (value: React.SetStateAction<boolean>) => void;
	open: boolean;
	type: 'create' | 'edit';
}

const FormModal: React.FC<FormModalProps> = ({ setModalOpen, open, type }) => {
	const { profiles } = useSettings();
	const { currentProfile } = profiles;
	const initialUserObject =
		type === 'edit' && currentProfile ? currentProfile : { id: uuid(), shipping };
	const initialBillingAddress =
		type === 'edit' && currentProfile ? 'billing' in currentProfile : true;

	const classes = useStyles();

	const [profile, setProfile] = useState<Profile>(initialUserObject);
	const [sameBillingAddress, setSameBillingAddress] = useState(initialBillingAddress);
	const handleClose = () => setModalOpen(false);

	return (
		<Modal
			className={classes.modalRoot}
			open={open}
			onClose={handleClose}
			aria-labelledby='simple-modal-title'
			aria-describedby='simple-modal-description'>
			<div className={classes.paper}>
				<Typography variant='h4'>{type} Profile</Typography>
				<Typography variant='h5'>Shipping</Typography>
				{Object.keys({
					profileTitle: '',
					firstName: '',
					lastName: '',
					cardNumber: '',
					expirationDate: '',
					cvv: '',
					addressOne: '',
					addressTwo: '',
					country: '',
					state: '',
					phoneNumber: '',
					email: '',
					discord: '',
					twitter: '',
					city: '',
					zipCode: '',
				}).map((shippingItemKey, index) => {
					return (
						<TextField
							variant='outlined'
							key={index}
							label={formatObjectKey(shippingItemKey)}
							value={profile.shipping[shippingItemKey as keyof typeof shipping]}
							type='string'
							onChange={e =>
								setProfile(currentProfile => {
									return {
										...currentProfile,
										shipping: {
											...currentProfile.shipping,
											[shippingItemKey]: e.target.value,
										},
									};
								})
							}
						/>
					);
				})}
				<FormControlLabel
					control={
						<Switch
							checked={sameBillingAddress}
							onChange={e => {
								if (!e.target.checked) {
									setProfile(currentProfile => {
										return { ...currentProfile, billing };
									});
								} else {
									setProfile(profile => {
										delete profile.billing;
										return profile;
									});
								}
								setSameBillingAddress(billing => !billing);
							}}
						/>
					}
					label='Same As Billing'
				/>
				{profile.billing && (
					<Fragment>
						<Typography variant='h5'>Billing</Typography>
						{Object.keys({
							firstName: '',
							lastName: '',
							addressOne: '',
							addressTwo: '',
							country: '',
							state: '',
							city: '',
							zipCode: '',
							phoneNumber: '',
							email: '',
						}).map((billingItemKey, index) => {
							return (
								<TextField
									variant='outlined'
									key={index}
									label={formatObjectKey(billingItemKey)}
									value={profile.billing![billingItemKey as keyof typeof billing]}
									type='string'
									onChange={e =>
										setProfile(currentProfile => {
											return {
												...currentProfile,
												billing: {
													...currentProfile.billing!,
													[billingItemKey]: e.target.value,
												},
											};
										})
									}
								/>
							);
						})}
					</Fragment>
				)}
			</div>
		</Modal>
	);
};
export default FormModal;
