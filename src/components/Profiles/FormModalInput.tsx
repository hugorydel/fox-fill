import { Grid, TextField, Typography } from '@material-ui/core';
import { FastField, FastFieldProps } from 'formik';
import { Fragment } from 'react';
import InputMask from 'react-input-mask';

interface FormModalInputProps {
	itemName: string;
	settings: any;
}

const FormModalInput: React.FC<FormModalInputProps> = ({ itemName, settings }) => {
	return (
		<Grid item xs={12} sm={settings.sm || 6}>
			<Typography
				variant='h6'
				style={{ fontWeight: 400, paddingTop: 8, paddingBottom: 8 }}>
				{settings.title}
			</Typography>
			<FastField name={itemName}>
				{({ field, form, meta }: FastFieldProps<any>) => (
					<Fragment>
						{'mask' in settings ? (
							<InputMask
								mask={settings.mask}
								{...field}
								onChange={e =>
									form.setFieldValue(itemName, e.target.value.replace(/\D/g, ''))
								}>
								{(inputProps: any) => (
									<TextField
										fullWidth
										variant='outlined'
										error={!!meta.touched && !!meta.error}
										placeholder={settings.placeholder}
										{...inputProps}
									/>
								)}
							</InputMask>
						) : (
							<TextField
								size='medium'
								fullWidth
								autoComplete='on'
								inputProps={{ maxLength: settings.maxLength || 50 }}
								variant='outlined'
								error={!!meta.touched && !!meta.error}
								placeholder={settings.placeholder}
								type={settings.type}
								{...field}
							/>
						)}
						{!!meta.touched && !!meta.error && (
							<div style={{ color: '#F44336' }}>{meta.error}</div>
						)}
					</Fragment>
				)}
			</FastField>
		</Grid>
	);
};

export default FormModalInput;
