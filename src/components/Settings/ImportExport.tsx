import { ButtonGroup, Button } from '@material-ui/core';

interface ImportExportProps {}

const ImportExport: React.FC<ImportExportProps> = ({}) => {
	return (
		<ButtonGroup
			style={{ marginBottom: '30px' }}
			fullWidth
			variant='outlined'
			color='primary'>
			<Button>Import</Button>
			<Button>Export</Button>
		</ButtonGroup>
	);
};

export default ImportExport;
