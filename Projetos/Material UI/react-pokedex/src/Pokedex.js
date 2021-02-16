import { useState, useEffect } from "react";
import {
	AppBar,
	Toolbar,
	Grid,
	Card,
	CardMedia,
	CardContent,
	CircularProgress,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { toFirstCharUppercase } from "./constants";
import axios from "axios";

const useStyles = makeStyles({
	pokedexContainer: {
		padding: "20px 50px",
	},
	cardMedia: {
		margin: "auto",
	},
	cardContent: {
		textAlign: "center",
	},
});

const Pokedex = ({ history }) => {
	const classes = useStyles();
	const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => {
        const results = res.data.results;
        const newPokemonData = {};
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
          }
        })
        setPokemonData(newPokemonData);
      });
  }, []);

	const getPokemonCard = (pokemonId) => {
		// console.log(pokemonData[`${pokemonId}`]);
		const { id, name, sprite } = pokemonData[pokemonId];

		return (
			<Grid item key={pokemonId} xs={12} sm={4}>
				<Card onClick={() => history.push(`/${pokemonId}`)}>
					<CardMedia
						className={classes.cardMedia}
						image={sprite}
						style={{ width: "130px", height: "130px" }}
					/>
					<CardContent className={classes.cardContent}>
						<Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
					</CardContent>
				</Card>
			</Grid>
		);
	};

	return (
		<>
			<AppBar position="static">
				<Toolbar></Toolbar>
			</AppBar>
			{pokemonData ? (
				<Grid container spacing={2} className={classes.pokedexContainer}>
					{Object.keys(pokemonData).map((pokemonId) =>
						getPokemonCard(pokemonId)
					)}
				</Grid>
			) : (
				<CircularProgress />
			)}
		</>
	);
};

export default Pokedex;
