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
    <h2 class="h4 ml-4"><span><img src="images/agenda.svg" alt="Logo" width="50" height="50" class="mb-1 mr-2"></span>Sistema de Agenda</h2>
    <ul class="mr-4 list-unstyled">
      <li class="d-inline mr-2">Olá <?php echo $_SESSION["user"]; ?>!</li>
      <li class="d-inline"><a href="config/sair.php" class="btn btn-outline-danger">Sair</a></li>
    </ul>
  </header>
  <nav>
    <?php include 'templates/menu.php'; ?>
  </nav>
  <main class="mt-4 d-flex align-items-start">
    <section id="cadastro" class="w-50 mx-3 position-relative d-flex flex-column align-items-center justify-content-center">
      <div id="top-bar" class="bg-info position-absolute fixed-top rounded d-flex align-items-center w-75 mx-auto" style="height: 50px;">
        <svg class="ml-3" width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-person-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="color: white;">
          <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path fill-rule="evenodd" d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
        <h2 class="h4 text-center text-light m-0 ml-2 mb-1" style="font-size: 1.2em;">Cadastrar usuário</h2>
      </div>
      <form action="config/cadusuario.php" method="POST" class="p-5 w-75 bg-light my-3 d-flex flex-column" style="max-width: 600px; border-radius: 15px;">
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
        <button type="submit" class="btn btn-info w-50 mx-auto mt-4" style=" max-width: 200px;">Cadastrar usuário</button>
      </form>
    </section>
    <section id="usuarios-cadastrados" class="w-50 mx-3 position-relative d-flex flex-column align-items-center justify-content-center">
      <div id="top-bar" class="bg-light position-absolute fixed-top rounded d-flex align-items-center justify-content-center w-100 mx-auto border" style="height: 50px;">
        <h2 class="h4 text-center">Usuários cadastrados</h2>
      </div>
      <table class="table table-hover text-center border mx-auto my-5">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Login</th>
            <th scope="col">Senha</th>
            <th scope="col">Tipo</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($usuarios as $usuario) : ?>
            <tr>
              <th scope="row"><?php echo $usuario['id']; ?></th>
              <td><?php echo $usuario['nome']; ?></td>
              <td><?php echo $usuario['login']; ?></td>
              <td><?php echo $usuario['senha']; ?></td>
              <td><?php echo $usuario['tipo']; ?></td>
              <td>
                <a href="config/editar-usuario.php?id=<?php echo $usuario['id']; ?>" class="btn btn-warning">Editar</a>
                <form action="config/excluir-usuario.php" method="POST" class="d-inline">
                  <input type="hidden" name="id-excluir" value="<?php echo $usuario['id']; ?>">
                  <input type="submit" value="Excluir" class="btn btn-danger">
                </form>
              </td>
            </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
    </section>
  </main>
  <?php include 'templates/footer.php'; ?>
</body>

</html>