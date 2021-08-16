import { Grid, TextField, Typography } from '@material-ui/core';
import { FastField, FastFieldProps } from 'formik';
import { Fragment } from 'react';
import formatObjectKey from '../../utils/formatObjectKey';
import InputMask from 'react-input-mask';

interface FormItemProps {
	itemName: string;
	settings: any;
}

const FormItem: React.FC<FormItemProps> = ({ itemName, settings }) => {
	return (
		<Grid item xs={12} sm={6}>
			<Typography variant='h6'>{formatObjectKey(itemName)}</Typography>
			<FastField name={itemName}>
				{({ field, form, meta }: FastFieldProps<any>) => (
					<Fragment>
						{console.log(meta.touched, meta.error)}
						{'mask' in settings ? (
							// To find out more about this component https://blog.logrocket.com/formatting-form-inputs-with-cleave-js-and-react/
							<InputMask
								mask={settings.mask}
								{...field}
								onChange={e =>
									form.setFieldValue(itemName, e.currentTarget.value.replace(/\D/g, ''))
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
							/>
						)}
						{!!meta.touched && !!meta.error && <div>{meta.error}</div>}
					</Fragment>
				)}
			</FastField>
		</Grid>
	);
};

export default FormItem;
