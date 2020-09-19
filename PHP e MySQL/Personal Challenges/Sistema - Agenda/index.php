<!DOCTYPE html>
<html lang="pt-br">

<?php include 'templates/header.php'; ?>

<body>
  <header class="text-center my-4">
    <h1 class="h4">Sistema de Agenda</h1>
  </header>
  <section class="my-4 mx-auto position-relative d-flex flex-column align-items-center justify-content-center rounded" style="width: 60vw; max-width: 700px; height: 60vh; max-height: 500px; padding: 100px; background-color: #f3f5f7;">
    <div id="top-bar" class="bg-info position-absolute fixed-top w-100 rounded d-flex align-items-center" style="height: 50px;">
      <svg class="ml-3" width="25px" height="25px" viewBox="0 0 16 16" class="bi bi-person-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="color: white;">
        <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
        <path fill-rule="evenodd" d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
      <p class="d-inline-block text-light m-0 ml-2 mb-1" style="font-size: 1.2em;">Login</p>
    </div>
    <form action="config/login.php" method="POST" class="my-0 mx-auto d-flex flex-column" style="width: 80%; max-width: 80%; height: 100%; max-height: 100%;">
      <label for="login" style="margin-bottom: 0.2em;">Login: </label>
      <input type="text" name="login" id="login" placeholder="Insira seu login" class="mb-3 form-control" required>
      <label for="senha" style="margin-bottom: 0.2em;">Senha: </label>
      <input type="password" name="senha" id="senha" placeholder="Insira sua senha" class="mb-3 form-control" required>
      <button type="submit" class="btn btn-info w-50 mx-auto mt-4">Entrar</button>
    </form>
  </section>
  <?php include 'templates/footer.php'; ?>
</body>

</html>