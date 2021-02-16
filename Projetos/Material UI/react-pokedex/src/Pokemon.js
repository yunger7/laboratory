const Pokemon = (props) => {
  const pokemonId = props.match.params.pokemonId;

  return (
    <div>{`Pokemon #${pokemonId}`}</div>
  );
}
 
export default Pokemon;