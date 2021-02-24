import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import CryptoCard from "../components/CryptoCard";

const useStyles = makeStyles({
	title: {
		textAlign: "center",
		marginTop: 20,
	},
	subTitle: {
		textAlign: "center",
	},
	main: {
		marginTop: 24,
	},
});

export default function Home({ coins }) {
	const classes = useStyles();
  console.log(coins);

	return (
		<div>
			<Head>
				<title>BitNext</title>
			</Head>
			<div className="title">
				<Typography variant="h4" className={classes.title}>
					Welcome do BitNext!
				</Typography>
				<Typography className={classes.subTitle}>
					Check your crypto prices
				</Typography>
			</div>
			<Grid container spacing={3} component="main" className={classes.main}>
        {coins.forEach(coin => (
          <Grid item xs={4}>
            <CryptoCard coin={coin} />
          </Grid>
        ))}
			</Grid>
		</div>
	);
};

export const getStaticProps = async () => {
  const res = await fetch('https://api.coinlore.net/api/tickers/');
  const json = await res.json();

  // filter results
  const wantedCoins = [90, 80, 257, 1, 2, 33830];
  const data = json.data.filter(coin => wantedCoins.includes(parseInt(coin.id)));

  return {
    props: {
      coins: data
    }
  }
}
