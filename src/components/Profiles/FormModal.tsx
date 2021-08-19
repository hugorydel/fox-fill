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
import objectKeysToStrings from '../../utils/objectKeysToStrings';

const shippingSchema = {
	shippingProfileTitle: { sm: '12', placeholder: 'Enter Profile Tile' },
	shippingFirstName: { placeholder: 'Enter First Name' },
	shippingLastName: { placeholder: 'Enter Last Name' },
	shippingCardNumber: {
		sm: '12',
		mask: '9999 9999 9999 9999',
		autoComplete: 'cc-number',
		maxLength: '19',
		placeholder: '0000 0000 0000 0000',
	},
	shippingExpirationDate: {
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
	shippingAddressOne: { placeholder: 'Enter Address 1' },
	shippingAddressTwo: { placeholder: 'Enter Address 2' },
	shippingCountry: { placeholder: 'Enter Country' },
	shippingState: { placeholder: 'Enter State/Province' },
	shippingPhoneNumber: {
		maxLength: '20',
		placeholder: 'Enter Phone Number',
		type: 'tel',
	},
	shippingEmail: { placeholder: 'Enter Email', type: 'email' },
	shippingDiscord: { placeholder: 'Enter Discord' },
	shippingTwitter: { placeholder: 'Enter Twitter' },
	shippingCity: { placeholder: 'Enter City' },
	shippingZipCode: { placeholder: 'Enter Zip Code' },
};

const billingSchema = {
	billingFirstName: { placeholder: 'Enter First Name' },
	billingLastName: { placeholder: 'Enter Last Name' },
	billingAddressOne: { placeholder: 'Enter Address 1' },
	billingAddressTwo: { placeholder: 'Enter Address 2' },
	billingCountry: { placeholder: 'Enter Country' },
	billingState: { placeholder: 'Enter State' },
	billingCity: { placeholder: 'Enter City' },
	billingZipCode: { placeholder: 'Enter Zip Code' },
	billingPhoneNumber: { placeholder: 'Enter Phone Number', type: 'tel' },
	billingEmail: { placeholder: 'Enter Email', type: 'email' },
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
	})
);

interface FormModalProps {
	setModalOpen: (value: React.SetStateAction<boolean>) => void;
	open: boolean;
	type: 'create' | 'edit';
}

const FormModal: React.FC<FormModalProps> = ({ setModalOpen, open, type }) => {
	const { profiles, changeData } = useSettings();
	const { currentProfile, createdProfiles } = profiles;
	const classes = useStyles();

	const editType = type === 'edit' && currentProfile;

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
		<Formik
			initialValues={initialValues}
			validate={validate}
			onSubmit={values => {
				editType
					? changeData(
							'profiles',
							'createdProfiles',
							createdProfiles.map(profile =>
								profile.id === values.id ? values : profile
							)
					  )
					: changeData('profiles', 'createdProfiles', [...createdProfiles, values]);
			}}>
			{({
				submitForm,
				setValues,
				resetForm,
				isValid,
				isSubmitting,
			}: FormikProps<Profile>) => (
				<>
					<Dialog
						maxWidth='md'
						open={open}
						onClose={() => setModalOpen(false)}
						aria-labelledby='simple-modal-title'
						aria-describedby='simple-modal-description'>
						<DialogTitle>
							<Typography variant='h4'>{editType ? 'Edit' : 'Create'} Profile</Typography>
						</DialogTitle>
						<DialogContent className={classes.modalRoot}>
							<Form>
								<Typography variant='h5'>Shipping</Typography>
								<Grid container>
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
										<Typography variant='h5'>Billing</Typography>
										<Grid container>
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
									if (isValid && !isSubmitting) setModalOpen(false);
								}}
								color='primary'
								variant='contained'>
								{editType ? 'Edit' : 'Create'} Profile
							</Button>
						</DialogActions>
					</Dialog>
				</>
			)}
		</Formik>
	);
};

export default FormModal;
