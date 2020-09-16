<?php
session_start();

if ($_SESSION["status"] != "ok") {
  header('location:index.php');
}

include('config/conecta.php');

// BUSCAR REGISTROS
$sql = "SELECT id, tipo, nome, celular, email FROM pessoa ORDER BY nome";
$resultado = mysqli_query($conn, $sql);
$pessoas = mysqli_fetch_all($resultado, MYSQLI_ASSOC);

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
  <section id="top-bar" class="my-3 d-flex justify-content-between align-items-center">
    <ul class="m-0 ml-3 list-unstyled">
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">A | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">B | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">C | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">D | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">E | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">F | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">G | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">H | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">I | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">J | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">K | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">L | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">M | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">N | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">O | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">P | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">Q | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">R | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">S | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">T | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">U | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">V | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">W | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">X | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">Y | </a></li>
      <li class="d-inline font-weight-bold"><a href="#" class="text-decoration-none">Z | </a></li>
    </ul>
    <form action="config/procurar.php" method="GET" class="mr-4">
      <div class="input-group">
        <input type="text" name="procurar" class="form-control" placeholder="Procurar">
        <div class="input-group-append">
          <button type="submit" class="btn btn-outline-success">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
              <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  </section>
  <hr class="m-0">
  <div class="text-center bg-light"><a href="cadastrar-pessoas.php" class="btn btn-primary w-25 my-3">Cadastrar pessoas</a></div>
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
              <a href="config/editar-pessoa.php?id=<?php echo $pessoa['id']; ?>" class="btn btn-warning">Editar</a>
              <a href="config/excluir-pessoa.php?id=<?php echo $pessoa['id']; ?>" class="btn btn-danger">Excluir</a>
            </td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </main>
  <?php include 'templates/footer.php'; ?>
</body>

</html>
