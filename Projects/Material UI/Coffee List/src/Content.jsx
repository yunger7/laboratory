import { Grid } from "@material-ui/core";
import CoffeeCard from "./CoffeeCard";
import coffeeMakerList from './constants';

const Content = () => {

  const getCoffeeMakerCard = (coffeeMaker) => {
    return (
      <Grid item xs={12} sm={4}>
        <CoffeeCard {...coffeeMaker} />
      </Grid>
    )
  }

  return (
    <Grid container spacing={4}>
      { coffeeMakerList.map(coffeeMaker => getCoffeeMakerCard(coffeeMaker)) }
    </Grid>
  );
}
 
export default Content;