<?php

include('config/db_connect.php');

$email = $title = $ingredients = '';
$errors = array('email' => '', 'title' => '', 'ingredients' => '');

// FORM VALIDATION //
// this checking if the submit input was initialized
if (isset($_POST['submit'])) {
	// check if email is empty
	if (empty($_POST['email'])) {
		$errors['email'] = 'An email is required <br/>';
	} else {
		$email = $_POST['email'];
		// check if it's a email using a filter
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$errors['email'] = 'Email must be a valid email address';
		}
	}

	// check if title is empty
	if (empty($_POST['title'])) {
		$errors['title'] = 'A title is required <br/>';
	} else {
		// check if it's a title using a regular expression
		$title = $_POST['title'];
		if (!preg_match('/^[a-zA-Z\s]+$/', $title)) {
			$errors['title'] = 'Title must be letters and spaces only';
		}
	}

	// check if ingredients is empty
	if (empty($_POST['ingredients'])) {
		$errors['ingredients'] = 'At least one ingredient is required <br/>';
	} else {
		// check if it's a comma separated list using a regular expression
		$ingredients = $_POST['ingredients'];
		if (!preg_match('/^([a-zA-Z\s]+)(,\s*[a-zA-Z\s]*)*$/', $ingredients)) {
			$errors['ingredients'] = 'Ingredients must be a comma separated list';
		}
	}

	if (array_filter($errors)){
		// if there are errors
	} else {
		// if there are no errors

		$email = mysqli_real_escape_string($conn, $_POST['email']);
		$title = mysqli_real_escape_string($conn, $_POST['title']);
		$ingredients = mysqli_real_escape_string($conn, $_POST['ingredients']);

		// create sql
		$sql = "INSERT INTO pizzas(title, email, ingredients) VALUES('$title', '$email', '$ingredients')";

		//save to db and check
		if(mysqli_query($conn, $sql)) {
			// success (return true)
			header('Location: index.php'); // redirect
		} else {
			// error (return false)
			echo 'Query error: ' . mysqli_error($conn);
		}
	}

} // end of POST check

?>

<!DOCTYPE html>
<html lang="en">
<?php include('templates/header.php'); ?>

<section class="container grey-text">
	<h4 class="center">Add a Pizza</h4>
	<form action="add.php" method="POST" class="white">
		<label>Your Email:</label>
		<input type="text" name="email" value="<?php echo htmlspecialchars($email) ?>">
		<div class="red-text"><?php echo $errors['email'] ?></div>
		<label>Pizza Title:</label>
		<input type="text" name="title" value="<?php echo htmlspecialchars($title) ?>">
		<div class="red-text"><?php echo $errors['title'] ?></div>
		<label>Ingredients (comma separated):</label>
		<input type="text" name="ingredients" value="<?php echo htmlspecialchars($ingredients) ?>">
		<div class="red-text"><?php echo $errors['ingredients'] ?></div>
		<div class="center">
		<input type="submit" name="submit" value="Submit" class="btn brand z-depth-0">
		</div>
	</form>
</section>

<?php include('templates/footer.php'); ?>

</html>
