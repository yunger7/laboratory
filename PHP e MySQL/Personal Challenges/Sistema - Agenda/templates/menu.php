<?php
$tipo = $_SESSION['tipo'];
$current_file = basename($_SERVER['PHP_SELF']);
?>

<?php
// HOME
if ($current_file === 'agenda.php') {
  if ($tipo === 'admin') {
?>
    <ul class="nav nav-tabs">
      <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="painel-admin.php">Painel</a></li>
      <li class="nav-item"><a class="nav-link" href="pessoas.php">Pessoas</a></li>
    </ul>
<?php } else { ?>
  <ul class="nav nav-tabs">
    <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
    <li class="nav-item"><a class="nav-link" href="pessoas.php">Pessoas</a></li>
  </ul>
<?php } } ?>

<?php
// Painel
if ($current_file === 'painel-admin.php') {
  if ($tipo === 'admin') {
?>
    <ul class="nav nav-tabs">
      <li class="nav-item"><a class="nav-link" href="agenda.php">Home</a></li>
      <li class="nav-item"><a class="nav-link active" href="#">Painel</a></li>
      <li class="nav-item"><a class="nav-link" href="pessoas.php">Pessoas</a></li>
    </ul>
<?php } else { ?>
  <ul class="nav nav-tabs">
    <li class="nav-item"><a class="nav-link" href="agenda.php">Home</a></li>
    <li class="nav-item"><a class="nav-link" href="pessoas.php">Pessoas</a></li>
  </ul>
<?php } } ?>

<?php
// Pessoas
if ($current_file === 'pessoas.php') {
  if ($tipo === 'admin') {
?>
    <ul class="nav nav-tabs">
      <li class="nav-item"><a class="nav-link" href="agenda.php">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="painel-admin.php">Painel</a></li>
      <li class="nav-item"><a class="nav-link active" href="#">Pessoas</a></li>
    </ul>
<?php } else { ?>
  <ul class="nav nav-tabs">
    <li class="nav-item"><a class="nav-link" href="agenda.php">Home</a></li>
    <li class="nav-item"><a class="nav-link active" href="#">Pessoas</a></li>
  </ul>
<?php } } ?>