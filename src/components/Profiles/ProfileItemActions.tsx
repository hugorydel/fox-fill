import {
	ClickAwayListener,
	Grow,
	IconButton,
	MenuItem,
	MenuList,
	Paper,
	Popper,
	makeStyles,
	Theme,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React, { Fragment, useState, useRef } from 'react';
import useSettings from '../../providers/settings';
import { Profile } from '../../providers/settings/types';

interface ProfileItemActionsProps {
	profile: Profile;
	openFormOfType: (input: 'create' | 'edit') => void;
}

// const useStyles = makeStyles((theme: Theme) => ({
// 	popoverContent: {
// 		padding: theme.spacing(2),
// 	},
// }));

const ProfileItemActions: React.FC<ProfileItemActionsProps> = ({
	openFormOfType,
	profile,
}) => {
	const [open, setOpen] = useState(false);
	const anchorRef = useRef<HTMLButtonElement>(null);
	// const classes = useStyles();

	const { data, setData } = useSettings();
	const { profilesPage } = data;
	const { createdProfiles } = profilesPage;

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
		setData({
			parentKey: 'profilesPage',
			childKey: 'currentProfile',
			newValue: undefined,
		});
		setData({
			parentKey: 'profilesPage',
			childKey: 'createdProfiles',
			newValue: createdProfiles.filter(savedProfile => savedProfile.id !== profile.id),
		});
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
		<>
			<IconButton
				ref={anchorRef}
				aria-controls={open ? 'menu-list-grow' : undefined}
				aria-haspopup='true'
				onClick={handleToggle}>
				<MoreVertIcon fontSize='small' />
			</IconButton>
			<Popper
				style={{ zIndex: 1000 }}
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
	);
};

export default ProfileItemActions;
