import { Fragment, useState } from 'react';
import { Button, Grid, makeStyles, TextField } from '@material-ui/core';

import useSettings from '../../providers/settings';
import FormModal from './FormModal';
import ProfileItemContainer from './ProfileItemContainer';

const useStyles = makeStyles(() => ({}));

const ProfilesContent: React.FC = () => {
	const classes = useStyles();

	const { profiles } = useSettings();
	const { createdProfiles } = profiles;

	const [query, setQuery] = useState('');
	const [modalOpen, setModalOpen] = useState(false);
	const [modalType, setModalType] = useState<'create' | 'edit'>('create');

	const openFormOfType = (type: 'create' | 'edit') => {
		setModalOpen(true);
		setModalType(type);
	};

	// console.log(
	// 	createdProfiles.filter(
	// 		profile => profile.shippingProfileTitle.toLowerCase().search(query) !== -1
	// 	)
	// );

	return (
		<Fragment>
			{modalOpen && (
				<FormModal open={modalOpen} setModalOpen={setModalOpen} type={modalType} />
			)}
			<Grid container>
				<Grid xs={12} sm={8} item>
					<TextField
						fullWidth
						variant='outlined'
						placeholder='Search Profile Name'
						value={query}
						type='text'
						onChange={e => setQuery(e.target.value)}
					/>
				</Grid>
				<Grid xs={4} item>
					<Button
						onClick={() => openFormOfType('create')}
						variant='contained'
						color='primary'>
						+ Create New Profile
					</Button>
				</Grid>
				<Grid xs={12} item>
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
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default ProfilesContent;
