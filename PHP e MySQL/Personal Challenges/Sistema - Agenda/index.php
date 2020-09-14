<!DOCTYPE html>
<html lang="pt-br">

<?php include 'templates/header.php'; ?>

<body>
  <header class="text-center my-4">
    <h1 class="h4">Sistema de Agenda</h1>
  </header>
  <section class="my-4 mx-auto d-flex align-items-center justify-content-center bg-light" style="width: 80vw; max-width: 800px; height: 80vh; max-height: 500px; padding: 100px; border-radius: 15px;">
    <form action="config/login.php" method="POST" class="my-0 mx-auto d-flex flex-column" style="width: 80%; max-width: 50%; height: 80%; max-height: 80%;">
      <label for="login" style="margin-bottom: 0.2em;">Login: </label>
      <input type="text" name="login" id="login" placeholder="Insira seu login" class="mb-3 form-control" required>
      <label for="senha" style="margin-bottom: 0.2em;">Senha: </label>
      <input type="password" name="senha" id="senha" placeholder="Insira sua senha" class="mb-3 form-control" required>
      <button type="submit" class="btn btn-outline-success w-50 mx-auto mt-4">Entrar</button>
    </form>
  </section>
  <?php include 'templates/footer.php'; ?>
</body>

</html>