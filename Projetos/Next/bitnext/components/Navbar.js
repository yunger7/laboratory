import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { MonetizationOn } from "@material-ui/icons";

const useStyles = makeStyles({
	logo: {
		marginRight: 6,
		display: "flex",
		flexGrow: 1,
	},
	logoIcon: {
		marginRight: 18,
	},
});

const Navbar = () => {
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar>
				<div className={classes.logo}>
					<MonetizationOn fontSize="large" className={classes.logoIcon} />
					<Typography component="h1" variant="h6">
						BitNext
					</Typography>
				</div>
        <Link href="/about">
				  <Button color="inherit">About</Button>
        </Link>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
