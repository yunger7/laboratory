import { useState, useCallback } from "react";
import update from "immutability-helper";
import { Container, Typography, Divider, Grid } from "@mui/material";

import { Item } from "../components/Item";
import { CardContainer } from "../components/CardContainer";
import { ItemContainer } from "../components/ItemContainer";

const defaultItems = [
	{ id: 0, name: "Word", type: "Title" },
	{ id: 1, name: "Meaning", type: "Text" },
	{ id: 2, name: "Type", type: "Select" },
];

export default function Home() {
	const [selectedItems, setSelectedItems] = useState([]);
	const [availableItems, setAvailableItems] = useState(defaultItems);

	const handleAddItem = useCallback(item => {
		setSelectedItems(items =>
			items.find(i => i.id === item.id) ? items : [...items, item]
		);
		setAvailableItems(items => items.filter(i => i.id !== item.id));
	}, []);

	const handleRemoveItem = useCallback(item => {
		setSelectedItems(items => items.filter(i => i.id !== item.id));
		setAvailableItems(items =>
			items.find(i => i.id === item.id) ? items : [...items, item]
		);
	}, []);

	const changeIndex = useCallback(
		(dragIndex, hoverIndex, listType) => {
			if (listType === "available") {
				const dragItem = availableItems[dragIndex];
				const hoverItem = availableItems[hoverIndex];

				setAvailableItems(previousItems =>
					update(previousItems, {
						$splice: [
							[dragIndex, 1],
							[hoverIndex, 0, previousItems[dragIndex]],
						],
					})
				);
			} else if (listType === "selected") {
				const dragItem = selectedItems[dragIndex];
				const hoverItem = selectedItems[hoverIndex];

				setSelectedItems(previousItems =>
					update(previousItems, {
						$splice: [
							[dragIndex, 1],
							[hoverIndex, 0, previousItems[dragIndex]],
						],
					})
				);
			}
		},
		[selectedItems, availableItems]
	);

	return (
		<Container maxWidth="lg" sx={{ py: 2 }}>
			<Typography variant="h3" component="h1" align="center">
				React DND
			</Typography>
			<Divider sx={{ my: 2 }} />
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<ItemContainer handleRemoveItem={handleRemoveItem}>
						{availableItems.map((item, index) => (
							<Item
								listType="available"
								item={item}
								index={index}
								changeIndex={changeIndex}
								key={item.id}
							/>
						))}
					</ItemContainer>
				</Grid>
				<Grid
					item
					xs={8}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<CardContainer handleAddItem={handleAddItem}>
						{selectedItems.map((item, index) => (
							<Item
								listType="selected"
								item={item}
								index={index}
								changeIndex={changeIndex}
								key={item.id}
							/>
						))}
					</CardContainer>
				</Grid>
			</Grid>
		</Container>
	);
}
