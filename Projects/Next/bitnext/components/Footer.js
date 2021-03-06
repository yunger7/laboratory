import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles({
	footer: {
		textAlign: "center",
		padding: 30,
	},
});

const Footer = () => {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Typography variant="overline" display="block">
				&copy; Copyright {new Date().getFullYear()} •{" "}
        <a href="https://github.com/yunger7" target="_blank" rel="noopener noreferrer">
				  <Button color="primary">yunger</Button>
        </a>
			</Typography>
		</footer>
	);
};

export default Footer;
