import { Fragment, useState } from 'react';
import { Button, Grid, makeStyles, TextField } from '@material-ui/core';

import useSettings from '../../providers/settings';
import FormModal from './FormModal';
import ProfileItemContainer from './ProfileItemContainer';

const useStyles = makeStyles(() => ({
	createProfileButton: {
		width: `100%`,
		height: '100%',
	},
}));

const ProfilesContent: React.FC = () => {
	const classes = useStyles();

	const { data } = useSettings();
	const { profilesPage } = data;
	const { createdProfiles } = profilesPage;

	const [query, setQuery] = useState('');
	const [modalOpen, setModalOpen] = useState(false);
	const [modalType, setModalType] = useState<'create' | 'edit'>('create');

	const openFormOfType = (type: 'create' | 'edit') => {
		setModalOpen(true);
		setModalType(type);
	};

	return (
		<Fragment>
			{modalOpen && (
				<FormModal open={modalOpen} setModalOpen={setModalOpen} type={modalType} />
			)}
			<Grid container spacing={1}>
				<Grid xs={12} sm={9} item>
					<TextField
						fullWidth
						variant='outlined'
						placeholder='Search Profile Name'
						value={query}
						type='text'
						onChange={e => setQuery(e.target.value)}
					/>
				</Grid>
				<Grid xs={6} sm={3} item>
					<Button
						className={classes.createProfileButton}
						onClick={() => openFormOfType('create')}
						variant='contained'
						color='primary'>
						+ Create Profile
					</Button>
				</Grid>
			</Grid>
			{createdProfiles
				.filter(item =>
					item.shippingProfileTitle.toLowerCase().includes(query.toLowerCase())
				)
				.map(profile => (
					<ProfileItemContainer
						key={profile.id}
						profile={profile}
						openFormOfType={openFormOfType}
					/>
				))}
		</Fragment>
	);
};

export default ProfilesContent;
