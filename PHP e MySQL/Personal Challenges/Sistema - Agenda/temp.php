<?php
session_start();
if ($_SESSION["status"] != "ok") {
  header('location: index.php');
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<?php include 'templates/header.php'; ?>

<body>
  <header class="my-4 d-flex justify-content-between align-items-center">
    <h2 class="h4 ml-4">Sistema de Agenda</h2>
    <ul class="mr-4 list-unstyled">
      <li class="d-inline mr-2">Olá <?php echo $_SESSION["user"]; ?>!</li>
      <li class="d-inline"><a href="config/sair.php" class="btn btn-danger">Sair</a></li>
    </ul>
  </header>
  <nav>
    <?php include 'templates/menu.php'; ?>
  </nav>
  <section class="mt-4">
    <h1 class="h3 text-center">Cadastrar pessoa</h1>
    <form action="#" method="POST" class="p-5 w-75 mx-auto" style="max-width: 600px;">
      <label for="nome" style="margin-bottom: 0.2em;">Nome: </label>
      <input class="form-control mb-2" type="text" name="nome" id="nome" placeholder="Digite o nome" required>
      <label for="login" style="margin-bottom: 0.2em;">Login: </label>
      <input class="form-control mb-2" type="text" name="login" id="login" placeholder="Digite o login" required>
      <label for="senha" style="margin-bottom: 0.2em;">Senha: </label>
      <input class="form-control mb-2" type="password" name="senha" id="senha" placeholder="Digite a senha" required>
      <label for="tipo-usuario" style="margin-bottom: 0.2em;">Tipo do usuário</label>
      <select class="custom-select mb-2" name="tipo" id="tipo-usuario" required>
        <option disabled selected>Selecione uma opção</option>
        <option value="admin">Admin</option>
        <option value="normal">Normal</option>
      </select>
      <button type="submit" class="btn btn-outline-success w-50 mx-auto" style=" max-width: 200px;">Cadastrar usuário</button>
    </form>
  </section>
  <?php include 'templates/footer.php'; ?>
</body>

</html>