<?php
include('conecta.php');
$idExcluir = $_GET['id'];

$sql = "DELETE FROM pessoa WHERE id = '$idExcluir'";

if(mysqli_query($conn, $sql)){
  echo "
    <script language='javascript' type='text/javascript'>
      alert('Pessoa excluído com sucesso!');
      window.location.href = '../pessoas.php';
    </script>
  "; 
} else {
  echo "
    <script language='javascript' type='text/javascript'>
      alert('Houve um problema ao excluir a pessoa');
      window.location.href = '../pessoas.php';
    </script>
  "; 
}
?>