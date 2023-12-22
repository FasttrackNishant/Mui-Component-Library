import { Typography } from '@mui/material';
export const MuiTypo = () => {
	return (
		<div>
			<Typography variant="h1"> H1 Heading</Typography>
			<Typography variant="h2"> H2 Heading</Typography>
			<Typography variant="h3"> H3 Heading</Typography>
			<Typography variant="h4"> H4 Heading</Typography>
			<Typography variant="h4" component="h1" gutterBottom >
				{' '}
				H4 h1 Heading
			</Typography>
			<Typography variant="h5"> H5 Heading</Typography>

			<Typography variant="subtitle1"> This is subtitle 1</Typography>
			<Typography variant="subtitle2"> Subtitle 2 is here</Typography>

			<Typography variant="body1"> Body one is here</Typography>
			<Typography variant="body2"> Body two is here</Typography>
		</div>
	);
};
