<?php
include('conecta.php');

$idExcluir = $_POST['id-excluir'];
$sql = "DELETE FROM usuario WHERE id = '$idExcluir'";

if(mysqli_query($conn, $sql)){
  echo "<script language='javascript' type='text/javascript'>
  alert('Usuário excluído com sucesso!');
  window.location.href = '../painel-admin.php';
  </script>"; 
} else {
  echo "<script language='javascript' type='text/javascript'>
  alert('Não foi possível excluir o usuário');
  window.location.href = '../painel-admin.php';
  </script>"; 
}
?>