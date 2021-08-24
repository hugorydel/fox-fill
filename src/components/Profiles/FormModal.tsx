import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
	Typography,
	FormControlLabel,
	Switch,
	Dialog,
	Button,
	Grid,
	DialogTitle,
	DialogContent,
	DialogActions,
} from '@material-ui/core';
import useSettings from '../../providers/settings';
import { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Form, Formik, FormikProps } from 'formik';
import { Profile } from '../../providers/settings/types';
import FormModalInput from './FormModalInput';

const shippingSchema = {
	shippingProfileTitle: {
		title: 'Profile Title',
		sm: '12',
		placeholder: 'Enter Profile Tile',
	},
	shippingFirstName: { title: 'First Name', placeholder: 'Enter First Name' },
	shippingLastName: { title: 'Last Name', placeholder: 'Enter Last Name' },
	shippingCardNumber: {
		title: 'Card Number',
		sm: '12',
		mask: '9999 9999 9999 9999',
		autoComplete: 'cc-number',
		maxLength: '19',
		placeholder: '0000 0000 0000 0000',
	},
	shippingExpirationDate: {
		title: 'Expiration Date',
		maxLength: '5',
		placeholder: 'MM/YY',
		mask: '99/99',
		autoComplete: 'cc-number',
	},
	shippingCVV: {
		title: 'CVV',
		maxLength: '3',
		placeholder: 'CVV',
		mask: '999',
		// This causes an automatic touched error
		autoComplete: 'cc-exp',
	},
	shippingAddressOne: { title: 'Address One', placeholder: 'Enter Address 1' },
	shippingAddressTwo: { title: 'Address Two', placeholder: 'Enter Address 2' },
	shippingCountry: { title: 'Country', placeholder: 'Enter Country' },
	shippingState: { title: 'State', placeholder: 'Enter State/Province' },
	shippingPhoneNumber: {
		title: 'Phone Number',
		maxLength: '20',
		placeholder: 'Enter Phone Number',
		type: 'tel',
	},
	shippingEmail: { title: 'Email', placeholder: 'Enter Email', type: 'email' },
	shippingDiscord: { title: 'Discord', placeholder: 'Enter Discord' },
	shippingTwitter: { title: 'Twitter', placeholder: 'Enter Twitter' },
	shippingCity: { title: 'City', placeholder: 'Enter City' },
	shippingZipCode: { title: 'Zip Code', placeholder: 'Enter Zip Code' },
};

const billingSchema = {
	billingFirstName: { title: 'First Name', placeholder: 'Enter First Name' },
	billingLastName: { title: 'Last Name', placeholder: 'Enter Last Name' },
	billingAddressOne: { title: 'Address One', placeholder: 'Enter Address 1' },
	billingAddressTwo: { title: 'Address Two', placeholder: 'Enter Address 2' },
	billingCountry: { title: 'Country', placeholder: 'Enter Country' },
	billingState: { title: 'State', placeholder: 'Enter State' },
	billingCity: { title: 'City', placeholder: 'Enter City' },
	billingZipCode: { title: 'Zip Code', placeholder: 'Enter Zip Code' },
	billingPhoneNumber: {
		title: 'Phone Number',
		placeholder: 'Enter Phone Number',
		type: 'tel',
	},
	billingEmail: { title: 'Email', placeholder: 'Enter Email', type: 'email' },
};

const useStyles = makeStyles(() =>
	createStyles({
		modalRoot: {
			overflow: 'overlay',
			'&::-webkit-scrollbar': { width: '10px' } /* width */,
			'&::-webkit-scrollbar-track': { background: '#222' } /* Track */,
			'&::-webkit-scrollbar-thumb': { background: '#444' } /* Handle */,
			'&::-webkit-scrollbar-thumb:hover': { background: '#383838' } /* Handle on hover */,
		},
		paper: { maxWidth: '760px' },
		formModalTitle: {
			color: '#FF993B',
			fontSize: 30,
			fontWeight: 600,
		},
		contentTitleStyle: {
			paddingBottom: 8,
			paddingTop: 16,
			fontWeight: 600,
		},
	})
);

interface FormModalProps {
	setModalOpen: (value: React.SetStateAction<boolean>) => void;
	open: boolean;
	type: 'create' | 'edit';
}

