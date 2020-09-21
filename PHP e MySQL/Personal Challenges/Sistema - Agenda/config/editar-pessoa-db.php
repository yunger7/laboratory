<?php
include('conecta.php');

$idEditar = $_POST['id-editar'];

$nome = $_POST['nome'];
$email = $_POST['email'];
$endereco = $_POST['endereco'];
$cidade = $_POST['cidade'];
$estado = $_POST['estado'];
$celular = $_POST['celular'];
$dataNascimento = $_POST['data-nascimento'];
$profissao = $_POST['profissao'];
$tipo = $_POST['tipo'];

$sql = "UPDATE pessoa SET tipo = '$tipo', nome = '$nome', endereco = '$endereco', cidade = '$cidade', estado = '$estado', celular = '$celular', email = '$email', datanascimento = '$dataNascimento', profissao = '$profissao' WHERE id = '$idEditar' ";

if (mysqli_query($conn, $sql)) {
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

?>