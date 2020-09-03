<?php 
// connect to database
$conn = mysqli_connect('localhost', 'yunger', 'test1234', 'ninja_pizza');

// check the connection
if (!$conn) {
	echo 'Connection failed: ' . mysqli_connect_error();
}
?>