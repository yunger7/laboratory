<?php
include('config/db_connect.php');

// write query for all pizzas
$sql = 'SELECT title, ingredients, id FROM pizzas ORDER BY created_at';

// make query & get result
$result = mysqli_query($conn, $sql);

// fetch the resulting rows as an array
$pizzas  = mysqli_fetch_all($result, MYSQLI_ASSOC);

// free the result from memory (good practice)
mysqli_free_result($result);

// close the connection
mysqli_close($conn);

?>

<!DOCTYPE html>
<html lang="en">
<?php include('templates/header.php'); ?>

<h4 class="center grey-text">Pizzas</h4>
<div class="container">
	<div class="row">
		<?php foreach ($pizzas as $pizza) : ?>

			<div class="col s6 md3">
				<div class="card z-depth-0">
					<img src="img/pizza.svg" class="pizza">
					<div class="card-content center">
						<h6><?php echo htmlspecialchars($pizza['title']); ?></h6>
						<div>
							<ul>
								<?php foreach (explode(',', $pizza['ingredients']) as $ingredient) : ?>
									<li><?php echo htmlspecialchars($ingredient); ?></li>
								<?php endforeach; ?>
							</ul>
						</div>
					</div>
					<div class="card-action right-align"><a href="details.php?id=<?php echo $pizza['id'] ?>" class="brand-text">More info</a></div>
				</div>
			</div>

		<?php endforeach; ?>
	</div>
</div>

<?php include('templates/footer.php'); ?>

</html>