import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	button: {
		fontSize: 60,
		backgroundColor: "violet",
		"&:hover": {
			backgroundColor: "blue",
		},
	},
	title: {
		textDecoration: "underline",
		marginBottom: 20,
	},
});

export default function Create() {
	const classes = useStyles();

	return (
		<Container>
			<Typography
				variant="h6"
				color="textSecondary"
				component="h2"
				gutterBottom
        className={classes.title}
			>
				Create a New Note
			</Typography>

			<Button
				type="submit"
				variant="contained"
				color="secondary"
				endIcon={<KeyboardArrowRightIcon />}
				className={classes.button}
				onClick={() => console.log("You clicked me!")}
			>
				Submit
			</Button>
		</Container>
	);
}
