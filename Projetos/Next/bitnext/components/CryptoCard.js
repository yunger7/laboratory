import { makeStyles } from "@material-ui/core/styles";
import {
	Typography,
  Button,
	Card,
	CardContent,
	CardMedia,
	CardActionArea,
  CardActions,
} from "@material-ui/core";

const useStyles = makeStyles({
	cardMedia: {
		height: 140,
	},
});

const CryptoCard = ({ coin }) => {
	const classes = useStyles();
  const { name, symbol, price_usd: price, percent_change_7d, percent_change_24h, percent_change_1h } = coin;

	return (
		<Card>
      <CardActionArea>
        <CardMedia
          className={classes.cardMedia}
          image={`/images/${name}.jpeg`}
          title={name}
        />
        <CardContent>
          <Typography variant="h6">{`${name} (${symbol})`}</Typography>
          <Typography>${price}</Typography>
          <Typography>{ percent_change_7d }% (7d)</Typography>
          <Typography>{ percent_change_24h }% (24h)</Typography>
          <Typography>{percent_change_1h}% (1h)</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button target="_blank" href={`https://www.google.com/search?q=${name}+crypto+coin`} size="small" color="primary">Learn More</Button>
      </CardActions>
		</Card>
	);
};

export default CryptoCard;
