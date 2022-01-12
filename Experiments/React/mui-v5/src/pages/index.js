import { useState } from "react";
import {
	Box,
	Typography,
	Button,
	Container,
	Divider,
	Paper,
	Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomComponent = styled("div")(({ theme }) => ({
	width: 150,
	height: 75,
	padding: theme.spacing(2),
	borderRadius: theme.shape.borderRadius,
	backgroundColor: theme.palette.primary.dark,
	color: theme.palette.getContrastText(theme.palette.primary.dark),
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontWeight: theme.typography.fontWeightMedium,
	textTransform: "uppercase",
}));

function Item({ sx = [] }) {
	return (
		<Paper
			square
			variant="outlined"
			elevation={0}
			sx={[
				{
					minHeight: 100,
					p: 2,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					fontWeight: "bold",
					typography: "h6",
				},
				...(Array.isArray(sx) ? sx : [sx]),
			]}
		>
			Hello!
		</Paper>
	);
}

export default function Home() {
	const [state, setState] = useState(false);

	function handleClick() {
		setState(state => !state);
	}

	return (
		<Container maxWidth="lg" sx={{ mb: 8, mt: 2 }}>
			<Typography gutterBottom variant="h2" align="center">
				Hello MUI v5!
			</Typography>
			<Typography variant="body2" sx={{ marginBottom: 2 }}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto
				eum cumque ad esse commodi dolorem temporibus nesciunt necessitatibus
				voluptas? Adipisci fuga similique praesentium accusantium. Ullam eos
				perferendis voluptatum quae? Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Soluta vitae omnis exercitationem, autem beatae
				nostrum? Libero temporibus tempora nam ab mollitia voluptas quo itaque
				saepe veritatis, commodi id, asperiores debitis?
			</Typography>
			<Typography variant="body2" sx={{ mb: 2 }}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto
				eum cumque ad esse commodi dolorem temporibus nesciunt necessitatibus
				voluptas? Adipisci fuga similique praesentium accusantium. Ullam eos
				perferendis voluptatum quae? Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Soluta vitae omnis exercitationem, autem beatae
				nostrum? Libero temporibus tempora nam ab mollitia voluptas quo itaque
				saepe veritatis, commodi id, asperiores debitis?
			</Typography>
			<Divider />
			<Button
				variant="contained"
				color="secondary"
				onClick={handleClick}
				sx={{ my: 2 }}
			>
				Click me!
			</Button>
			<Box
				sx={{
					width: {
						sm: "100%",
						md: 500,
						lg: 1 / 4,
					},
					height: 100,
					bgcolor: "primary.main",
					transition: "box-shadow .2s ease-in",
					cursor: "pointer",
					":hover": { boxShadow: 4 },
				}}
			/>
			<Box
				sx={[
					{
						width: 100,
						height: 100,
						my: 5,
						bgcolor: "secondary.main",
						transition: "background-color 150ms ease-in-out",
					},
					state && {
						bgcolor: theme => theme.palette.primary.main,
					},
				]}
			/>
			<Divider sx={{ mb: 2 }} />
			<Box
				sx={{
					display: "grid",
					gridTemplateRows: "repeat(2, 1fr)",
					gridTemplateColumns: "repeat(3, 1fr)",
					rowGap: 2,
					columnGap: 4,
				}}
			>
				<Item sx={{ color: "success.main" }} />
				<Item sx={{ bgcolor: "info.main" }} />
				<Item />
				<Item />
				<Item />
				<Item />
			</Box>
			<Divider sx={{ my: 2 }} />
			<Box
				sx={{
					bgcolor: "error.main",
					width: 200,
					height: 100,
					mx: "auto",
					// borderColor: "error.dark",
					borderRadius: 1,
				}}
			/>
			<CustomComponent>Woah!</CustomComponent>
			<Divider sx={{ my: 2 }} />
			<Stack direction="row" justifyContent="space-between" spacing={2}>
				<Item />
				<Item />
				<Item />
			</Stack>
		</Container>
	);
}
