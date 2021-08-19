import { Grid, Typography, TextField, GridSize, makeStyles } from '@material-ui/core';
import useSettings from '../../providers/settings';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

interface SettingsContentInputProps {
	settings: any;
	itemName: string;
}
const useStyles = makeStyles({
	settingsButton: {
		width: `100%`,
		height: '100%',
	},
});

const SettingsContentInput: React.FC<SettingsContentInputProps> = ({
	settings,
	itemName,
}) => {
	const { userSettings, changeData } = useSettings();
	const theme = useTheme();

	const matchesSmallView = useMediaQuery(theme.breakpoints.up('sm'));
	const classes = useStyles();

	return 'heading' in settings ? (
		<Grid style={{ fontWeight: 'bold', padding: '20px 0 10px 0' }} item xs={12} sm={12}>
			<Typography variant='h5'>{settings.title}</Typography>
		</Grid>
	) : (
		<Grid container xs={12} sm={settings.containerSize || 12}>
			<Grid style={{ padding: '10px 0 10px 0' }} item xs={12} sm={12}>
				<Typography variant='h6'>{settings.title}</Typography>
			</Grid>
			<Grid item xs={12} sm={settings.textFieldSize || 12}>
				<TextField
					fullWidth
					autoComplete='on'
					inputProps={{ maxLength: settings.maxLength || 50 }}
					variant='outlined'
					placeholder={settings.placeholder}
					type={settings.type}
					value={userSettings[itemName as keyof typeof userSettings]}
					onChange={e =>
						changeData(
							'userSettings',
							itemName as keyof typeof userSettings,
							e.target.value
						)
					}
				/>
			</Grid>
			{settings.button && (
				<Grid
					style={{ paddingLeft: matchesSmallView ? '10px' : '0' }}
					item
					xs={4}
					sm={((12 - parseInt(settings.textFieldSize)) as GridSize) || 6}>
					{settings.button}
				</Grid>
			)}
		</Grid>
	);
};

export default SettingsContentInput;
