// import { makeStyles } from '@material-ui/core/styles';
import { Select } from '@material-ui/core';
import { useState } from 'react';

const ProfileSelect: React.FC = () => {
	const [profile, setProfile] = useState(10);
	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setProfile(event.target.value as number);
	};

	return (
		<Select
			native
			labelId='select-profile-label'
			id='select-profile'
			value={profile}
			onChange={handleChange}>
			<option value={10}>Ten</option>
			<option value={20}>Twenty</option>
			<option value={30}>Thirty</option>
		</Select>
	);
};

export default ProfileSelect;
