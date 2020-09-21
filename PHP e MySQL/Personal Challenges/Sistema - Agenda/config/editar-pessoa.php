<?php
session_start();
include('conecta.php');

if ($_SESSION["status"] != "ok") {
  header('location: ../index.php');
}

$idEditar = $_GET['id'] ?? $_POST['id-editar'];

// EDITAR REGISTRO
if(isset($_POST['submit'])){
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $endereco = $_POST['endereco'];
  $cidade = $_POST['cidade'];
  $estado = $_POST['estado'];
  $celular = $_POST['celular'];
  $dataNascimento = $_POST['data-nascimento'];
  $profissao = $_POST['profissao'];
  $tipo = $_POST['tipo'];

  $sql = "UPDATE pessoa SET tipo = '$tipo', nome = '$nome', endereco = '$endereco', cidade = '$cidade', estado = '$estado', celular = '$celular', email = '$email', datanascimento = '$dataNascimento', profissao = '$profissao' WHERE id = '$idEditar'";

  if(mysqli_query($conn, $sql)){
    echo "
      <script language='javascript' type='text/javascript'>
        alert('Pessoa editada com sucesso!');
        window.location.href = '../pessoas.php';
      </script>
    ";
  } else {
    echo "
    <script language='javascript' type='text/javascript'>
      alert('Houve um problema ao editar a pessoa');
      window.location.href = '../pessoas.php';
    </script>
  ";
  }

  mysqli_close($conn);
}

// BUSCAR REGISTRO
$sql = "SELECT * FROM pessoa WHERE id = '$idEditar'" or die(mysqli_error($conn));
$resultado = mysqli_query($conn, $sql);
$pessoa = mysqli_fetch_assoc($resultado);

// LIBERAR MEMORIA
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
  <hr class="m-0">
  <main>
    <h1 class="h3 text-center my-3">Editar pessoa</h1>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" class="p-5 mx-4 w-50 mx-auto bg-light rounded">
      <div class="form-row">
        <div class="form-group col-md-7">
          <label for="nome">Nome: </label>
          <input type="text" name="nome" id="nome" class="form-control" value="<?php echo $pessoa['nome']; ?>" required>
        </div>
        <div class="form-group col-md-5">
          <label for="email">Email: </label>
          <input type="email" name="email" id="email" class="form-control" value="<?php echo $pessoa['email']; ?>" required>
        </div>
      </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="endereco">Endereço: </label>
          <input type="text" name="endereco" id="endereco" class="form-control" value="<?php echo $pessoa['endereco']; ?>">
        </div>
        <div class="form-group col-md-4">
          <label for="cidade">Cidade: </label>
          <input type="text" name="cidade" id="cidade" class="form-control" value="<?php echo $pessoa['cidade']; ?>" >
        </div>
        <div class="form-group col-md-2">
          <label for="estado">Estado: </label>
          <input type="text" name="estado" id="estado" class="form-control" value="<?php echo $pessoa['estado']; ?>">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-7">
          <label for="celular">Celular: </label>
          <input type="tel" name="celular" id="celular" class="form-control" value="<?php echo $pessoa['celular']; ?>" required>
        </div>
        <div class="form-group col-md-5">
          <label for="data-nascimento">Data de nascimento: </label>
          <input type="date" name="data-nascimento" id="data-nascimento" class="form-control" value="<?php echo $pessoa['datanascimento']; ?>">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-7">
          <label for="profissao">Profissão: </label>
          <input type="text" name="profissao" id="profissao" class="form-control" value="<?php echo $pessoa['profissao']; ?>">
        </div>
        <div class="form-group col-md-5">
          <label for="tipo">Tipo: </label>
          <select name="tipo" id="tipo" class="custom-select" required>
            <option disabled>Selecione uma opção</option>
            <?php if($pessoa['tipo'] == 'Fisica'){ ?>
              <option value="Fisica" selected>Física</option>
              <option value="Juridica">Jurídica</option>
            <?php } else { ?>
              <option value="Fisica">Física</option>
              <option value="Juridica" selected>Jurídica</option>
            <?php } ?>
          </select>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <a href="../pessoas.php" class="btn btn-secondary w-25">Cancelar</a>
        <input type="hidden" name="id-editar" value="<?php echo $pessoa['id']; ?>">
        <input type="submit" name="submit" value="Editar" class="btn btn-warning w-25">
      </div>
    </form>
  </main>
  <?php include '../templates/footer.php'; ?>
</body>

</html>