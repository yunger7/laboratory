<?php
session_start();

if ($_SESSION["status"] != "ok") {
  header('location:index.php');
}

?>

<!DOCTYPE html>
<html lang="pt-br">
<?php include 'templates/header.php'; ?>

<body style="width: initial; height: initial; overflow: initial;">
  <header class="my-4 d-flex justify-content-between align-items-center">
    <h2 class="h4 ml-4"><span><img src="images/agenda.svg" alt="Logo" width="50" height="50" class="mb-1 mr-2"></span>Sistema de Agenda</h2>
    <ul class="mr-4 list-unstyled">
      <li class="d-inline mr-2">Olá <?php echo $_SESSION["user"]; ?>!</li>
      <li class="d-inline mr-1"><a href="pessoas.php" class="btn btn-secondary">Voltar</a></li>
      <li class="d-inline"><a href="config/sair.php" class="btn btn-outline-danger">Sair</a></li>
    </ul>
  </header>
  <hr>
  <main>
    <h1 class="h3 text-center my-3">Cadastrar pessoa</h1>
    <form action="config/cadpessoa.php" method="POST" class="p-5 mx-4 w-50 mx-auto bg-light rounded">
      <div class="form-row">
        <div class="form-group col-md-7">
          <label for="nome">Nome: </label>
          <input type="text" name="nome" id="nome" value="<?php  ?>" class="form-control" required>
        </div>
        <div class="form-group col-md-5">
          <label for="email">Email: </label>
          <input type="email" name="email" id="email" class="form-control" required>
        </div>
      </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="endereco">Endereço: </label>
          <input type="text" name="endereco" id="endereco" class="form-control">
        </div>
        <div class="form-group col-md-4">
          <label for="cidade">Cidade: </label>
          <input type="text" name="cidade" id="cidade" class="form-control">
        </div>
        <div class="form-group col-md-2">
          <label for="estado">Estado: </label>
          <input type="text" name="estado" id="estado" class="form-control">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-7">
          <label for="celular">Celular: </label>
          <input type="tel" name="celular" id="celular" class="form-control" required>
        </div>
        <div class="form-group col-md-5">
          <label for="data-nascimento">Data de nascimento: </label>
          <input type="date" name="data-nascimento" id="data-nascimento" class="form-control">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-7">
          <label for="profissao">Profissão: </label>
          <input type="text" name="profissao" id="profissao" class="form-control">
        </div>
        <div class="form-group col-md-5">
          <label for="tipo">Tipo: </label>
          <select name="tipo" id="tipo" class="custom-select" required>
            <option disabled selected>Selecione uma opção</option>
            <option value="Fisica">Física</option>
            <option value="Juridica">Jurídica</option>
          </select>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center py-3">
        <a href="pessoas.php" class="btn btn-secondary w-25">Cancelar</a>
        <input type="submit" value="Cadastrar" class="btn btn-success w-25">
      </div>
    </form>
  </main>
  <?php include 'templates/footer.php'; ?>
</body>

</html>