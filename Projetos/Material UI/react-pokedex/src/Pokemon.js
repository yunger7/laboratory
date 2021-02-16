import { useState } from "react";
import { Typography, Link, CircularProgress, Button } from "@material-ui/core";
import mockData from "./mockData";
import { toFirstCharUppercase } from "./constants";

const Pokemon = (props) => {
  const pokemonId = props.match.params.pokemonId;
  const [pokemon, setPokemon] = useState(mockData[`${pokemonId}`])

  const generatePokemonJSX = () => {
    const { name, id, species, height, weight, types } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

    return (
      <>
        <Typography variant="h1">
          {`${id}. ${toFirstCharUppercase(name)}`}
        </Typography>
        <img style={{ width: '300px', height: '300px' }} src={fullImageUrl} alt="Pokemon"/>
        <Typography variant="h3">Pokemon Info</Typography>
        <Typography>{`Species: ${species.name}`}</Typography>
        <Typography>{`Height: ${height}`}</Typography>
        <Typography>{`Weight: ${weight}`}</Typography>
        <Typography variant="h6">Types:</Typography>
        {types.map(typeInfo => {
          const name = typeInfo.type.name;
          return <Typography key={name}>{ toFirstCharUppercase(name) }</Typography>
        })}
      </>
    )
  }

  return (
    <>
      { generatePokemonJSX() }
    </>
  );
}
 
export default Pokemon;