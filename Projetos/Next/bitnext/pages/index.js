import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import CryptoCard from "../components/CryptoCard";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    marginTop: 20,
  },
  subTitle: {
    textAlign: "center",
  }
});

export default function Home() {
  const classes = useStyles();

	return (
		<div>
			<Head>
				<title>BitNext</title>
			</Head>
      <div className="title">
        <Typography variant="h4" className={classes.title}>Welcome do BitNext!</Typography>
        <Typography className={classes.subTitle}>Check your crypto prices</Typography>
      </div>
			<main>
        <CryptoCard />
			</main>
		</div>
	);
}
