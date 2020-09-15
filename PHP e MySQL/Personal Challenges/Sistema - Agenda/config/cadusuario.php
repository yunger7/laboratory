<?php
include('conecta.php');

$nome = $_POST['nome'];
$login = $_POST['login'];
$senha = $_POST['senha'];
$tipo = $_POST['tipo'];

$sql = "INSERT INTO usuario (nome, login, senha, tipo) VALUES ('$nome', '$login', '$senha', '$tipo')";

if(mysqli_query($conn, $sql)){
  echo "<script language='javascript' type='text/javascript'>
  alert('Usuário cadastrado com sucesso!');
  window.location.href = '../usuarios.php';
  </script>"; 
} else {
  echo "
  <script language='javascript' type='text/javascript'>
  alert('Não foi possível cadastrar o usuário!');
  window.location.href = '../usuarios.php';
  </script>";
}
