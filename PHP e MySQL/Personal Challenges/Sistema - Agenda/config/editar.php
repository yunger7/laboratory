<?php
session_start();
include('conecta.php');

if ($_SESSION["status"] != "ok") {
  header('location: ../index.php');
}

$idEditar = $_GET['id'];

// EDITAR REGISTRO
if(isset($_POST['submit'])){
  $id = $_POST['id-editar'];
  $nome = $_POST['nome'];
  $login = $_POST['login'];
  $senha = $_POST['senha'];
  $tipo = $_POST['tipo'];

  $sql = "UPDATE usuario SET nome = '$nome', login = '$login', senha = '$senha', tipo = '$tipo' WHERE id = '$id'";

  if(mysqli_query($conn, $sql)){
    echo "<script language = 'javascript' type = 'text/javascript'>
    alert('Usuário editado com sucesso!');
    window.location.href = '../usuarios.php';
    </script>";
  } else {
    echo "<script language = 'javascript' type = 'text/javascript'>
    alert('Não foi possível editar o usuário');
    window.location.href = '../usuarios.php';
    </script>";
  }

  mysqli_close($conn);
}

// BUSCAR REGISTROS

// 1. Todos os usuários
$sql = "SELECT * FROM usuario ORDER BY id" or die(mysqli_error($conn));
$resultado = mysqli_query($conn, $sql);
$usuarios = mysqli_fetch_all($resultado, MYSQLI_ASSOC);

// 2. Usuário para editar
$sql = "SELECT * FROM usuario WHERE id = '$idEditar'" or die(mysqli_error($conn));
$resultadoUsuario = mysqli_query($conn, $sql);
$usuarioEditar = mysqli_fetch_assoc($resultadoUsuario);

// LIBERAR MEMÓRIA
mysqli_free_result($resultado);
mysqli_free_result($resultadoUsuario);
mysqli_close($conn);

?>

<!DOCTYPE html>
<html lang="pt-br">
<?php include '../templates/header.php'; ?>

<body style="width: initial; height: initial; overflow: initial;">
<header class="my-4 d-flex justify-content-between align-items-center">
    <h2 class="h4 ml-4"><span><img src="../images/agenda.svg" alt="Logo" width="50" height="50" class="mb-1 mr-2"></span>Sistema de Agenda</h2>
    <ul class="mr-4 list-unstyled">
      <li class="d-inline mr-2">Olá <?php echo $_SESSION["user"]; ?>!</li>
      <li class="d-inline"><a href="../pessoas.php" class="btn btn-secondary">Voltar</a></li>
      <li class="d-inline"><a href="config/sair.php" class="btn btn-outline-danger">Sair</a></li>
    </ul>
  </header>
  <nav>
    <?php include '../templates/menu.php'; ?>
  </nav>
  <section class="mt-4">
    <h1 class="h3 text-center">Editar usuário</h1>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" class="p-5 w-75 bg-light mx-auto d-flex flex-column" style="max-width: 600px; border-radius: 15px;">
      <label for="nome" style="margin-bottom: 0.2em;">Nome: </label>
      <input class="form-control mb-2" type="text" name="nome" id="nome" value="<?php echo $usuarioEditar['nome']; ?>" placeholder="Digite o nome" required>
      <label for="login" style="margin-bottom: 0.2em;">Login: </label>
      <input class="form-control mb-2" type="text" name="login" id="login" value="<?php echo $usuarioEditar['login']; ?>" placeholder="Digite o login" required>
      <label for="senha" style="margin-bottom: 0.2em;">Senha: </label>
      <input class="form-control mb-2" type="password" name="senha" id="senha" value="<?php echo $usuarioEditar['senha'] ?>" placeholder="Digite a senha" required>
      <label for="tipo-usuario" style="margin-bottom: 0.2em;">Tipo do usuário</label>
      <select class="custom-select mb-2" name="tipo" id="tipo-usuario" required>
        <?php if($usuarioEditar['tipo'] == 'admin'){ ?>
          <option disabled>Selecione uma opção</option>
          <option value="admin" selected>Admin</option>
          <option value="normal">Normal</option>
        <?php } elseif ($usuarioEditar['tipo'] == 'normal'){ ?>
          <option disabled>Selecione uma opção</option>
          <option value="admin">Admin</option>
          <option value="normal" selected>Normal</option>
        <?php } ?>
      </select>
      <div class="buttons d-flex align-items-center justify-content-between py-3">
        <a href="../usuarios.php" class="btn btn-secondary w-25">Cancelar</a>
        <input type="hidden" name="id-editar" value="<?php echo $usuarioEditar['id']; ?>">
        <input type="submit" name="submit" value="Editar usuário" class="btn btn-warning w-25">
      </div>
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
          <th scope="col">Tipo</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($usuarios as $usuario) : ?>
          <?php if($usuario['id'] == $idEditar){ ?>
            <tr style="background-color: #ECECEC;">
              <th scope="row"><?php echo $usuario['id']; ?></th>
              <td><?php echo $usuario['nome'];?></td>
              <td><?php echo $usuario['login'];?></td>
              <td><?php echo $usuario['senha'];?></td>
              <td><?php echo $usuario['tipo'];?></td>
           </tr>
          <?php } else { ?>
          <tr>
            <th scope="row"><?php echo $usuario['id']; ?></th>
            <td><?php echo $usuario['nome'];?></td>
            <td><?php echo $usuario['login'];?></td>
            <td><?php echo $usuario['senha'];?></td>
            <td><?php echo $usuario['tipo'];?></td>
          </tr>
          <?php } ?>
        <?php endforeach; ?>
      </tbody>
    </table>
  </section>
  <?php include '../templates/footer.php'; ?>
</body>

</html>