const FormModal: React.FC<FormModalProps> = ({ setModalOpen, open, type }) => {
	const { data, setData } = useSettings();
	const { profilesPage } = data;
	const { currentProfile, createdProfiles } = profilesPage;
	const classes = useStyles();

	const editType = type === 'edit' && currentProfile;

	const objectKeysToStrings = (object: object) =>
		Object.keys(object).reduce((acc: any, key: any) => {
			acc[key] = '';
			return acc;
		}, {});

	const initialValues = editType
		? currentProfile
		: { id: uuid(), ...objectKeysToStrings(shippingSchema) };

	const sameAddress = editType ? !('billing' in currentProfile!) : true;

	const [sameBillingAddress, setSameBillingAddress] = useState(sameAddress);

	const validate = (values: Profile) => {
		const errors: any = {};

		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
		const phoneRegex =
			/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
		const cvvRegex = /^[0-9]{3,4}$/;

		for (const [key, value] of Object.entries(values)) {
			if (!value) errors[key as keyof Profile] = 'Required Field';
		}

		if (!emailRegex.test(values.shippingEmail))
			errors.shippingEmail = 'Invalid email address';

		if (!phoneRegex.test(values.shippingPhoneNumber))
			errors.shippingPhoneNumber = 'Invalid Phone Number';
		if (!cvvRegex.test(values.shippingCVV)) errors.shippingCVV = 'Invalid CVV';

		if (values.billingEmail && !emailRegex.test(values.billingEmail))
			errors.billingEmail = 'Invalid email address';
		if (values.billingPhoneNumber && !phoneRegex.test(values.billingPhoneNumber))
			errors.billingPhoneNumber = 'Invalid Phone Number';

		return errors;
	};

	return (
		<Dialog
			fullWidth
			classes={{ paper: classes.paper }}
			open={open}
			onClose={() => setModalOpen(false)}
			aria-labelledby='simple-modal-title'
			aria-describedby='simple-modal-description'>
			<Formik
				initialValues={initialValues}
				validate={validate}
				onSubmit={values => {
					editType
						? setData({
								parentKey: 'profilesPage',
								childKey: 'createdProfiles',
								newValue: createdProfiles.map(profile =>
									profile.id === values.id ? values : profile
								),
						  })
						: setData({
								parentKey: 'profilesPage',
								childKey: 'createdProfiles',
								newValue: [...createdProfiles, values],
						  });
				}}>
				{({
					submitForm,
					setValues,
					resetForm,
					validateForm,
					isSubmitting,
				}: FormikProps<Profile>) => (
					<>
						<DialogTitle>
							<Typography className={classes.formModalTitle} variant='h5'>
								{editType ? 'Edit' : 'Create'} Profile
							</Typography>
						</DialogTitle>
						<DialogContent className={classes.modalRoot}>
							<Form>
								<Typography className={classes.contentTitleStyle} variant='h5'>
									Shipping
								</Typography>
								<Grid container justifyContent='space-between' spacing={1}>
									{Object.entries(shippingSchema).map(([key, settings]) => (
										<FormModalInput key={key} itemName={key} settings={settings} />
									))}
								</Grid>
								<FormControlLabel
									control={
										<Switch
											checked={sameBillingAddress}
											onChange={e => {
												if (!e.target.checked) {
													setValues(currentProfile => {
														return {
															...currentProfile,
															...objectKeysToStrings(billingSchema),
														};
													});
													setSameBillingAddress(false);
												} else {
													setValues(profile => {
														for (const key in billingSchema)
															delete profile[key as keyof typeof billingSchema];
														return profile;
													});
													setSameBillingAddress(true);
												}
											}}
										/>
									}
									label='Same As Billing'
								/>
								{!sameBillingAddress && (
									<Fragment>
										<Typography className={classes.contentTitleStyle} variant='h5'>
											Billing
										</Typography>
										<Grid container spacing={1}>
											{Object.entries(billingSchema).map(([key, settings]) => (
												<FormModalInput key={key} itemName={key} settings={settings} />
											))}
										</Grid>
									</Fragment>
								)}
							</Form>
						</DialogContent>
						<DialogActions>
							<Button
								onClick={() => {
									resetForm();
									setModalOpen(false);
								}}
								color='primary'>
								Cancel
							</Button>
							<Button
								onClick={async () => {
									await submitForm();
									const errors = await validateForm();
									if (Object.keys(errors).length === 0 && !isSubmitting)
										setModalOpen(false);
								}}
								color='primary'
								variant='contained'>
								{editType ? 'Save' : 'Create'} Profile
							</Button>
						</DialogActions>
					</>
				)}
			</Formik>
		</Dialog>
	);
};

export default FormModal;
