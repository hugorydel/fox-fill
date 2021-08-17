import { Grid, TextField, Typography } from '@material-ui/core';
import { FastField, FastFieldProps } from 'formik';
import { Fragment } from 'react';
import formatObjectKey from '../../utils/formatObjectKey';
import InputMask from 'react-input-mask';

interface FormModalInputProps {
	itemName: string;
	settings: any;
}

const FormModalInput: React.FC<FormModalInputProps> = ({ itemName, settings }) => {
	return (
		<Grid item xs={12} sm={settings.sm || 6}>
			<Typography variant='h6'>{settings.name || formatObjectKey(itemName)}</Typography>
			<FastField name={itemName}>
				{({ field, form, meta }: FastFieldProps<any>) => (
					<Fragment>
						{'mask' in settings ? (
							<InputMask
								mask={settings.mask}
								{...field}
								// Future -- remove both empty onBlur's and find out how you can fix the validate before *actually* touched" - It's related to Chrome's autoComplete but don't know how to fix it.
								onBlur={() => {}}
								onChange={e =>
									form.setFieldValue(itemName, e.target.value.replace(/\D/g, ''))
								}>
								{(inputProps: any) => (
									<TextField
										fullWidth
										variant='outlined'
										autoComplete={settings.autoComplete || 'on'}
										error={!!meta.touched && !!meta.error}
										type={settings.type}
										placeholder={settings.placeholder}
										{...inputProps}
									/>
								)}
							</InputMask>
						) : (
							// 	<InputMask mask={settings.mask} id={itemName} {...field}>
							// 	{(inputProps: any) => (
							// 		<TextField
							// 			size='medium'
							// 			variant='outlined'
							// 			fullWidth
							// 			autoComplete={settings.autoComplete || 'on'}
							// 			inputProps={{ maxLength: settings.maxLength || 50 }}
							// 			error={!!meta.touched && !!meta.error}
							// 			placeholder={settings.placeholder}
							// 			type={settings.type || 'text'}
							// 			{...inputProps}
							// 		/>
							// 	)}
							// </InputMask>

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
								onBlur={() => {}}
								// onChange={() => {}}
							/>
						)}
						{!!meta.touched && !!meta.error && <div>{meta.error}</div>}
					</Fragment>
				)}
			</FastField>
		</Grid>
	);
};

export default FormModalInput;
