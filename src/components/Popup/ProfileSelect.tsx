// import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
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
		<FormControl style={{ width: '200px' }}>
			<InputLabel id='demo-customized-select-label'>Selected Profile</InputLabel>
			<Select
				labelId='select-profile-label'
				id='select-profile'
				value={currentProfile?.id || ''}
				onChange={handleChange}>
				<MenuItem value=''>None</MenuItem>
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
