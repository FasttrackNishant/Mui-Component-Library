import { Stack, Button, IconButton, ButtonGroup } from '@mui/material';
import '../App.css';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export const ButtonsTypo = () => {
	return (
		<Stack>
			<Stack className="app" spacing={2} direction="row">
				<Button variant="text" href="https://google.com">
					Submit kardo
				</Button>
				<Button variant="contained">Container button</Button>
				<Button variant="outlined">Outlined Element</Button>
			</Stack>

			<Stack spacing={2} direction="row" display="block">
				<Button variant="contained" color="primary">
					Primary Button
				</Button>
				<Button
					variant="contained"
					color="secondary"
					size="small"
					disableElevation>
					Elevated Button
				</Button>
				<Button
					variant="contained"
					color="error"
					onClick={() => {
						console.log('button Clicked');
					}}>
					Clicked Button
				</Button>
				<Button variant="contained" color="info" size="large">
					Primary Button
				</Button>
			</Stack>

			<Stack spacing={4} direction="row" display="block">
				<Button
					variant="outlined"
					color="success"
					startIcon={<AccountBalanceIcon />}>
					Call Karo
				</Button>

				<IconButton color="warning" size="small">
					<AccountBalanceIcon />
				</IconButton>
			</Stack>

{/* Button Group */}
			<Stack direction="row">
				<ButtonGroup
					variant="outlined"
					orientation="vertical"
					size="small"
					color="info"
					aria-label="alignment button group">
					<Button>Left</Button>
					<Button>Middle</Button>
					<Button>Right</Button>
				</ButtonGroup>
			</Stack>

			{/* Toogle button */}
		</Stack>
	);
};
