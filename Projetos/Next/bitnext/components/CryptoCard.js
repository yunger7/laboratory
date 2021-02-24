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

const CryptoCard = () => {
	const classes = useStyles();

	return (
		<Card>
      <CardActionArea>
        <CardMedia
          className={classes.cardMedia}
          image="/ethereum.png"
          title="Ethereum"
        />
        <CardContent>
          <Typography variant="h6">Crypto name</Typography>
          <Typography>$99999.99</Typography>
          <Typography>-1,25% (24h)</Typography>
          <Typography>-1,25% (7h)</Typography>
          <Typography>-1,25% (1h)</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">Learn More</Button>
      </CardActions>
		</Card>
	);
};

export default CryptoCard;
