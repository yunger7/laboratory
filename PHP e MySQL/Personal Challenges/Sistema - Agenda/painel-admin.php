<?php
session_start();

if ($_SESSION["status"] != "ok") {
  header('location: index.php');
}

// BUSCAR REGISTROS
include('config/conecta.php');
$sql = "SELECT * FROM usuario ORDER BY id" or die(mysqli_error($conn));
$resultado = mysqli_query($conn, $sql);
$usuarios = mysqli_fetch_all($resultado, MYSQLI_ASSOC);

// LIBERAR MEMÓRIA
mysqli_free_result($resultado);
mysqli_close($conn);

?>

<!DOCTYPE html>
<html lang="pt-br">
<?php include 'templates/header.php'; ?>

<body style="width: initial; height: initial; overflow: initial;">
  <header class="my-4 d-flex justify-content-between align-items-center">
    <h2 class="h4 ml-4">Sistema de Agenda</h2>
    <ul class="mr-4 list-unstyled">
      <li class="d-inline mr-2">Olá <?php echo $_SESSION["user"]; ?>!</li>
      <li class="d-inline"><a href="config/sair.php" class="btn btn-outline-danger">Sair</a></li>
    </ul>
  </header>
  <nav>
    <?php include 'templates/menu.php'; ?>
  </nav>
  <section class="mt-4">
    <h1 class="h3 text-center">Cadastrar pessoa</h1>
    <form action="config/cadusuario.php" method="POST" class="p-5 w-75 bg-light mx-auto d-flex flex-column" style="max-width: 600px; border-radius: 15px;">
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
      <button type="submit" class="btn btn-success w-50 mx-auto mt-4" style=" max-width: 200px;">Cadastrar usuário</button>
    </form>
  </section>
  <hr>
  <section>
    <table class="table text-center">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Login</th>
          <th scope="col">Senha</th>
          <th scope="col">Configurações</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($usuarios as $usuario) : ?>
          <tr>
            <th scope="row"><?php echo $usuario['id']; ?></th>
            <td><?php echo $usuario['nome']; ?></td>
            <td><?php echo $usuario['login']; ?></td>
            <td><?php echo $usuario['senha']; ?></td>
            <td>
              <a href="editar.php?id=<?php echo $usuario['id']; ?>" class="btn btn-warning">Editar</a>
              <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST" class="d-inline">
                <input type="hidden" name="id-excluir" value="<?php echo $usuario['id']; ?>">
                <input type="submit" value="Excluir" class="btn btn-danger">
              </form>
            </td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </section>
  <?php include 'templates/footer.php'; ?>
</body>

</html>