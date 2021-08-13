import { useState } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';

import useSettings from '../../providers/settings';
import ContentContainer from './ContentContainer';
import FormModal from './FormModal';

const useStyles = makeStyles(() => ({
	content: {
		color: '#fff',
		display: 'flex',
		alignSelf: 'center',
		padding: '100px 100px 10px 100px',
	},
	profileItem: {},
	currentProfileItem: {},
}));

const ProfileContent: React.FC = () => {
	const classes = useStyles();
	const { profiles } = useSettings();
	const { currentProfile, createdProfiles } = profiles;
	const [searchParameter, setSearchParameter] = useState('');
	const [modalOpen, setModalOpen] = useState(false);
	const [modalType, setModalType] = useState<'create' | 'edit'>('create');

	const openFormOfType = (type: 'create' | 'edit') => {
		setModalOpen(true);
		setModalType(type);
	};

	return (
		<ContentContainer>
			<FormModal open={modalOpen} setModalOpen={setModalOpen} type={modalType} />
			<div>
				<TextField
					variant='outlined'
					placeholder='Search Profile Name'
					value={searchParameter}
					type='text'
					onChange={e => setSearchParameter(e.target.value)}
				/>
				<Button
					onClick={() => openFormOfType('create')}
					variant='contained'
					color='primary'>
					+ Create New Profile
				</Button>
				{createdProfiles.map(profile => (
					<div
						className={`${classes.profileItem} ${
							profile.id === currentProfile?.id ?? classes.currentProfileItem
						}`}>
						Profile Id {profile.id}
					</div>
				))}
			</div>
		</ContentContainer>
	);
};

export default ProfileContent;
