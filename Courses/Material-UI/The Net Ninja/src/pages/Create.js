import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	
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
			>
				Create a New Note
			</Typography>

			<Button
				type="submit"
				variant="contained"
				color="primary"
				endIcon={<KeyboardArrowRightIcon />}
				onClick={() => console.log("You clicked me!")}
			>
				Submit
			</Button>
		</Container>
	);
}
