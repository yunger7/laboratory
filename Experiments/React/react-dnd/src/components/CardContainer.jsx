import { Card, Typography } from "@mui/material";
import { useDrop } from "react-dnd";

export function CardContainer({ children, handleAddItem }) {
	const [{ isOver }, dropRef] = useDrop({
		accept: "property_item",
		drop: handleAddItem,
		collect: monitor => ({
			isOver: monitor.isOver(),
		}),
	});

	return (
		<Card
			ref={dropRef}
			elevation={3}
			sx={{
				width: 1,
				height: 1,
				py: 1,
				px: 2,
				maxWidth: { xs: 350, sm: 375 },
				minHeight: { xs: 450, sm: 475 },
			}}
		>
			{children}
			{isOver && (
				<Typography variant="body2" align="center">
					Drop here
				</Typography>
			)}
		</Card>
	);
}
