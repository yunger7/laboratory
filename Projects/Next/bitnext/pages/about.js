import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Divider, Tooltip, Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
	},
	title: {
		textAlign: "center",
		marginTop: 40,
	},
	paper: {
		marginTop: "5%",
		padding: "1rem",
		maxWidth: "1000px",
		margin: "0 auto",
	},
	text: {
		margin: "1rem 0",
	},
	button: {
		maxWidth: "200px",
    margin: "5% auto 0",
	},
});

const About = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography variant="h4" className={classes.title}>
				What is this all about?
			</Typography>
			<Tooltip
				title="Tip: Try tapping this element!"
				placement="bottom"
				whileTap={{ scale: 0.9 }}
				arrow
			>
				<Paper
					className={classes.paper}
					elevation={3}
					component={motion.div}
				>
					<Typography variant="body1" className={classes.text}>
						This project was made with the intention of testing some
						technologies, such as: React, Next.js, Material UI, Framer Motion
						and deploying to Vercel.
					</Typography>
					<Divider />
					<Typography variant="body1" className={classes.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex
						eligendi, ullam tempore tempora incidunt neque quam explicabo
						reprehenderit consequatur vel provident sequi architecto odio optio.
						Ullam sapiente unde excepturi. Lorem ipsum, dolor sit amet
						consectetur adipisicing elit. Facilis veritatis exercitationem
						reiciendis sed quasi dicta adipisci, fugiat unde itaque dolor
						molestias. Neque quidem alias porro aspernatur eligendi tempore
						praesentium ab.
					</Typography>
					<Typography variant="body1" className={classes.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex
						eligendi, ullam tempore tempora incidunt neque quam explicabo
						reprehenderit consequatur vel provident sequi architecto odio optio.
						Ullam sapiente unde excepturi. Lorem ipsum, dolor sit amet
						consectetur adipisicing elit. Facilis veritatis exercitationem
						reiciendis sed quasi dicta adipisci, fugiat unde itaque dolor
						molestias. Neque quidem alias porro aspernatur eligendi tempore
						praesentium ab.
					</Typography>
				</Paper>
			</Tooltip>
      <Link href="/">
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          startIcon={<ArrowBack />}
        >
          Go back
        </Button>
      </Link>
		</div>
	);
};

export default About;
