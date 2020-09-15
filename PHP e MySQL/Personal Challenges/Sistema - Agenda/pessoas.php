<?php
session_start();

if ($_SESSION["status"] != "ok") {
  header('location:index.php');
}

// BUSCAR REGISTROS
include('config/conecta.php');
$sql = "SELECT * FROM usuario ORDER BY id" or die(mysqli_error($conn));
$resultado = mysqli_query($conn, $sql);
$usuarios = mysqli_fetch_all($resultado, MYSQLI_ASSOC);

?>

<!DOCTYPE html>
<html lang="pt-br">
<?php include 'templates/header.php'; ?>

<body>
  <header class="my-4 d-flex justify-content-between align-items-center">
    <h1 class="h4 ml-4">Sistema de Agenda</h1>
    <ul class="mr-4 list-unstyled">
      <li class="d-inline mr-2">Olá <?php echo $_SESSION["user"]; ?>!</li>
      <li class="d-inline"><a href="config/sair.php" class="btn btn-outline-danger">Sair</a></li>
    </ul>
  </header>
  <nav>
    <?php include 'templates/menu.php'; ?>
  </nav>
  <?php include 'templates/footer.php'; ?>
</body>

</html>