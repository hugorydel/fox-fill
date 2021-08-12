import { useState } from 'react';
import useSettings from '../../providers/settings';
import ContentContainer from './ContentContainer';

const ProfileContent: React.FC = () => {
	const { profiles } = useSettings();
	const { currentProfile, createdProfiles } = profiles;
	const [state, setstate] = useState(initialState);

	return (
		<ContentContainer>
			<div>A</div>
		</ContentContainer>
	);
};

export default ProfileContent;
