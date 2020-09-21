<?php
session_start();

if ($_SESSION["status"] != "ok") {
  header('location: ../index.php');
}

include('conecta.php');

// PESQUISAR PESSOA
$nome = $_GET['nome-procurar'];
$sql = "SELECT id, tipo, nome, celular, email FROM pessoa WHERE nome LIKE '%$nome%' ";
$resultado = mysqli_query($conn, $sql);
$pessoas = mysqli_fetch_all($resultado, MYSQLI_ASSOC);

// LIBERAR MEMÓRIA
mysqli_free_result($resultado);
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
      <li class="d-inline mr-1"><a href="../pessoas.php" class="btn btn-secondary">Voltar</a></li>
      <li class="d-inline"><a href="sair.php" class="btn btn-outline-danger">Sair</a></li>
    </ul>
  </header>
  <nav>
    <?php include '../templates/menu.php'; ?>
  </nav>
  <section id="top-bar" class="text-center">
    <h1 class="h3 my-3">Pesquisa por nome</h1>
  </section>
  <hr class="m-0">
  <main>
    <table class="table table-hover text-center">
      <thead>
        <tr>
          <th scope="col">Tipo</th>
          <th scope="col">Nome</th>
          <th scope="col">Celular</th>
          <th scope="col">Email</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach($pessoas as $pessoa): ?>
          <tr>
            <td><?php echo $pessoa['tipo']; ?></td>
            <td><?php echo $pessoa['nome']; ?></td>
            <td><?php echo $pessoa['celular']; ?></td>
            <td><?php echo $pessoa['email']; ?></td>
            <td>
              <a href="verpessoa.php?id=<?php echo $pessoa['id']?>" class="btn btn-primary">Ver</a>
              <a href="editar-pessoa.php?id=<?php echo $pessoa['id']; ?>" class="btn btn-info">Editar</a>
              <a href="excluir-pessoa.php?id=<?php echo $pessoa['id']; ?>" class="btn btn-danger">Excluir</a>
            </td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </main>
  <?php include '../templates/footer.php'; ?>
</body>

</html>
