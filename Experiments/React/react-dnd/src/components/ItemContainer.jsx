import { Card, Typography } from "@mui/material";
import { useDrop } from "react-dnd";

export function ItemContainer({ children, handleRemoveItem }) {
	const [{ isOver }, dropRef] = useDrop({
		accept: "property_item",
		drop: handleRemoveItem,
		collect: monitor => ({
			isOver: monitor.isOver(),
		}),
	});

	return (
		<Card
			ref={dropRef}
			variant="outlined"
			sx={{ px: 2, py: 1, width: 1, height: 1 }}
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
