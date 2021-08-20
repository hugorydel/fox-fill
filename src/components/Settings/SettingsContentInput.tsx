import {
	Grid,
	Typography,
	TextField,
	GridSize,
	makeStyles,
	createStyles,
	Theme,
} from '@material-ui/core';
import useSettings from '../../providers/settings';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

interface SettingsContentInputProps {
	settings: any;
	itemName: string;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		headings: {
			// color: theme.palette.primary.main,
			paddingTop: theme.spacing(2.7),
			paddingBottom: theme.spacing(1),
			fontWeight: 600,
		},
		labels: {
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1),
			fontWeight: 400,
		},
	})
);

const SettingsContentInput: React.FC<SettingsContentInputProps> = ({
	settings,
	itemName,
}) => {
	const { settingsPage, changeData } = useSettings();
	const theme = useTheme();

	const matchesSmallView = useMediaQuery(theme.breakpoints.up('sm'));
	const classes = useStyles();

	return 'heading' in settings ? (
		<Grid style={{ fontWeight: 'bold' }} item xs={12} sm={12}>
			<Typography className={classes.headings} variant='h5'>
				{settings.title}
			</Typography>
		</Grid>
	) : (
		<Grid
			direction='row'
			item
			container
			xs={12}
			sm={settings.containerSize || 12}
			spacing={settings.containerSize === 12 || !settings.containerSize ? 0 : 1}
			alignItems='flex-end'>
			<Grid item xs={12} sm={settings.textFieldSize || 12}>
				<Typography className={classes.labels} variant='h6'>
					{settings.title}
				</Typography>
				<TextField
					fullWidth
					autoComplete='on'
					inputProps={{ maxLength: settings.maxLength || 50 }}
					variant='outlined'
					placeholder={settings.placeholder}
					value={settingsPage[itemName as keyof typeof settingsPage]}
					onChange={e =>
						changeData(
							'settingsPage',
							itemName as keyof typeof settingsPage,
							e.target.value
						)
					}
				/>
			</Grid>
			{settings.button && (
				<Grid
					style={{ paddingLeft: matchesSmallView ? '10px' : '0' }}
					item
					xs={5}
					sm={((12 - parseInt(settings.textFieldSize)) as GridSize) || 6}>
					{settings.button}
				</Grid>
			)}
		</Grid>
	);
};

export default SettingsContentInput;
