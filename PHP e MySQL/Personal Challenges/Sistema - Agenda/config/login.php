<?php
  // iniciar sessão
  session_start();
  include('conecta.php');
  $login = $_POST['login'];
  $senha = $_POST['senha'];

  // verificar se existe no banco
  $sql = "SELECT * FROM usuario WHERE login = '$login' AND senha = '$senha'";
  $logar = mysqli_query($conn, $sql) or die(mysqli_connect_error());

  if(mysqli_num_rows($logar) > 0){
    $usuario = mysqli_fetch_array($logar);

    $_SESSION['user'] = $usuario['nome'];
    $_SESSION['tipo'] = $usuario['tipo'];
    $_SESSION['status'] = 'ok';

    echo "
      <script language='javascript' type='text/javascript'>
        location.href = '../agenda.php';
      </script>
    ";
  } else {
    echo "
      <script language='javascript' type='text/javascript'>
        alert('Login ou senha incorretos! Tente novamente!');
        location.href = '../index.php';
      </script>
    ";
  }
  mysqli_close($conn);
?>