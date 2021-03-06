import Head from "next/head";
import CryptoCard from "../components/CryptoCard";

import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const cardVariants = {
	initial: {
		opacity: 0,
		y: 150,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
};

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

export default function Home({ coins, totalCoins }) {
	const classes = useStyles();

	return (
		<div>
			<Head>
				<title>BitNext</title>
			</Head>
			<div className="title">
				<Typography variant="h4" className={classes.title}>
					Welcome do BitNext!
				</Typography>
				<Typography variant="subtitle1" className={classes.subTitle}>
					Here are 6 out of the {totalCoins} cryptos in existence.
				</Typography>
			</div>
			<Grid container spacing={3} component="main" className={classes.main}>
				{coins.map((coin, index) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						key={coin.id}
						component={motion.div}
						variants={cardVariants}
						initial="initial"
						animate="animate"
						transition={{ delay: parseFloat(`0.${index}`) }}
					>
						<CryptoCard coin={coin} />
					</Grid>
				))}
			</Grid>
		</div>
	);
}

export const getStaticProps = async () => {
	const coinsRes = await fetch("https://api.coinlore.net/api/tickers/");
	const coinsJson = await coinsRes.json();

	// filter results
	const wantedCoins = [90, 80, 257, 1, 2, 33830];
	const coinsData = coinsJson.data.filter(coin =>
		wantedCoins.includes(parseInt(coin.id))
	);

	const globalRes = await fetch("https://api.coinlore.net/api/global/");
	const globalJson = await globalRes.json();
	const totalCoins = globalJson[0].coins_count;

	return {
		props: {
			coins: coinsData,
			totalCoins,
		},
		revalidate: 30,
	};
};
