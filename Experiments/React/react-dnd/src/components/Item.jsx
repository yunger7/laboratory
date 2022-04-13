import { useRef } from "react";

import { Card, Box, Typography, Avatar, IconButton } from "@mui/material";
import { Settings as SettingsIcon } from "@mui/icons-material";
import { useDrag, useDrop } from "react-dnd";

export function Item({ item, index, listType, changeIndex }) {
	const [{ opacity }, dragRef] = useDrag({
		type: "property_item",
		item: { ...item, index },
		collect: monitor => ({
			opacity: monitor.isDragging() ? 0.25 : 1,
		}),
	});

	const [spec, dropRef] = useDrop({
		accept: "property_item",
		hover: (item, monitor) => {
			const dragIndex = item.index;
			const hoverIndex = index;
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top;

			if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
			if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

			changeIndex(dragIndex, hoverIndex, listType);
			item.index = hoverIndex;
		},
	});

	const ref = useRef(null);
	const dragDropRef = dragRef(dropRef(ref));

	return (
		<Card
			ref={dragDropRef}
			variant="outlined"
			sx={{ p: 1, my: 2, display: "flex", alignItems: "center", opacity }}
		>
			<Box
				sx={{
					mr: 1,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Avatar />
			</Box>
			<Box
				sx={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "flex-start",
				}}
			>
				<Typography
					noWrap
					component="div"
					variant="body1"
					sx={{ width: 1, fontWeight: "fontWeightBold" }}
				>
					{item.name}
				</Typography>
				<Typography noWrap variant="caption" sx={{ width: 1 }}>
					{item.type}
				</Typography>
			</Box>
			<IconButton>
				<SettingsIcon />
			</IconButton>
		</Card>
	);
}
