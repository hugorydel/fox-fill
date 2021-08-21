import { FormControl, MenuItem, Select } from '@material-ui/core';
import useSettings from '../../providers/settings';

const ProfileSelect: React.FC = () => {
	const { profilesPage, changeData } = useSettings();
	const { createdProfiles, currentProfile } = profilesPage;
	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		changeData(
			'profilesPage',
			'currentProfile',
			createdProfiles.filter(item => item.id === event.target.value)[0]
		);
	};

	return (
		<FormControl style={{ width: '200px', margin: 0 }}>
			<Select
				inputProps={{ 'aria-label': 'Without label' }}
				labelId='select-profile-label'
				variant='outlined'
				id='select-profile'
				value={currentProfile?.id || 'Select Profile'}
				onChange={handleChange}>
				<MenuItem value='Select Profile'>Choose Profile</MenuItem>
				{createdProfiles.map(profile => (
					<MenuItem key={profile.id} value={profile.id}>
						{profile.shippingProfileTitle}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default ProfileSelect;
