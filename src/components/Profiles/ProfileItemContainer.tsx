import {
	ClickAwayListener,
	Grow,
	IconButton,
	makeStyles,
	MenuItem,
	MenuList,
	Paper,
	Popper,
	Theme,
} from '@material-ui/core';
import useSettings from '../../providers/settings';
import { Profile } from '../../providers/settings/types';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';

interface ProfileItemContainerProps {
	profile: Profile;
	openFormOfType: (type: 'create' | 'edit') => void;
}

const useStyles = makeStyles((theme: Theme) => ({
	profileItem: {
		height: 80,
		display: 'flex',
		alignItems: 'center',
		padding: '0 20px 0 20px',
	},
	currentProfileItem: { background: 'red' },
	popoverContent: {
		padding: theme.spacing(2),
	},
}));

const ProfileItemContainer: React.FC<ProfileItemContainerProps> = ({
	profile,
	openFormOfType,
}) => {
	const classes = useStyles();

	const { profiles, changeData } = useSettings();
	const { currentProfile, createdProfiles } = profiles;

	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLButtonElement>(null);

	const handleToggle = () => setOpen(prevOpen => !prevOpen);

	const handleClose = (event: React.MouseEvent<EventTarget>) => {
		if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement))
			return;
		setOpen(false);
	};

	const handleEdit = (event: React.MouseEvent<EventTarget>) => {
		handleClose(event);
		openFormOfType('edit');
	};
	const handleDelete = () => {
		changeData('profiles', 'currentProfile', undefined);
		changeData(
			'profiles',
			'createdProfiles',
			createdProfiles.filter(savedProfile => savedProfile.id !== profile.id)
		);
	};

	function handleListKeyDown(event: React.KeyboardEvent) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current && !open) anchorRef.current!.focus();
		prevOpen.current = open;
	}, [open]);

	return (
		<Paper
			variant='outlined'
			onClick={() => changeData('profiles', 'currentProfile', profile)}
			className={`${classes.profileItem} ${
				profile.id === currentProfile?.id ? classes.currentProfileItem : ''
			}`}>
			Profile Title {profile.shippingProfileTitle}
			{currentProfile?.id === profile.id ? (
				<>
					<IconButton
						ref={anchorRef}
						aria-controls={open ? 'menu-list-grow' : undefined}
						aria-haspopup='true'
						onClick={handleToggle}>
						<MoreVertIcon />
					</IconButton>
					<Popper
						open={open}
						anchorEl={anchorRef.current}
						role={undefined}
						transition
						disablePortal>
						{({ TransitionProps, placement }) => (
							<Grow
								{...TransitionProps}
								style={{
									transformOrigin: placement === 'bottom' ? 'center top' : 'right bottom',
								}}>
								<Paper>
									<ClickAwayListener onClickAway={handleClose}>
										<MenuList
											autoFocusItem={open}
											id='menu-list-grow'
											onKeyDown={handleListKeyDown}>
											<MenuItem onClick={handleEdit}>Edit</MenuItem>
											<MenuItem onClick={handleDelete}>Delete</MenuItem>
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
				</>
			) : undefined}
		</Paper>
	);
};

export default ProfileItemContainer;
