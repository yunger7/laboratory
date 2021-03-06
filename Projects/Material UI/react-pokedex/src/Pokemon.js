import { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Link, CircularProgress, Button } from "@material-ui/core";
import { toFirstCharUppercase } from "./constants";

const Pokemon = (props) => {
	const pokemonId = props.match.params.pokemonId;
  const { history } = props;
	const [pokemon, setPokemon] = useState(undefined);

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
			.then((res) => {
        const { data } = res;
        setPokemon(data);
      })
      .catch(err => {
        setPokemon(false);
      });
	}, [pokemonId]);

	const generatePokemonJSX = () => {
		const { name, id, species, height, weight, types } = pokemon;
		const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

		return (
			<>
				<Typography variant="h1">
					{`${id}. ${toFirstCharUppercase(name)}`}
				</Typography>
				<img
					style={{ width: "300px", height: "300px" }}
					src={fullImageUrl}
					alt="Pokemon"
				/>
				<Typography variant="h3">Pokemon Info</Typography>
				<Typography>{`Species: ${species.name}`}</Typography>
				<Typography>{`Height: ${height}`}</Typography>
				<Typography>{`Weight: ${weight}`}</Typography>
				<Typography variant="h6">Types:</Typography>
				{types.map((typeInfo) => {
					const name = typeInfo.type.name;
					return (
						<Typography key={name}>{toFirstCharUppercase(name)}</Typography>
					);
				})}
			</>
		);
	};

	return (
		<>
			{pokemon === undefined && <CircularProgress />}
			{pokemon !== undefined && pokemon && generatePokemonJSX()}
			{pokemon === false && <Typography>Pokemon not found</Typography>}
			{pokemon !== undefined && (
				<Button variant="contained" onClick={() => history.push("/")}>
					Back to pokedex
				</Button>
			)}
		</>
	);
};

export default Pokemon;
